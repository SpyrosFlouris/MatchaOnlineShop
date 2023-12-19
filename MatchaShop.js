import React from 'react';
import './MatchaShop.css'; 

const MatchaShop = () => {
  return (
    <div>
      <header>
        <h1>Cute Matcha Tea Shop</h1>
        <p>Your source for premium matcha tea</p>
      </header>

      <section className="featured-products">
        <article className="product">
          <img src="matcha1.jpg" alt="Matcha Product 1" />
          <h2>Deluxe Matcha Blend</h2>
          <p className="price">$19.99</p>
          <button>Add to Cart</button>
        </article>
        <article className="product">
          <img src="matcha2.jpg" alt="Matcha Product 2" />
          <h2>Matcha Starter Kit</h2>
          <p className="price">$29.99</p>
          <button>Add to Cart</button>
        </article>
        <article className="product">
          <img src="matcha3.jpg" alt="Matcha Product 3" />
          <h2>Matcha Infuser Mug</h2>
          <p className="price">$14.99</p>
          <button>Add to Cart</button>
        </article>
      </section>

      <footer>
        <p>&copy; 2023 Cute Matcha Tea Shop. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default MatchaShop;