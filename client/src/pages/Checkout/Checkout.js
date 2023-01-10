import React, { useEffect, useState } from "react";
import CartItem from "../../components/CartItem";
import axios from "axios";
import PaypalCheckoutButton from "../../paypal/PaypalCheckoutButton";
import "./checkoutStyle.css";

export default function Checkout() {
    const [item, setItem] = useState();
    const [cartItems, setCartItems] = useState([]);
    const [cartTotal, setCartTotal] = useState(0);

    useEffect(() => {
        if (localStorage.cart) {
            setCartItems(JSON.parse(localStorage.cart));
        } else {
            // no items in cart
        }
    }, []);

    useEffect(() => {
        if(cartItems.length > 0) {
            let total = 0;
            cartItems.forEach(item => {
                total += item.unit_amount.value
            });
            setCartTotal(total);
        }
    }, [cartItems]);

    // async function getItemInfo(cartItems) {
    //     try {
    //         const data = await axios.get("/item/get-info/" + cartItems[0]);
    //         const { description, title, price, images, thumbnail } = data.data;
    //         console.log(data);
    //         setItem({ description, title, price, images, thumbnail, itemId: cartItems[0] });
    //     } catch (error) {
    //         console.log(error);
    //         // history.push("/");
    //     }
    // }

    return (
        <div id="checkoutFlex">
            <div id="checkoutArea">
                <div id="checkoutTitle">
                    Cart Total: ${cartTotal}
                </div>
                <div id="checkoutItems">
                    {cartItems?.map((item, index) => {
                        return <CartItem
                            image={item.thumbnail}
                            price={item.unit_amount.value}
                            title={item.name}
                            key={item.sku + index}
                        />
                    })}
                </div>
                {cartItems.length > 0 && cartTotal > 0 ? <PaypalCheckoutButton products={cartItems} totalValue={cartTotal}/> : null}
            </div>
        </div>
    );
}