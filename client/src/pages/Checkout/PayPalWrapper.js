import React from "react";
import Checkout from "./Checkout";
import { PayPalScriptProvider } from "@paypal/react-paypal-js";

export default function PayPalWrapper() {

    return (
        <PayPalScriptProvider options={{ "client-id": "ATEsAVsbcz1MgKIw1bc7bDoUj1EVRAkKuC-krxwlri9HpME22mRZaOMbT2yfdtDWvL8-xToupzdhlMr7" }}>
            <Checkout />
        </PayPalScriptProvider>
    );
}