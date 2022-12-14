import React, { useEffect, useState } from "react";
import upBtn from "../../assets/upload.png";
import ShopItem from "../../components/ShopItem";
import { useHistory } from "react-router-dom";
import logo from "../../assets/LOGO.png"
import axios from "axios";
import "./homeStyle.css";

function Home() {
    const history = useHistory();
    const [focused, setFocused] = useState(null);
    const [items, setItems] = useState([]);

    useEffect(() => {
        getItems();
        try {
            window.ripple(); 
        } catch (error) {

        }
        document.addEventListener("touchmove", preventBehavior, { passive: false });
    }, []);

    async function getItems() {
        try {
            const data = await axios.get("/item/get-listings");
            console.log(data);
            setItems(data.data.document);
        } catch (error) {
            console.log(error);
        }
    }

    function preventBehavior(e) {
        if (document.getElementById("mainFooter").style.top !== "12px") {
            e.preventDefault();
        }
    };

    function openPage() {
        if (document.getElementById("mainFooter").style.top === "12px") {
            // page close
            setFocused(null);
            document.getElementById("mainFooter").style.top = "calc(var(--app-height) - 76px)";
            setTimeout(() => {
                document.getElementById("homeSlide").style.transform = "scaleY(0)";
            }, 40);
            document.getElementById("upBtn").style.transform = "rotate(0deg)";
        } else {
            // page open
            document.getElementById("mainFooter").style.top = "12px";
            document.getElementById("homeSlide").style.transform = "scaleY(1)";
            document.getElementById("upBtn").style.transform = "rotate(180deg)";
            setTimeout(() => {
                document.getElementById("itemArea").style.opacity = "100%";
            }, 450);
        }
    }

    function gotTo() {
        history.push("/item/9")
    }


    useEffect(() => {
        if (focused) {

        }
    }, [focused]);

    return (
        <div >
            <div id="homeArea">

            </div>
            <div id="mainFooter">
                <img alt="logo" src={logo} id="logo"></img>
                <div id="footTitle">
                    SUBLAIR
                </div>
                <div id="upBtnArea" onClick={() => openPage()}>
                    <img alt="up arrow" src={upBtn} id="upBtn"></img>
                </div>
            </div>

            <div id="homeSlide">
                <div id="itemArea">
                    {items.map((item, index) => {
                        return (
                            <ShopItem
                                openItem={() => history.push("/item/" + item._id)}
                                image={item.images[item.thumbnail]}
                                price={item.price}
                                title={item.title}
                                index={index}
                                key={index + "item"}
                            />
                        )
                    })}
                    <div id="block">

                    </div>
                </div>
            </div>
        </div>
    );
}

export default Home;
