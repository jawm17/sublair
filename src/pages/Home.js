import { useEffect, useState } from "react";
import PaypalCheckoutButton from "../paypal/PaypalCheckoutButton";
import { useNavigate } from "react-router-dom";
import upBtn from "../assets/upBtn.png";
import ShopItem from "../components/ShopItem";
import items from "./items.json";
import "./styles/homeStyle.css";

function Home() {
    const [focused, setFocused] = useState(false);
    const [selectedSize, setSelectedSize] = useState("m")
    const navigate = useNavigate();
    let open = false;

    useEffect(() => {
        document.addEventListener("touchmove", preventBehavior, { passive: false });
    }, []);

    function preventBehavior(e) {
        if (document.getElementById("mainFooter").style.top !== "12px") {
            e.preventDefault();
        }
    };

    function openPage() {
        if (document.getElementById("mainFooter").style.top === "12px") {
            // page close
            setFocused(false);
            document.getElementById("mainFooter").style.top = "calc(100vh - 76px)";
            setTimeout(() => {
                document.getElementById("homeSlide").style.transform = "scaleY(0)";
            }, 40);
            document.getElementById("upBtn").style.transform = "rotate(0deg)";
            document.getElementById("itemArea").style.opacity = "0%";
        } else {
            // page open
            document.getElementById("mainFooter").style.bottom = "calc(100vh - (env(safe-area-inset-bottom) + 76))";
            document.getElementById("homeSlide").style.transform = "scaleY(1)";
            document.getElementById("upBtn").style.transform = "rotate(180deg)";
            setTimeout(() => {
                document.getElementById("itemArea").style.opacity = "100%";
            }, 450);
        }
    }

    useEffect(() => {
        if (focused) {

        }
    }, [focused]);

    return (
        <div>
            <div id="homeArea">
                
            </div>
            <div id="mainFooter">
                <img src="https://sublair.com/images/LOGO.png" id="logo"></img>
                <div id="footTitle">
                    SUBLAIR
                </div>
                <div id="upBtnArea" onClick={() => openPage()}>
                    <img src={upBtn} id="upBtn"></img>
                </div>
            </div>

            <div id="homeSlide">

                {focused ?
                    <div id="itemPage">
                        <div id="productImageArea">
                            <div>
                                <div id="productTitle2">
                                    Glitch Mob Hoodie
                                </div>
                                <img src={items[0].image} id="productImage"></img>
                                {/* <div id="productImageBtnsFlex">
                                    <div id="productImageBtns">
                                        <div className="productImageBtn">

                                        </div>
                                        <div className="productImageBtn">

                                        </div>
                                        <div className="productImageBtn">

                                        </div>
                                        <div className="productImageBtn">

                                        </div>
                                    </div>
                                </div> */}
                            </div>
                        </div>
                        <div id="productInfoOuter">
                            <div id="productInfo">
                                <div id="productTitle">
                                    Glitch Mob Hoodie
                                </div>
                                <div id="sizeBtns">
                                    <div className="sizeBtn" onClick={() => setSelectedSize("s")} id={selectedSize === "s" ? "selectedSize" : null}>
                                        S
                                    </div>
                                    <div className="sizeBtn" onClick={() => setSelectedSize("m")} id={selectedSize === "m" ? "selectedSize" : null}>
                                        M
                                    </div>
                                    <div className="sizeBtn" onClick={() => setSelectedSize("l")} id={selectedSize === "l" ? "selectedSize" : null}>
                                        L
                                    </div>
                                    <div className="sizeBtn" onClick={() => setSelectedSize("xl")} id={selectedSize === "xl" ? "selectedSize" : null}>
                                        XL
                                    </div>
                                </div>
                                <div id="productDescription">
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. sit amet. Pellentesque suscipit scelerisque lacus, id suscipit mi auctor et. Aenean posuere porta dictum. In eget euismod mauris. Suspendisse potenti. Fusce pellentesque, urna nec aliquam consectetur, ex nisl bibendum mi, finibus consequat dui nunc id diam.
                                </div>
                                <div id="paypalBtnArea">
                                    <PaypalCheckoutButton product={items[0]} />
                                </div>
                            </div>
                        </div>
                    </div>
                    :

                    <div id="itemArea">
                        {items.map((item, index) => {
                            return (
                                <ShopItem
                                    openItem={() => setFocused(true)}
                                    image={item.image}
                                    price={item.price}
                                    description={item.description}
                                    index={index}
                                    key={index + "item"}
                                />
                            )
                        })}
                        <div id="block">

                        </div>
                    </div>
                }
            </div>
        </div>
    );
}

export default Home;
