import React, { useEffect, useState, useContext } from "react";
import { AuthContext } from "../../context/AuthContext";
import DashItem from "../../components/DashItem";
import axios from "axios";
import Order from "../../components/Order";
import "./accountStyle.css";

export default function Account(props) {
    const { setIsAuthenticated, setUser } = useContext(AuthContext);
    const [username, setUsername] = useState("");
    const [inventory, setInventory] = useState([]);
    const [orders, setOrders] = useState([]);

    useEffect(() => {
        getUserInfo();
        getInventory();
        getOrders();
    }, []);

    async function getUserInfo() {
        try {
            const res = await axios.get("/user/info");
            setUsername(res.data.username);
        } catch (err) {
            console.log(err);
        }
    }

    async function getOrders() {
        try {
            const data = await axios.get("/item/get-orders");
            console.log(data);
            if (data.data?.document) {
                setOrders(data.data.document);
            }
        } catch (error) {
            console.log(error);
        }
    }

    async function getInventory() {
        try {
            const data = await axios.get("/admin/get-inventory");
            console.log(data);
            if (data.data?.document) {
                setInventory(data.data.document);
            }
        } catch (error) {
            console.log(error);
        }
    }

    async function logOutHandler() {
        try {
            const res = await axios.get("/user/logout");
            if (res.data.success) {
                setUser(res.data.user);
                setIsAuthenticated(false);
            }
        } catch (err) {
            console.log(err);
        }
    }

    function scrollToOrders(id) {
        let pageArea = document.getElementById(id);
        pageArea.scrollIntoView({ behavior: "smooth" });

    }

    return (
        <div>
            <div id="accountFlex">
                <div id="admin">
                    <div id="adminArea">
                        <div id="dashHeader">
                            <div id="dashTitle">
                                Dashboard
                            </div>
                            <div id="dashBtns">
                                <div className="dashButton" onClick={() => props.history.push('/admin/add-item')}>
                                    add item
                                </div>
                                <div className="dashButton" onClick={() => scrollToOrders("listTitle")}>
                                    listings
                                </div>
                                <div className="dashButton" onClick={() => scrollToOrders("ordersTitle")}>
                                    orders
                                </div>
                            </div>
                            <div id="horLine">
                            </div>
                        </div>
                        <div id="adminBody">
                            <div id="quickStats">
                                <div id="totalSales">
                                    Total Sales: $0
                                </div>
                                <div id="24hrSales">
                                    24HR sales: $0
                                </div>
                                <div id="24hrSales">
                                    24HR SITE visitors: 0
                                </div>
                            </div>
                            <div className="subTitle" id="listTitle">
                                Listings
                            </div>
                            <div id="horLine">

                            </div>
                            <div id="listArea">
                                {inventory.map((item) => {
                                    return <DashItem
                                        thumb={item.images[item.thumbnail]}
                                        price={item.price}
                                        title={item.title}
                                        history={props.history}
                                        id={item._id}
                                        key={item._id}
                                    />
                                })}
                            </div>
                            <div className="subTitle" id="ordersTitle">
                                Orders
                            </div>
                            <div id="horLine">

                            </div>
                            {orders.map((order) => {
                                return <Order 
                                    amountPayed={order.amountPayed}
                                    createdAt={order.createdAt}
                                    payerName={order.payerName}
                                    orderId={order.orderId}
                                />
                            })}
                        </div>
                    </div>
                </div>
            </div>
            {/* {username}
            <button onClick={() => logOutHandler()}>
                Log Out
            </button> */}
        </div>
    );
}