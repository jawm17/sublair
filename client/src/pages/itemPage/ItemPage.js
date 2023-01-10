import React, { useEffect, useState } from "react";
import PaypalCheckoutButton from "../../paypal/PaypalCheckoutButton";
import upBtn from "../../assets/upload.png";
import { useHistory, useParams } from "react-router-dom";
import logo from "../../assets/LOGO.png"
import axios from "axios";
// import "./itemPageStyle.css";

function ItemPage() {
    const history = useHistory();
    const { id } = useParams();
    const [focused, setFocused] = useState(null);
    const [selectedSize, setSelectedSize] = useState("m");
    const [item, setItem] = useState();

    useEffect(() => {
        if (id) {
            getItemInfo();
        } else {
            history.push("/");
        }
        document.addEventListener("touchmove", preventBehavior, { passive: false });
    }, []);

    async function getItemInfo() {
        try {
            const data = await axios.get("/item/get-info/" + id);
            const { description, title, price, images, thumbnail } = data.data;
            setItem({ description, title, price, images, thumbnail, itemId: id });
        } catch (error) {
            console.log(error);
            history.push("/");
        }
    }

    function preventBehavior(e) {
        if (document.getElementById("mainFooter").style.top !== "12px") {
            e.preventDefault();
        }
    };

    function closePage() {
        // page close
        setFocused(null);
        document.getElementById("mainFooter2").style.top = "calc(var(--app-height) - 76px)";
        setTimeout(() => {
            document.getElementById("homeSlide2").style.transform = "scaleY(0)";
        }, 40);
        document.getElementById("upBtn2").style.transform = "rotate(0deg)";
        setTimeout(() => {
            history.push("/")
        }, 500);
    }

    useEffect(() => {
        if (focused) {

        }
    }, [focused]);

    return (
        <div >
            <div id="homeArea">

            </div>
            <div id="mainFooter2">
                <img alt="logo" src={logo} id="logo"></img>
                <div id="footTitle">
                    SUBLAIR
                </div>
                <div id="upBtnArea" onClick={() => closePage()}>
                    <img alt="up arrow" src={upBtn} id="upBtn2"></img>
                </div>
            </div>

            <div id="homeSlide2">
                <div id="itemPage">
                    <div id="productImageArea">
                        <div>
                            <div id="productTitle2">
                                {item?.title}
                            </div>
                            {/* add placeholders =============================== */}
                            {/* add placeholders =============================== */}
                            {/* add placeholders =============================== */}
                            {/* add placeholders =============================== */}
                            <img alt="product" src={item?.images[item.thumbnail]} id="productImage"></img>
                        </div>
                    </div>
                    <div id="productInfoOuter">
                        <div id="productInfo">
                            <div id="productTitle">
                                {item?.title}
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
                                {item?.description}
                            </div>
                            <div id="paypalBtnArea">
                                <PaypalCheckoutButton product={item} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div >
    );
}

export default ItemPage;
