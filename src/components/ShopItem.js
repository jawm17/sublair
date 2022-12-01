import React from "react";
import { useNavigate } from "react-router-dom";
import "./styles/shopItemStyle.css";

export default function ShopItem(props) {
    const navigate = useNavigate();

    return (

        <div className="item" onClick={() => navigate("/shop/" + props.index)}>
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