import React, { createContext, useState, useEffect } from 'react';

export const ShopContext = createContext();

export default ({ children }) => {
    const [cartTotal, setCartTotal] = useState(0);

    useEffect(() => {
        if(localStorage.cart) {
            let cartItems = JSON.parse(localStorage.cart);
            setCartTotal(cartItems.length);
        }
    }, []);

    return (
        <ShopContext.Provider value={{ cartTotal, setCartTotal }}>
            {children}
        </ShopContext.Provider>
    )
}