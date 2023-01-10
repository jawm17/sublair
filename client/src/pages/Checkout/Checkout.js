import React, { useEffect, useState } from "react";
import CartItem from "../../components/CartItem";
import Nav from "../../components/Nav";
import axios from "axios";
import PaypalCheckoutButton from "../../paypal/PaypalCheckoutButton";
import { useHistory } from "react-router-dom";
import "./checkoutStyle.css";

export default function Checkout() {
    const history = useHistory();
    const [item, setItem] = useState();
    const [cartItems, setCartItems] = useState([]);
    const [cartValue, setCartValue] = useState(0);

    useEffect(() => {
        checkCart();
    }, []);

    useEffect(() => {
        if (cartItems.length > 0) {
            let total = 0;
            cartItems.forEach(item => {
                total += item.unit_amount.value
            });
            setCartValue(total);
        }
    }, [cartItems]);

    function checkCart() {
        if (localStorage.cart) {
            if (JSON.parse(localStorage.cart).length > 0) {
                setCartItems(JSON.parse(localStorage.cart));
            } else {
                history.push("/");
            }
        }
    }

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
            <Nav />
            <div id="checkoutArea">
                <div id="checkoutTitle">
                    Checkout
                </div>
                <div id="checkoutItems">
                    {cartItems?.map((item, index) => {
                        return <CartItem
                            image={item.thumbnail}
                            price={item.unit_amount.value}
                            title={item.name}
                            index={index}
                            updateItems={() => checkCart()}
                            key={item.sku + index}
                        />
                    })}
                </div>
                <div id="checkoutTotal">
                    Cart Total: ${cartValue}
                </div>
                <div id="checkoutTotal">
                    Shipping: free
                </div>
                <div id="checkoutTotal">
                    Estimated Arrival: 2-3 days
                </div>
                <div id="paypalCheckoutBtn">
                    <div id="paypalArea">
                    {cartItems.length > 0 && cartValue > 0 ? <PaypalCheckoutButton products={cartItems} totalValue={cartValue} /> : null}
                    </div>
                </div>
            </div>
        </div>
    );
}