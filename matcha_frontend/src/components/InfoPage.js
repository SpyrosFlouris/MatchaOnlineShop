import React from 'react';
import Footer from './Footer';
import InfoSection from './InfoSection'; 
import user from '../images/user.png';
import logo from '../images/icon.png';
import cart from '../images/shopping-cart.png';
import { useNavigate } from 'react-router-dom';

const InfoPage = () => {

  const navigate = useNavigate()

  return (
    <div className="info-page">
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


      <h1>Information</h1>

      <InfoSection title="Ordering Methods">
        <h3>Online Order</h3>

        <p> 
        If you're looking to purchase our premium matcha tea products, you can do so
        through our user-friendly website. Simply visit our website, browse our extensive selection
        of high-quality teas, blends, and accessories, 
        and add your desired items to the shopping cart. Once you've made your selections, 
        proceed to the secure checkout, where you can review your order, enter your shipping details, 
        and choose your preferred payment method. </p>

        <h3>Phone Order</h3>

        <p>
        For those who would like to make personal requests or feel more comfortable over the phone customer support team 
        is ready to assist you with phone orders. 
        Simply give us a call at our provided contact number, and one of our friendly teammates will walk you through
        the ordering process. They can provide recommendations, answer any questions you may have about our products
        and ensure a smooth and easy ordering experience. Whether you're seeking assistance with product selection 
        or prefer the ease of verbal communication, our phone ordering option is designed to cater to your needs and 
        make ordering our matcha products a delightful experience.
        </p>
      </InfoSection>

      <InfoSection title="Payment Methods">
        <h3>Credit Card - Paypal</h3>

        <p>
        For your convinience our site provides two secure card payment choices : 
        First with your credit card you can proceed adding safely your card details including the card number, expiration date, 
        and CVV code. Our payment system has been designed to ensure teh security of your personal information.
        Secondly, for those who like a bit more safety the option of Paypal is provided, all you have to do is choose it at checkout!
        Whatever your choice be sure to have a secure payment experience.
        </p>

        <h3>Payment on Delivery</h3>

        <p>
        When choosing payment on delivery, for order confirmation our team will procceed with a call. Make sure to provide us with 
        the right phone number. When your package arrives payment will only be accepted through cash, this option is available for those 
        who don't feel comfortable paying online. Don't worry we got you too!
        </p>
        
      </InfoSection>

      <InfoSection title="Track your Order">

        <p>
        When your order has been placed and confirmed an email with your order details and a track number will be send to your inbox, please  
        make sure to check! Depending on your address the courier company closer to you will be selected to deliver your package, on their website 
        you can place the track number and check your package's location. Delivery days differ from courier companys but it's an average of 3-5
        working days! Please call us to the numder provided on our Contact Page for any help.
        </p>
        
      </InfoSection>

      <InfoSection title="Purchace Security - Returns">
        <h3>Returns</h3>
        
        <p>
        Products can be returned for 15 days after the order got delivered, any opened or damaged products won't be accepted except our Starter Kit
        and accessories only if they're under good conditions. Of course, if the products got delivered damaged we take it upon us to replace them 
        right away! Just email or call us.
        </p>

        <h3>Purchace Security</h3>
        
        <p>
        Be assured that every order can be cancelled and refunded if you had a change of mind or if a product is damaged or wrongly delivered,
        our costumer service team is always available for any questions that might arise and be sure that we manage every payment stritcly with
        safety.
        </p>
        
      </InfoSection>

      <InfoSection title="Terms of Use">

        <p>
          We are Matcha Tea Heaven a company registered in Greece at Septemvriou 5 , Athens, Attica 10432. 
          We operate the website matchateaheaven.gr, as well as any other related products and services that refer
          or link to these legal terms the "Legal Terms" collectively, the "Services".
          You can contact us by phone at +2410896745, email at matchateaheaven@gmail.com, or by mail to Septemvriou 5 , Athens, Attica 10432, Greece.
          These Legal Terms constitute a legally binding agreement made between you, whether personally or on behalf of an entity "you", 
          and Matcha Tea Heaven, concerning your access to and use of the Services. You agree that by accessing the Services, you have read, 
          understood, and agreed to be bound by all of these Legal Terms. IF YOU DO NOT AGREE WITH ALL OF THESE LEGAL TERMS, THEN YOU ARE EXPRESSLY 
          PROHIBITED FROM USING THE SERVICES AND YOU MUST DISCONTINUE USE IMMEDIATELY.
          Supplemental terms and conditions or documents that may be posted on the Services from time to time are hereby expressly incorporated 
          herein by reference. We reserve the right, in our sole discretion, to make changes or modifications to these Legal Terms from time to time. 
          We will alert you about any changes by updating the "Last updated" date of these Legal Terms, and you waive any right to receive specific 
          notice of each such change. It is your responsibility to periodically review these Legal Terms to stay informed of updates. 
          You will be subject to, and will be deemed to have been made aware of and to have accepted, the changes in any revised Legal Terms by your 
          continued use of the Services after the date such revised Legal Terms are posted.
          All users who are minors in the jurisdiction in which they reside generally under the age of 18 must have the permission of, 
          and be directly supervised by, their parent or guardian to use the Services. If you are a minor, you must have your parent or guardian 
          read and agree to these Legal Terms prior to you using the Services.
          We recommend that you print a copy of these Legal Terms for your records.
        </p>

      </InfoSection>

      <InfoSection title="Privacy Policy">

        <p>
        What personal information do we process? When you visit, use, or navigate our Services, we may process personal information
        depending on how you interact with us and the Services, the choices you make, and the products and features you use.
        Learn more about personal information you disclose to us. Do we process any sensitive personal information? 
        We do not process sensitive personal information.
        Do we receive any information from third parties? We may receive information from public databases, 
        marketing partners, social media platforms, and other outside sources. Learn more about information collected from other sources.
        How do we process your information? We process your information to provide, 
        improve, and administer our Services, communicate with you, for security and fraud prevention, 
        and to comply with law. We may also process your information for other purposes with your consent. 
        We process your information only when we have a valid legal reason to do so. Learn more about how we process your information.
        In what situations and with which parties do we share personal information? 
        We may share information in specific situations and with specific third parties. 
        Learn more about when and with whom we share your personal information.
        What are your rights? Depending on where you are located geographically, the applicable privacy law may mean you have certain 
        rights regarding your personal information. Learn more about your privacy rights.
        How do you exercise your rights? The easiest way to exercise your rights is by submitting a data subject access request 
        or by contacting us. We will consider and act upon any request in accordance with applicable data protection laws.
        </p>

      </InfoSection>
      
      <Footer />
    </div>
  );
};

export default InfoPage;