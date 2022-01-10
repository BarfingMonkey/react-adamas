import axios from 'axios'
import React, {useState} from 'react'
import {
    Container, Row, Col
} from 'react-bootstrap';
import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js'
import { useSelector, useDispatch } from 'react-redux';
import { getCart } from '../redux/cart/cartAction';

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
    const dispatch= useDispatch()
    const amount = useSelector(state=>state.cart.total)
    const userId = useSelector(state=>state.auth.data.user._id)
    console.log(amount)
    const stripe = useStripe()
    const elements = useElements()

    const handleSubmit = async(e)=>{
        e.preventDefault()
        		//STEP 1:
        //create new payment method based on card and form information
        const payload = await stripe.createPaymentMethod({
            type: "card",
            card: elements.getElement(CardElement),
        });

        //handle errors, otherwise set the new payment method in state
        if (payload.error) {
            setError(payload.error);
            return;
        } 
		
		//STEP 2:
        //create a new payment request and get irs client secret + id from the server
        const intentData = await axios
            .post("http://localhost:8000/api/payment", {
                //include the bet amount
                amount: amount,
            })
            .then(
                (response) => {
                    //SUCCESS: put client secret and id into an object and return it
                    return {
                        secret: response.data.client_secret,
                        id: response.data.intent_id,
                    };
                },
                (error) => {
                    //ERROR: log the error and return
                    setError(error)
                    return error;
                }
            );
		
		//STEP 3:
        //confirm the payment and use the new payment method
        const result = await stripe.confirmCardPayment(intentData.secret, {
            payment_method: payload.paymentMethod.id,
        });

        //handle errors again
        if (result.error) {
            setError(result.error);
            return
        }
		
		//STEP 4:
        // The payment has been processed! send a confirmation to the server
        if (result.paymentIntent.status === "succeeded") {
            const confirmedPayment = await axios
                .post("http://localhost:8000/api/confirmpayment", {
                    //include id of payment
                    amount: amount,
                    id: payload.id,
                    userId,
                    card: payload.card,
                    payment_id: intentData.id,
                    payment_type: "stripe",
                    //send any other data here
                })
                .then(
                    (response) => {
                        //SUCCESS: return the response message
                        return response.data.success;
                    },
                    (error) => {
                        //ERROR:
                        console.log(error);
                        setError(error)
                        return error;
                    }
                );
            //reset the state and show the success message
            if (confirmedPayment) {
                setSuccess(true);
                dispatch(getCart(userId))
            }
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
