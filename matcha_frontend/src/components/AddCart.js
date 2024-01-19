import React from "react";
import Cookies from "js-cookie";

export default function AddCart({ name, image, price, username }) {
  const [timesAdded, setTimesAdded] = React.useState(0);

  function addToCart() {
    const adds = timesAdded + 1;
    setTimesAdded(adds);

    // Read existing cart items from the cookie
    const existingCart = Cookies.get('cartItems');
    const parsedCart = existingCart ? JSON.parse(existingCart) : [];

    // Check if the product is already in the cart
    const existingProductIndex = parsedCart.findIndex(item => item.name === name);

    // If the product is in the cart, update its quantity and total price
    if (existingProductIndex !== -1) {
      parsedCart[existingProductIndex].timesAdded += 1;
    } else {
      // If the product is not in the cart, add it with quantity and total price
      parsedCart.push({
        username,
        timesAdded: 1,
        name,
        price
      });
    }

    // Update the cookie with the new cart items
    Cookies.set('cartItems', JSON.stringify(parsedCart), { expires: 1 });
  }

  return (
    <div>
      <article className="product">
        <img src={image} alt="Product Image" />
        <h2>{name}</h2>
        <p>€{price}</p>
        <button onClick={addToCart}>Add to Cart</button>
      </article>
    </div>
  );
}
