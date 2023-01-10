import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import AuthProvider from './context/AuthContext';
import ShopProvider from "./context/ShopContext";

ReactDOM.render(<AuthProvider><ShopProvider><App /></ShopProvider></AuthProvider>, document.getElementById('root'));

