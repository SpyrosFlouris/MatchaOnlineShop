import React from 'react'
import { useNavigate } from 'react-router-dom';
import user from '../images/user.png';
import cart from '../images/shopping-cart.png';
import PayPal from './PayPal'
import { useLocation } from 'react-router-dom';

export default function Pay(){
	const location = useLocation()
	const totalCost = location.state?.total || 0
	console.log("pay.js", {totalCost})
	const navigate = useNavigate()

	function cartIconPressed(){
		navigate('/cart')
	 }
  
	 function userIconPressed(){
		navigate('/login')
	 }

	return (
		<div>
			<header>
				<div className="header-icons">
					<div className="cart-icon" onClick={cartIconPressed}>
						<img src={cart} alt="Cart" />
					</div>
					<div className="user-icon">
						<img src={user} alt="User" onClick={userIconPressed}/>
					</div>
				</div>
				<h1>Matcha Tea Heaven</h1>
				<p>Your source for premium matcha tea and more ☕︎</p>
            </header>
				<div className='paypal'>
					<PayPal totalCost={{cost: totalCost}}/>
				</div>
		</div>
	)
}