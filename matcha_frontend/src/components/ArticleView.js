import React from 'react';

const ArticleView = ({ article }) => {

  return (
    <div className="article-view">
      <h2>{article.htext}</h2>
      <img src={article.image} alt={article.htext} />
      <p>{article.ptext}</p>
      <button onClick={() => {window.location.reload()}}>Back</button>
    </div>
  );
};

export default ArticleView;