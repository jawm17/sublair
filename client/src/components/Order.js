import React from "react";
import moment from "moment";
import "./styles/orderStyle.css";

export default function Order(props) {

    return (
        <div className="orderItem">
            <div className="leftOrderStat">
                {props.itemName}
            </div>
            <div>
                ${props.amountPayed}
            </div>
            <div>
                {moment(props.createdAt).format("lll")}
            </div>
            <div>
                {props.payerName}
            </div>
            <div className="rightOrderStat">
                {props.orderId}
            </div>
        </div>
    );
}