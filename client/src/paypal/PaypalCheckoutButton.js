import React, { useState } from "react";
import { PayPalButtons } from "@paypal/react-paypal-js";
import axios from "axios";
const PaypalCheckoutButton = (props) => {
    const { product } = props;
    const [paidFor, setPaidFor] = useState(false);
    const [error, setError] = useState(null);

    if (paidFor) {
        // alert("success");
    }

    if (error) {
        alert(error);
    }

    const postPurchase = async (order) => {
        setPaidFor(true);
        console.log(order);
        try {
            const res = await axios.post("/item/new-order", {
                amountPayed: product.price,
                payerName: order.payer.name.given_name + " " + order.payer.name.surname,
                payerEmail: order.payer.email_address,
                payerId: order.payer.payer_id,
                orderId: order.id,
                itemId: product.itemId,
                createdAt: order.create_time
            });
            console.log(res);
        } catch (error) {
            console.log(error);
        }
    }

    return <PayPalButtons
        style={{
            color: "silver",
            height: 48,
            tagline: false
        }}
        onClick={(data, actions) => {
            const alreadyPurchased = false;

            if (alreadyPurchased) {
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
                        description: product.title,
                        amount: {
                            value: product.price
                        }
                    }
                ]
            });
        }}
        onApprove={async (data, actions) => {
            const order = await actions.order.capture();
            postPurchase(order);
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