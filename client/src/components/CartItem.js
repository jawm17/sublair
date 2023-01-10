import React from "react";
import "./styles/cartItemStyle.css";

export default function CartItem(props) {

    return (
        <div className="cartItem">
            <img className="cartItemImg" src={props.image}></img>
            <div className="cartItemInfo">
                <div className="cartItemName">
                    {props.title}
                </div>
                <div className="cartItemPrice">
                    ${props.price}
                </div>
            </div>
            <svg className="removeItem" width="24" height="24" fill="none" viewBox="0 0 24 24">
                <path stroke="white" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M17.25 6.75L6.75 17.25"></path>
                <path stroke="white" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M6.75 6.75L17.25 17.25"></path>
            </svg>
        </div>
    );
}