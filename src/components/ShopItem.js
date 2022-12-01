import React from "react";
import "./styles/shopItemStyle.css";

export default function ShopItem(props) {

    return (

        <div className="item">
            <img src={props.image} className="itemImage"></img>
            <div className="itemInfo">
                <div className="itemName">
                    {props.name}
                </div>
                <div className="itemPrice">
                    ${props.price}
                </div>
            </div>
        </div>
    );
}