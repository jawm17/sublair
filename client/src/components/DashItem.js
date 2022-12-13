import React from "react";
import "./styles/dashItemStyle.css";

export default function DashItem(props) {

    return (

        <div className="dashItem" onClick={() => props.history.push("/admin/item/" + props.id)}>
            <div className="innerDashItem">
            <img src={props.thumb} className="dashItemImage"></img>
            <div className="dashItemInfo">
                <div className="itemName">
                    {props.title}
                </div>
                <div className="itemPrice">
                    ${props.price}
                </div>
            </div>
            </div>
        </div>
    );
}