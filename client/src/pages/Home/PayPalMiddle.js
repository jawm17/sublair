import React from "react";
import Home from "./home";
import { PayPalScriptProvider } from "@paypal/react-paypal-js";

export default function PayPalMiddle() {

    return (
        <PayPalScriptProvider options={{ "client-id": "ATEsAVsbcz1MgKIw1bc7bDoUj1EVRAkKuC-krxwlri9HpME22mRZaOMbT2yfdtDWvL8-xToupzdhlMr7" }}>
            <Home />
        </PayPalScriptProvider>
    );
}