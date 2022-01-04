import {Elements} from "@stripe/react-stripe-js"
import {loadStripe} from "@stripe/stripe-js"
import React from "react"
import PaymentForm from "./PaymentForm"

const PUBLIC_KEY = "pk_test_51KDjaiKUwGjNfbg4MEdzHS96dDHP6TBdBq00hGKsgrjHD90biEFaKfZCZy7UwZPqhhzV6NticUAsudGjMIrXtZ2Y00rlhr3d6u"

const stripeTestPromise = loadStripe(PUBLIC_KEY)

const StripePayment = () =>{
    return(
        <Elements stripe={stripeTestPromise}>
            <PaymentForm/>
        </Elements>
    )
}

export default StripePayment