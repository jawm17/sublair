import React from "react";
import { useHistory } from "react-router-dom";
import "./styles/itemCardStyle.css";

export default function ItemCard(props) {
    const history = useHistory();

    return (
        <div id="testCardCompContainer">
            {/* <div id="cardInfo">
                <h1>{props.title}</h1>
                <h1>{props.price}</h1>            
            </div> */}
            <div id="imgComtainer">
                <a onClick={() => history.push("/item/" + props.id)}><img  src={props.img}></img></a>
            </div>
        </div>
    );
}
