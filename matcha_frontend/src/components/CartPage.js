import React, { useEffect } from 'react';
import cart from '../images/shopping-cart.png';
import user from '../images/user.png';
import { useNavigate } from 'react-router-dom';
import Cookies from 'js-cookie';

const CartPage = () => {
  const navigate = useNavigate();
  const [cartItems, setCartItems] = React.useState({ username: 'guest', items: [] });

  useEffect(() => {
    // Read cookies and update state
    const username = Cookies.get('username');
    const cartItemsString = Cookies.get('cartItems');
    const items = cartItemsString ? JSON.parse(cartItemsString) : [];

    setCartItems({ username, items });
  }, []);

  const userIconPressed = () => {
    navigate('/login');
  };

  const cartIconPressed = () => {
    navigate('/');
  };

  const totalPrice = cartItems.items ? cartItems.items.reduce((acc, item) => acc + item.price * item.timesAdded, 0): 0

  const handleProceedToPayment = () => {
    const formElements = document.querySelectorAll('.cart-form input[required], .cart-form textarea[required]');
    let isFormValid = true;

    formElements.forEach((element) => {
      if (!element.value.trim()) {
        isFormValid = false;
      }
    });

    if (isFormValid) {
      navigate('/payment', { state: { total: totalPrice.toFixed(2) } })
    } else {
      alert('Please fill in all required fields before proceeding.');
    }
  };

  const handlePaymentInAdvance = () => {
    const formElements = document.querySelectorAll('.cart-form input[required], .cart-form textarea[required]');
    let isFormValid = true;

    formElements.forEach((element) => {
      if (!element.value.trim()) {
        isFormValid = false;
      }
    });

    if (isFormValid) {
      console.log('Pay in advance');
    } else {
      alert('Please fill in all required fields before making payment in advance.');
    }
  };

  return (
    <div className="cart-page">
      <header>
        <div className="header-icons">
          <div className="cart-icon">
            <img src={cart} alt="Cart" onClick={cartIconPressed} />
          </div>
          <div className="user-icon">
            <img src={user} alt="User" onClick={userIconPressed} />
          </div>
        </div>
        <h1>Your Cart</h1>
      </header>

      <div className="main-cont">
        <form className="cart-form">
          <div className="personal-info">
            <label htmlFor="name">Name: (First and Last)</label>
            <input type="text" id="name" name="name" required />

            <label htmlFor="email">Email:</label>
            <input type="email" id="email" name="email" required />

            <label htmlFor="address">Address:</label>
            <textarea id="address" name="address" rows="3" required></textarea>

            <label htmlFor="country">Country:</label>
            <input type="text" id="country" name="country" required />

            <label htmlFor="zip">ZIP Code:</label>
            <input type="number" id="zip" name="zipcode" required />
          </div>

          <hr className="separator" />

          <div className="payment-method">
            <p>Payment Methods:</p>
            <button onClick={handleProceedToPayment}>proceed to payment</button>
            <button onClick={handlePaymentInAdvance}>payment in advance</button>
          </div>
        </form>

        <div className="cart-preview">
          <h2>Cart Preview</h2>
          {cartItems.items && cartItems.items.length > 0 ? (
            <>
              <p>Number of Products: {cartItems.items.length}</p>
              <ul>
                {cartItems.items.map((item, index) => (
                  <li key={index}>
                    {/* Adjust the content as needed */}
                    {item.name} - Quantity: {item.timesAdded} - Total: €{(item.price * item.timesAdded).toFixed(2)}
                  </li>
                ))}
              </ul>
              <p>Total Price: €{totalPrice.toFixed(2)}</p>
            </>
          ) : (
            <p>No items added to the cart</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default CartPage;
