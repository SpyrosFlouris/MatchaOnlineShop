import React, {useState} from 'react';
import Article from './Article';
import ArticleView from './ArticleView';
import Footer from './Footer';
import user from '../images/user.png';
import logo from '../images/icon.png';
import cart from '../images/shopping-cart.png';
import brewmatcha from '../images/brewmatcha.webp';
import health from '../images/healthbenefits.webp';
import matchalatte from '../images/matchalatte.webp';
import { useNavigate } from 'react-router-dom';

const BlogPage = () => {
    const [selectedArticle, setSelectedArticle] = useState(null);
	 const navigate = useNavigate()

  const articles = [
    {
      id: 1,
      htext: 'The Art of Brewing Perfect Matcha',
      ptext: 'Discover the secrets to brewing the perfect cup of matcha with our step-by-step guide.',
      image: brewmatcha,
    },
    {
      id: 2,
      htext: 'Health Benefits of Matcha',
      ptext: 'Learn about the various health benefits associated with consuming matcha regularly.',
      image: health,
    },
    {
        id: 3,
        htext: 'The Matcha Latte Recipe',
        ptext: 'A simple and delicious recipe. Learn the art of frothing and enjoy the rich flavor of matcha combined with smooth, velvety milk.',
        image: matchalatte,
      },
      {
        id: 4,
        htext: 'Second The Matcha Latte Recipe',
        ptext: 'A simple and delicious recipe. Learn the art of frothing and enjoy the rich flavor of matcha combined with smooth, velvety milk.',
        image: matchalatte,
      },
  ];

  const handleArticleClick = (article) => {
    setSelectedArticle(article);
  };

  return (
    <div className="blog-page">
      {!selectedArticle && 
        <div>
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

      <div className="article-content">
        {articles.map((article) => (
          <Article key={article.id} htext={article.htext} ptext={article.ptext} image={article.image} onClick={() => handleArticleClick(article)}/>
        ))}
      </div>
        </div>
      }

      {selectedArticle && 
        <div>
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
      <ArticleView article={selectedArticle} />
        </div>}
      <Footer />
    </div>
  );
};

export default BlogPage;