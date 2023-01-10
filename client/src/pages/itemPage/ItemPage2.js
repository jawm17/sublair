import React, { useEffect, useState, useContext } from "react";
import { ShopContext } from "../../context/ShopContext";
import sound from "../../assets/giphy.gif";
import facebook from "../../assets/facebook.png";
import insta from "../../assets/insta.png";
import twitter from "../../assets/twitter.png";
import Link from "@material-ui/core/Link";
import { useHistory, useParams } from "react-router-dom";
import "./itemPageStyle2.css";
import axios from "axios";
import items from "../../assets/items.json";

import Nav from "../../components/Nav";

function ItemPage2() {
  const { cartTotal, setCartTotal } = useContext(ShopContext);
  const history = useHistory();
  const { id } = useParams();
  const [selectedSize, setSelectedSize] = useState("m");
  const [item, setItem] = useState();
  const [selectedImg, setSelectedImg] = useState("");

  useEffect(() => {
    if (id) {
      getItemInfo();
    } else {
      history.push("/");
    }
  }, []);

  async function getItemInfo() {
    try {
      const data = await axios.get("/item/get-info/" + id);
      console.log(data);
      const { description, title, price, images, thumbnail } = data.data;
      setItem({ description, title, price, images, thumbnail, itemId: id });
    } catch (error) {
      console.log(error);
      history.push("/");
    }
  }

  function addToCart() {
    setCartTotal(cartTotal + 1);
    if (localStorage.cart) {
      let cartItems = JSON.parse(localStorage.cart);
      cartItems.push({
        name: item.title,
        unit_amount: { value: item.price, currency_code: 'USD' },
        quantity: '1',
        sku: id,
        thumbnail: item.images[item.thumbnail]
      });
      localStorage.cart = JSON.stringify(cartItems);
    } else {
      localStorage.cart = JSON.stringify([{
        name: item.title,
        unit_amount: { value: item.price, currency_code: 'USD' },
        quantity: '1',
        sku: id,
        thumbnail: item.images[item.thumbnail]
      }]);
    }
  }


  return (
    <div id="itemPage">
      {/* <div id="stars"></div> */}
      {/* nav */}
      <Nav />
      <div id="itemImgContainer">
        <div id="mainImgContainer">
          <img
            id="mainItemImg"
            src={selectedImg || item?.images[item.thumbnail]}
          ></img>
        </div>
        <ul>
          {item?.images.map((img) => {
            return <img src={img} key={img} onClick={() => setSelectedImg(img)} />
          })}
        </ul>
      </div>
      {/* info */}
      <div id="itemInfoContainer">
        {/* title */}
        <h1 id="itemTitle">{item?.title || "item name"}</h1>
        {/* description */}
        <p id="itemDescription">
          {item?.description || " "}
        </p>
        {/* price */}
        <h3 id="itemPrice">${item?.price || "00"}</h3>
        <div id="itemOptions-container">
          <div className="itemOptions" id="itemSize">
            <h1>SIZES</h1>
            <div>S</div>
            <div>M</div>
            <div>L</div>
            <div>XL</div>
            <div>XXL</div>
          </div>
          {/* <div className="itemOptions" id="itemColor">
            <h1>COLORS</h1>
            <div></div>
            <div></div>
          </div> */}
        </div>
        <div id="itemBtnsContainer">
          <div className="itemBtns" onClick={() => addToCart()} style={{ textDecoration: "none", color: "white", marginBottom: "25px" }}>
            ADD TO CART
          </div>
          <div className="itemBtns" onClick={() => history.push("/")} style={{ textDecoration: "none", color: "white" }}>
            KEEP SHOPPING
          </div>
        </div>
        <p id="shippingInfo">* free shipping for all United States orders!</p>
      </div>
    </div>
  );
}

export default ItemPage2;
