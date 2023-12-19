import React from 'react'
import ProductsPage from './components/ProductsPage'
import LogInPage from './components/LogInPage'
import AddCart from './components/AddCart'
import Footer from './components/Footer'
import Article from './components/Article'
import starterkit1 from './images/starterkit1.webp'
import matchadeluxe from './images/matchadeluxe.webp'
import greentea1 from './images/greentea1.webp'
import brewmatcha from './images/brewmatcha.webp'
import matchalatte from './images/matchalatte.webp'
import health from './images/healthbenefits.webp'
import { Helmet } from 'react-helmet'

import icon from './images/icon.png'

const App = () => {

    const texts = {
      htext1 : "The Art of Brewing Perfect Matcha",
      ptext1 : "Discover the secrets to brewing the perfect cup of matcha with our step-by-step guide.",
      htext2 : "Health Benefits of Matcha",
      ptext2 : "Learn about the various health benefits associated with consuming matcha regularly.",
      htext3 : "The Matcha Latte Recipe",
      ptext3 : "A simple and delicious recipe. Learn the art of frothing and enjoy the rich flavor of matcha combined with smooth, velvety milk."
    }

    const names = {
        name1 : "Deluxe Matcha Blend",
        name2 : "Matcha Starter Kit",
        name3 : "Japanese Green Tea Bags"
    }

    const prices = {
        price1: "29.90" ,
        price2: "39.90" ,
        price3: "10.99"
    }

    const [isShown, setIsShown] = React.useState(false)

    function LogIn(){
      setIsShown(prevShown => !prevShown)
    }

  return (
    <div>
       <Helmet>
          <link rel='icon' href={icon}/>
        </Helmet>

        {isShown == false && <div>
        <header>
          <h1>Matcha Tea Heaven</h1>
          <p>Your source for premium matcha tea and more ☕︎</p>
          <div className="login-button">
            <button className="button" onClick={LogIn}>Log In / Sign Up</button>
          </div>
        </header>

        <nav>
          <ul>
            <li><a href="#">Home</a></li>
            <li><a href="#">Tea Products</a>
            <div className="dropdown">
                <a href="#">Tea Bags</a>
                <a href="#">Matcha Blends</a>
              </div>
            </li>
            <li><a href="#">Accessories</a>
            <div className="dropdown">
                <a href="#">Pottery Sets</a>
                <a href="#">Storage</a>
                <a href="#">Tea Tools</a>
              </div>
            </li>
            <li><a href="#">Articles</a></li>
            <li><a href="#">Contact</a></li>
            <li><a href="#">Info</a></li>

          </ul>
        </nav>

        <h1 style={{ textAlign: 'center' }}>Welcome to Matcha Tea Heaven!</h1>
        <section className="featured-products">
          <AddCart  name={names.name1} image={matchadeluxe} price={prices.price1}/>
          <AddCart  name={names.name2} image={starterkit1} price={prices.price2}/>
          <AddCart  name={names.name3} image={greentea1} price={prices.price3}/>
        </section>

        <section className="about-us">
          <h2>About Us</h2>
          <p>At Matcha Tea Heaven, 
          we are passionate about bringing you the finest matcha tea products. 
          Our commitment is to provide a delightful experience that goes beyond just a cup of tea. Explore our selection 
          of premium matcha blends, starter kits, and accessories. Join us on a journey 
          to savor the richness and tranquility of matcha.</p>
        </section>

        <section className="articles">
          <h2>Featured Articles</h2>
          
          <Article htext={texts.htext1} ptext={texts.ptext1} image={brewmatcha}/>
          <Article htext={texts.htext2} ptext={texts.ptext2} image={health}/>
          <Article htext={texts.htext3} ptext={texts.ptext3} image={matchalatte}/>
          
        </section>

        </div>}
        {isShown == true && <LogInPage />}

        <Footer />

    </div>
  );
};

export default App;