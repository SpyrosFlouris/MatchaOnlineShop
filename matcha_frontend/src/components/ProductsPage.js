import React, {useState} from 'react';
import ProductView from './ProductView.js';
import Footer from './Footer.js'
import cart from '../images/shopping-cart.png';
import user from '../images/user.png';
import logo from '../images/icon.png';
import { useLocation } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

export default function ProductsPage(allData){
  const location = useLocation()
  const navigate = useNavigate()
  const { pathname } = location
  
  const [searchTerm, setSearchTerm] = useState('')
  const [selectedProduct, setSelectedProduct] = useState(null)
  const [productPressed, setProductPressed] = useState(false)

  let data = allData.products
  const AllData = allData.products

  const teaData = data.filter(product => product.mainCategory === "tea")
  const accessoryData = data.filter(product => product.mainCategory === "accessory")
  const blendsData = data.filter(product => product.mainCategory === "blends")
  const bagsData = data.filter(product => product.category === "bags")
  const icedData = data.filter(product => product.category === "iced")
  const ceramicsData = data.filter(product => product.category === "ceramics")
  const toolData = data.filter(product => product.category === "tools")
  const matchaData = data.filter(product => product.category === "matcha")
  const looseData = data.filter(product => product.category === "loose")

  console.log(searchTerm)

  if(pathname === "/tea_products" && searchTerm === ''){
    data = teaData
  }
  if(pathname === "/blends" && searchTerm === ''){
    data = blendsData
  }
  if(pathname === "/accessories" && searchTerm === ''){
    data = accessoryData
  }
  if(pathname === "/tea_bags" && searchTerm === ''){
    data = bagsData
  }
  if(pathname === "/iced_tea" && searchTerm === ''){
    data = icedData
  }
  if(pathname === "/ceramics" && searchTerm === ''){
    data = ceramicsData
  }
  if(pathname === "/tools" && searchTerm === ''){
    data = toolData
  }
  if(pathname === "/matcha" && searchTerm === ''){
    data = matchaData
  }
  if(pathname === "/loose" && searchTerm === ''){
    data = looseData
  }
  if(searchTerm !== ''){
    const filteredData = AllData.filter((product) =>
      Object.values(product).some((value) =>
        typeof value === 'string' && value.toLowerCase().includes(searchTerm.toLowerCase())
      )
    )
    data = filteredData
  }
  
  const handleProductClick = (product) => {
    setProductPressed(prev => !prev)
    setSelectedProduct(product);
  }

  return (
    <div className="products-page">
      {productPressed == false && <div>
      <header>
      <div className='header-icons'>
        <div className="cart-icon">
          <img src={cart} alt="Cart" onClick={() => {navigate('/cart')}}/>
        </div>
        <div className="user-icon">
          <img src={user} alt="User" onClick={() => {navigate('/cart')}}/>
        </div>
      </div>
      <div className='logo'>
          <img src={logo} alt="Logo" />
        </div>
        <h1>Matcha Tea Heaven</h1>
        <p>Your source for premium matcha tea and more ☕︎</p>
      </header>

      <div className="search-bar">
        <input type="text" placeholder="Search anything you like.." value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)}/>
        <button onClick={() => setSearchTerm('')}>Clear</button>
        <button>Search</button>
      </div>

      <div className="main-content">
        
        <section className="product-grid">
          {data.map((product) => (
            <div key={product.id} className="product-card" onClick={() => handleProductClick(product)}>
              <img src={`data:image/webp;base64,${btoa(
                        Uint8Array.from(product.imageUrl.data).reduce((data, byte) => data + String.fromCharCode(byte), '')
                      )}`} alt={product.name} />
              <h2>{product.name}</h2>
              <p>{product.description}</p>
              <p className="price">{product.price}</p>
              <button className='AddToCart'>See More</button>
            </div>
          ))}
        </section>
      </div>
      <nav className="sidebar">
        <ul>
          <li><a href="/">Home</a></li>
          <li><a href="/all_products">All Products</a></li>
          <li><a href="/tea_products">Tea</a></li>
          <li><a href="/blends">Blends</a></li>
          <li><a href="/accessories">Accessories</a></li>
          <li><a href="/contact">Contact</a></li>
          <li><a href="/info">Info</a></li>
        </ul>
      </nav>
      <Footer />
        </div>}
      {productPressed == true && <div><header><div className='header-icons'>
        <div className="cart-icon">
          <img src={cart} alt="Cart" onClick={() => {navigate('/cart')}}/>
        </div>
        <div className="user-icon">
         <img src={user} alt="User" onClick={() => {navigate('/login')}}/>
        </div>
      </div>
      <div className='logo'>
          <img src={logo} alt="Logo" />
      </div>
        <h1>Matcha Tea Heaven</h1>
        <p>Your source for premium matcha tea and more ☕︎</p></header><ProductView selectedProduct={selectedProduct}/><Footer /></div>}
      
    </div>
  );
};