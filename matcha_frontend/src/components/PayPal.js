import React, {useRef, useEffect} from 'react'
import { useNavigate } from 'react-router-dom'

export default function ({totalCost}) {
	console.log("this is in paypal",{totalCost})
	const navigate = useNavigate()
	const paypal = useRef()

	useEffect(() => {
		const costValue = totalCost?.cost
		console.log("insdie useEffect", costValue)
		window.paypal.Buttons({
			createOrder: (data, actions, err) => {
				return actions.order.create({
					intent: "CAPTURE", 
						purchase_units: [
							{
								description: "Cool looking table",
								amount: {
									currency_code: "USD",
									value: costValue,
								}
							}
						]
				})
			},
			onApprove: async(data, actions) => {
				const order = await (actions.order.capture())
				console.log(order)
				navigate('/cart')
			},
			onError: (err) =>{
				console.log(err)
				navigate('/cart')
			}
		}).render(paypal.current)
	}, [])

  return (
	 <div>
		<div ref={paypal}></div>
	 </div>
  )
}
