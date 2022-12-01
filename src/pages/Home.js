import { useEffect, useState } from "react";
import PaypalCheckoutButton from "../paypal/PaypalCheckoutButton";
import { useNavigate } from "react-router-dom";
import upBtn from "../assets/upBtn.png";
import ShopItem from "../components/ShopItem";
import items from "./items.json";
import "./styles/homeStyle.css";

function Home() {
    const navigate = useNavigate();
    let open = false;

    useEffect(() => {
        document.addEventListener("touchmove", preventBehavior, { passive: false });
    }, []);

    function preventBehavior(e) {
        if(!open) {
            e.preventDefault();
        }
    };

    function openPage() {
        if (open === true) {
            window.history.replaceState(null, "New Page Title", "/")
            document.getElementById("mainFooter").style.top = "calc(100vh - 76px)";
            setTimeout(() => {
                document.getElementById("homeSlide").style.transform = "scaleY(0)";
            }, 40);
            document.getElementById("upBtn").style.transform = "rotate(0deg)";
            document.getElementById("itemArea").style.opacity = "0%";
        } else {
            window.history.replaceState(null, "New Page Title", "/shop")
            document.getElementById("mainFooter").style.top = "12px";
            document.getElementById("homeSlide").style.transform = "scaleY(1)";
            document.getElementById("upBtn").style.transform = "rotate(180deg)";

            setTimeout(() => {
                document.getElementById("itemArea").style.opacity = "100%";
            }, 450);
        }
        open = !open;
    }

    return (
        <div>

            {/* <PaypalCheckoutButton product={product}/> */}

            <div id="mainFooter">
                <img src="https://sublair.com/images/LOGO.png" id="logo"></img>
                <div id="footTitle">
                    SUBLAIR
                </div>
                <img src={upBtn} id="upBtn" onClick={() => openPage()}></img>
            </div>

            <div id="homeSlide">


                <div id="itemArea">

                {items.map((item, index) => {
                    return (
                        <ShopItem
                            image={item.image}
                            price={item.price}
                            name={item.name}
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
