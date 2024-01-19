import React from 'react'

export default function Article({htext, ptext, image, onClick}){

    return(
        <article className="article" onClick={onClick}>
        <img src={image} alt="Article Image" />
          <h3>{htext}</h3>
          <p>{ptext}</p>
          <button className="see-more">See More</button>
        </article>
    )
}