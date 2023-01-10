import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import * as THREE from "three";
import sound from "../../assets/giphy.gif";
import facebook from "../../assets/facebook.png";
import insta from "../../assets/insta.png";
import twitter from "../../assets/twitter.png";
import Link from "@material-ui/core/Link";
import "./itemPageStyle2.css";
import items from "../../assets/items.json";

import Nav from "../../components/Nav";

function ItemPage2() {

  return (
    <div id="itemPage">
                    <div id="stars"></div>
      {/* nav */}
      <Nav />
      <div id="itemImgContainer">
        <div id="mainImgContainer">
          <img
            id="mainItemImg"
            src="https://cdn.shopify.com/s/files/1/1672/7095/products/PADDEDVESTMAIN_720x.png?v=1669329878"
          ></img>
        </div>
        <ul>
          <img src="https://cdn.shopify.com/s/files/1/1672/7095/products/PADDEDVESTMAIN_720x.png?v=1669329878" />
          <img src="https://cdn.shopify.com/s/files/1/1672/7095/products/PADDEDVESTMAIN_720x.png?v=1669329878" />
          <img src="https://cdn.shopify.com/s/files/1/1672/7095/products/PADDEDVESTMAIN_720x.png?v=1669329878" />
          <img src="https://cdn.shopify.com/s/files/1/1672/7095/products/PADDEDVESTMAIN_720x.png?v=1669329878" />
          <img src="https://cdn.shopify.com/s/files/1/1672/7095/products/PADDEDVESTMAIN_720x.png?v=1669329878" />
          <img src="https://cdn.shopify.com/s/files/1/1672/7095/products/PADDEDVESTMAIN_720x.png?v=1669329878" />
          <img src="https://cdn.shopify.com/s/files/1/1672/7095/products/PADDEDVESTMAIN_720x.png?v=1669329878" />
          <img src="https://cdn.shopify.com/s/files/1/1672/7095/products/PADDEDVESTMAIN_720x.png?v=1669329878" />
        </ul>
      </div>
      {/* info */}
      <div id="itemInfoContainer">
        {/* title */}
        <h1 id="itemTitle">Item Title</h1>
        {/* description */}
        <p id="itemDescription">
          This cotton-blend overcoat combines minimalist elegance and modernism,
          featuring refined, masculine details reminiscent of the classic bomber
          jacket. The knit logo patch stands out on the back, adding a iconic,
          contemporary touch
        </p>
        {/* price */}
        <h3 id="itemPrice">1000$</h3>
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
            <Link  className="itemBtns" style={{ textDecoration: "none", color: "white",marginBottom: "25px" }} href="/">
              ADD TO CART
            </Link>
            <Link  className="itemBtns" style={{ textDecoration: "none", color: "white" }} href="/">
              KEEP SHOPPING
            </Link>
        </div>
        <p id="shippingInfo">* free shipping for all United States orders!</p>
      </div>
    </div>
  );
}

export default ItemPage2;
