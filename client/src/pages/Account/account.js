import React, { useEffect, useState, useContext } from "react";
import { AuthContext } from "../../context/AuthContext";
import DashItem from "../../components/DashItem";
import axios from "axios";
import "./accountStyle.css";

export default function Account(props) {
    const { setIsAuthenticated, setUser } = useContext(AuthContext);
    const [username, setUsername] = useState("");
    const [inventory, setInventory] = useState([]);

    useEffect(() => {
        getUserInfo();
        getInventory();
    }, []);

    async function getUserInfo() {
        try {
            const res = await axios.get("/user/info");
            setUsername(res.data.username);
        } catch (err) {
            console.log(err);
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
                                    Total Sales: $14,000
                                </div>
                                <div id="24hrSales">
                                    24HR sales: $278
                                </div>
                                <div id="24hrSales">
                                    24HR SITE visitors: 84
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
                            <div className="orderItem">
                                <div className="leftOrderStat">
                                    t-shirt
                                </div>
                                <div>
                                    $124
                                </div>
                                <div>
                                    12/18/22 9:09AM
                                </div>
                                <div>
                                    JAMES CREEPY
                                </div>
                                <div className="rightOrderStat">
                                    dfakj-AP90
                                </div>
                            </div>
                            <div className="orderItem">
                                <div className="leftOrderStat">
                                    t-shirt
                                </div>
                                <div>
                                    $124
                                </div>
                                <div>
                                    12/18/22 9:09AM
                                </div>
                                <div>
                                    JAMES CREEPY
                                </div>
                                <div className="rightOrderStat">
                                    dfakj-AP90
                                </div>
                            </div>
                            <div className="orderItem">
                                <div className="leftOrderStat">
                                    t-shirt
                                </div>
                                <div>
                                    $124
                                </div>
                                <div>
                                    12/18/22 9:09AM
                                </div>
                                <div>
                                    JAMES CREEPY
                                </div>
                                <div className="rightOrderStat">
                                    dfakj-AP90
                                </div>
                            </div>
                            <div className="orderItem">
                                <div className="leftOrderStat">
                                    t-shirt
                                </div>
                                <div>
                                    $124
                                </div>
                                <div>
                                    12/18/22 9:09AM
                                </div>
                                <div>
                                    JAMES CREEPY
                                </div>
                                <div className="rightOrderStat">
                                    dfakj-AP90
                                </div>
                            </div>
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