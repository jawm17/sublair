import React from "react";
import "./styles/itemCardStyle.css";

export default function ItemCard(props) {

    return (
        <div id="testCardCompContainer">
            {/* <div id="cardInfo">
                <h1>{props.title}</h1>
                <h1>{props.price}</h1>            
            </div> */}
            <div id="imgComtainer">
                <a href="/item"><img  src={props.img}></img></a>
            </div>
        </div>
    );
}
