import axios from 'axios'
import React, {useState} from 'react'
import {
    Container, Row, Col
} from 'react-bootstrap';
import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js'
import { useSelector } from 'react-redux';

const CARD_OPTIONS = {
    iconStyle: "solid",
	style: {
		base: {
			iconColor: "#c4f0ff",
			color: "#fff",
			fontWeight: 500,
			fontFamily: "Roboto, Open Sans, Segoe UI, sans-serif",
			fontSize: "16px",
			fontSmoothing: "antialiased",
			":-webkit-autofill": { color: "black" },
			"::placeholder": { color: "black" }
		},
		invalid: {
			iconColor: "#ffc7ee",
			color: "#ffc7ee"
		}
	}
}
const PaymentForm = () => {
    const [success, setSuccess]= useState(false)
    const amount = useSelector(state=>state.cart.cart.total)
    console.log(amount)
    const stripe = useStripe()
    const elements = useElements()

    const handleSubmit = async(e)=>{
        e.preventDefault()
        const {error, paymentMethod}= await stripe.createPaymentMethod({
            type: "card",
            card: elements.getElement(CardElement)
        })

        if(!error){
            try{
                const {id} = paymentMethod
                const response = await axios.post("http://localhost:8000/api/payment",{
                    amount: amount*100,
                    id
                })
                
                if(response.data.success){
                    console.log("Successful payment")
                    setSuccess(true)
                }
            }
            catch(error){
                console.log("Error", error)
            }
        }
        else{
            console.log(error.message)
        }
    }
    return (
        <>  
            <Container>
                <Row className='justify-content-center'>
                    <Col xs={6} >
                        {!success ? 
                            <div>
                                <h3 className='mb-4'>Your Payable Amount: ${amount}</h3>
                                <form onSubmit={handleSubmit}>
                                    <fieldset className="FormGroup">
                                        <div className="FormRow">
                                            <CardElement />
                                        </div>
                                    </fieldset>
                                    <div className='d-flex justify-content-center my-4'>
                                        <button>Pay</button>
                                    </div>
                                </form>
                            </div>
                            
                            :
                            <div>
                                <h2>Thank you for shopping with us!</h2>
                            </div> 
                        }
                    </Col>
                </Row>

            </Container>
            
        </>
    )
}

export default PaymentForm
