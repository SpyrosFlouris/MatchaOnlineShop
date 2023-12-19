import React from "react"

export default function AddCart({name, image, price}){

    return(
        <div>
        <article className="product">
          <img src={image} alt="Product Image" />
          <h2>{name}</h2>
          <p>€{price}</p>          
          <button>Add to Cart</button>
        </article>
        </div>
    )
}