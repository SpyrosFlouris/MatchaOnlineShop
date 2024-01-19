import React from 'react';
import Cookies from 'js-cookie'
import { useNavigate } from 'react-router-dom';

const ProductView = ({ selectedProduct }) => {
  const navigate = useNavigate()
  const [timesAdded, setTimesAdded] = React.useState(0);

  function addToCart() {
    const adds = timesAdded + 1;
    setTimesAdded(adds);

    // Read existing cart items from the cookie
    const existingCart = Cookies.get('cartItems');
    const parsedCart = existingCart ? JSON.parse(existingCart) : [];

    // Check if the product is already in the cart
    const existingProductIndex = parsedCart.findIndex(item => item.name === selectedProduct.name)
    const name = selectedProduct.name
    const price = selectedProduct.price

    // If the product is in the cart, update its quantity and total price
    if (existingProductIndex !== -1) {
      parsedCart[existingProductIndex].timesAdded += 1;
    } else {
      // If the product is not in the cart, add it with quantity and total price
      parsedCart.push({
        timesAdded: 1,
        name,
        price
      });
    }

    // Update the cookie with the new cart items
    Cookies.set('cartItems', JSON.stringify(parsedCart), { expires: 1 });
  }

  return (
    <div className="product-view">
      <div className='productANDname'>
        <h2>{selectedProduct.name}</h2>
        <img src={`data:image/webp;base64,${btoa(
                        Uint8Array.from(selectedProduct.imageUrl.data).reduce((data, byte) => data + String.fromCharCode(byte), '')
                      )}`} alt={selectedProduct.name} />
      </div>
      <div className='product-info'>
      <p>{selectedProduct.description}</p>
      <p className='price'>Price : {selectedProduct.price}</p>
      <button onClick={addToCart}>Add to cart</button>
      <br></br>
      <br></br>
      <button onClick={() => {window.location.reload()}}>Back</button>
      </div>
    </div>
  );
};

export default ProductView;