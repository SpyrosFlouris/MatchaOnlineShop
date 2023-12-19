import React from 'react';

const ProductsPage = () => {

  const products = [
    { id: 1, name: 'Premium Matcha Tea', description: 'Finest matcha tea from Japan', price: '$19.99' },
    { id: 2, name: 'Matcha Latte Blend', description: 'Creamy and delicious matcha latte mix', price: '$14.99' },
    // Add more products as needed
  ];

  const handleProductClick = (productId) => {
   
    console.log(`Product clicked: ${productId}`);
  };

  return (
    <div className="products-page">
      
      <nav className="sidebar">
        <ul>
          <li><a href="#">All Products</a></li>
          <li><a href="#">Tea</a></li>
          <li><a href="#">Blends</a></li>
        </ul>
      </nav>

      <div className="main-content">
        <header>
          <h1>Cute Matcha Tea Shop</h1>
          <p>Your source for premium matcha tea</p>
        </header>

        <section className="product-grid">
          {products.map((product) => (
            <div key={product.id} className="product-card" onClick={() => handleProductClick(product.id)}>
              <h2>{product.name}</h2>
              <p>{product.description}</p>
              <p className="price">{product.price}</p>
            </div>
          ))}
        </section>
      </div>
    </div>
  );
};

export default ProductsPage;