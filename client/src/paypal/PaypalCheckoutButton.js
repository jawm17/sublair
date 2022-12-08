import React, { useState } from "react";
import { PayPalButtons } from "@paypal/react-paypal-js";
const PaypalCheckoutButton = (props) => {
    const { product } = props;

    const [paidFor, setPaidFor] = useState(false);
    const [error, setError] = useState(null);

    const handleApprove = (orderId) => {
        setPaidFor(true);
    }

    if (paidFor) {
        // alert("success");
    }

    if (error) {
        alert(error);
    }

    return <PayPalButtons
        style={{
            color: "silver",
            height: 48,
            tagline: false
        }}
        onClick={(data, actions) => {
            const alreadyPurchased = false;

            if(alreadyPurchased) {
                setError("you already bought this item");
                return actions.reject();
            } else {
                return actions.resolve();
            }
        }}
        createOrder={(data, actions) => {
            return actions.order.create({
                purchase_units: [
                    {
                        description: product.description,
                        amount: {
                            value: product.price
                        }
                    }
                ]
            });
        }}
        onApprove={async (data, actions) => {
            const order = await actions.order.capture();
            console.log("order", order);

            handleApprove(data.orderID);
        }}
        onCancel={() => {

        }}
        onError={(err) => {
            setError(err);
            console.log(err);
        }}
    />
}

export default PaypalCheckoutButton;