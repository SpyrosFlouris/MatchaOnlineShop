import React from 'react';
import LogInPage from './components/LogInPage';
import AddCart from './components/AddCart';
import Footer from './components/Footer';
import Article from './components/Article';
import brewmatcha from './images/brewmatcha.webp';
import matchalatte from './images/matchalatte.webp';
import health from './images/healthbenefits.webp';
import { Helmet } from 'react-helmet';
import icon from './images/icon.png';
import axios from 'axios';
import user from './images/user.png';
import cart from './images/shopping-cart.png';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import CartPage from './components/CartPage';
import Pay from './components/Pay'
import BlogPage from './components/BlogPage';
import ContactPage from './components/ContactPage';
import InfoPage from './components/InfoPage';
import ProductsPage from './components/ProductsPage';

const App = () => {
  const [dataFromServer, setDataFromServer] = React.useState([]);
  const [allData, setAllData] = React.useState([])
  const [loggedInUser, setLoggedInUser] = React.useState(null)
  const [searchTerm, setSearchTerm] = React.useState('')
  const navigate = useNavigate()

  React.useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://localhost:3001/products');
        setAllData(response.data)
        setDataFromServer(response.data.slice(0, 3));
        console.log(response.data)
      } catch (err) {
        console.error('Error fetching data: ', err);
      }
    };
    fetchData();
  }, []);

  React.useEffect(() => {
    if(loggedInUser === null){
      const randomID = Math.floor(Math.random() * 10000) + 1
      const guestUser = {id: randomID, name: 'guest', items: []}
      setLoggedInUser(guestUser)
    }
  }, [loggedInUser])

  const handleLogin = (userData) => {
    setLoggedInUser(userData);
    console.log(userData)
  }

  function cartIconPressed(){
    navigate('/cart')
  }

  function handleSearch(){
    const filteredData = allData.filter((product) =>
    Object.values(product).some((value) =>
      typeof value === 'string' && value.toLowerCase().includes(searchTerm.toLowerCase())
    )
  );
  setDataFromServer(filteredData.slice(0, 3));
  }

  function userIconPressed(){
    if(loggedInUser.name === "guest"){
      navigate('/login')
    }
    else{
      const userConfirmed = window.confirm("Are you sure you want to log out?");

      if (userConfirmed) {
        console.log("Logging out...");
        const randomID = Math.floor(Math.random() * 10000) + 1
        const guestUser = {id: randomID, name: 'guest', items: []}
        setLoggedInUser(guestUser)
      } else {
        // User clicked "Cancel" or closed the dialog
        console.log("Logout canceled");
      }
    }
  }

  const texts = {
    htext1: 'The Art of Brewing Perfect Matcha',
    ptext1: 'Discover the secrets to brewing the perfect cup of matcha with our step-by-step guide.',
    htext2: 'Health Benefits of Matcha',
    ptext2: 'Learn about the various health benefits associated with consuming matcha regularly.',
    htext3: 'The Matcha Latte Recipe',
    ptext3: 'A simple and delicious recipe. Learn the art of frothing and enjoy the rich flavor of matcha combined with smooth, velvety milk.',
  };

  return (
    <Routes>
      <Route
        path="/"
        element={
          <div>
            <Helmet>
              <link rel="icon" href={icon} />
            </Helmet>
              <div>
                <header>
                  <div className="header-icons">
                    <div className="cart-icon" onClick={cartIconPressed}>
                      <img src={cart} alt="Cart" />
                    </div>
                    <div className="user-icon">
                      <img src={user} alt="User" onClick={userIconPressed}/>
                    </div>
                  </div>
                  <h1>Matcha Tea Heaven</h1>
                  <p>Your source for premium matcha tea and more ☕︎</p>
                </header>
                
                <nav>
                <ul>
                  <li><a href="/">Home</a></li>
                  <li><a href="/tea_products">Tea Products</a>
                  <div className="dropdown">
                      <a href="/tea_bags">Tea Bags</a>
                      <a href="/iced_tea">Iced Tea</a>
                    </div>
                  </li>
                  <li><a href="/accessories">Accessories</a>
                  <div className="dropdown">
                      <a href="/ceramics">Ceramics</a>
                      <a href="/tools">Tea Tools</a>
                    </div>
                  </li>
                  <li><a href="/blends">Blends</a>
                  <div className="dropdown">
                      <a href="/matcha">Matcha</a>
                      <a href="/loose">Loose Tea</a>
                    </div>
                  </li>
                  <li><a href="/blog">Articles</a></li>
                  <li><a href="/contact">Contact</a></li>
                  <li><a href="/info">Info</a></li>
                </ul>
              </nav>

              <div className="search-bar">
                <input type="text" placeholder="Search anything you like.." value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)}/>
                <button onClick={() => setSearchTerm('')}>Clear</button>
                <button onClick={handleSearch}>Search</button>
              </div>

                <h1 style={{ textAlign: 'center' }}>Welcome to Matcha Tea Heaven!</h1>
                <section className="featured-products">
                  {dataFromServer.map((product) => (
                    <AddCart
                      name={product.name}
                      image={`data:image/webp;base64,${btoa(
                        Uint8Array.from(product.imageUrl.data).reduce((data, byte) => data + String.fromCharCode(byte), '')
                      )}`}
                      price={product.price}
                      username={loggedInUser.name}
                    />
                  ))}
                </section>
                <section className="about-us">
                  <h2>About us</h2>
                  <p>
                    At Matcha Tea Heaven, we are passionate about bringing you the finest matcha tea products. Our commitment is to
                    provide a delightful experience that goes beyond just a cup of tea. Explore our selection of premium matcha
                    blends, starter kits, and accessories. Join us on a journey to savor the richness and tranquility of matcha.
                  </p>
                </section>

                <section className="articles">
                  <h2>Featured Articles</h2>

                  <Article htext={texts.htext1} ptext={texts.ptext1} image={brewmatcha} onClick={() => {navigate('/blog')}}/>
                  <Article htext={texts.htext2} ptext={texts.ptext2} image={health} onClick={() => {navigate('/blog')}}/>
                  <Article htext={texts.htext3} ptext={texts.ptext3} image={matchalatte} onClick={() => {navigate('/blog')}}/>
                </section>
              </div>
            <Footer />
          </div>
        }
      />
      <Route path='/all_products' element={<ProductsPage products={allData} user={loggedInUser}/>}/>
      <Route path='/tea_products' element={<ProductsPage products={allData} user={loggedInUser}/>}/>
      <Route path='/accessories' element={<ProductsPage products={allData} user={loggedInUser}/>}/>
      <Route path='/blends' element={<ProductsPage products={allData} user={loggedInUser}/>}/>
      <Route path='/tea_bags' element={<ProductsPage products={allData} user={loggedInUser}/>}/>
      <Route path='/iced_tea' element={<ProductsPage products={allData} user={loggedInUser}/>}/>
      <Route path='/ceramics' element={<ProductsPage products={allData} user={loggedInUser}/>}/>
      <Route path='/tools' element={<ProductsPage products={allData} user={loggedInUser}/>}/>
      <Route path='/matcha' element={<ProductsPage products={allData} user={loggedInUser}/>}/>
      <Route path='/loose' element={<ProductsPage products={allData} user={loggedInUser}/>}/>
      <Route path='/info' element={<InfoPage/>}/>
      <Route path='/contact' element={<ContactPage />}/>
      <Route path='/blog' element={<BlogPage />}/>
      <Route path='/cart' element={<CartPage />}/>
      <Route path='/login' element={<LogInPage onLogin={handleLogin}/>} />
      <Route path='/payment' element={<Pay />}/>
    </Routes>
  );
};

export default App;
