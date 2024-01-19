import React from 'react';
import Footer from './Footer';
import { MdEmail, MdPhone, MdLocationOn } from 'react-icons/md';
import user from '../images/user.png';
import logo from '../images/icon.png';
import cart from '../images/shopping-cart.png';
import { useNavigate } from "react-router-dom"

const ContactPage = () => {
  const navigate = useNavigate()
  return (
    <div className="contact-page">
      <header>
      <div className='header-icons'>
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
                      <a href="/loose_tea">Loose Tea</a>
                    </div>
                  </li>
                  <li><a href="/blog">Articles</a></li>
                  <li><a href="/contact">Contact</a></li>
                  <li><a href="/info">Info</a></li>
                </ul>
              </nav>

        <div className="contact-content">
      <h2>Contact Us</h2>

      <div className="contact-info">
        <p><MdEmail /> Email: <span style={{ color: '#4CAF50' }}>matchateaheaven@gmail.com</span></p>
        <p><MdPhone /> Phone: <span style={{ color: '#4CAF50' }}> +2410896745</span></p>
        <p><MdLocationOn /> Address: <span style={{ color: '#4CAF50' }}>Septemvriou 5 , Athens, Attica 10432</span></p>
      </div>

      <p>We're here for anything you need! Feel free to contact us from any method above.</p>
        </div>

    <Footer />

    </div>

        

   );
};

export default ContactPage;