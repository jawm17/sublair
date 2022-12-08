import React from "react";
import "./styles/shopItemStyle.css";

export default function ShopItem(props) {

    return (

        <div className="item" onClick={() => props.openItem()}>
            <img src={props.image} className="itemImage"></img>
            <div className="itemInfo">
                <div className="itemName">
                    {props.description}
                </div>
                <div className="itemPrice">
                    ${props.price}
                </div>
            </div>
        </div>
    );
}