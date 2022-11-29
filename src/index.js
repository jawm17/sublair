import React from 'react';
import ReactDOM from 'react-dom/client';
import { PayPalScriptProvider } from "@paypal/react-paypal-js";
import './index.css';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <PayPalScriptProvider options={{ "client-id": "ATEsAVsbcz1MgKIw1bc7bDoUj1EVRAkKuC-krxwlri9HpME22mRZaOMbT2yfdtDWvL8-xToupzdhlMr7" }}>
    <App />
  </PayPalScriptProvider>
);
