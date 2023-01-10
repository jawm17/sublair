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
  var renderer, scene, camera, mesh;
  const [shopOpen, setShopOpen] = useState(false);

  useEffect(() => {
    // initaite();
  }, []);
  console.log("");
  function initaite() {
    var canvas = document.getElementById("canvasItem");
    var width = 500;
    var height = 400;
    renderer = new THREE.WebGLRenderer({
      canvas: canvas,
    });
    renderer.setClearColor(0x000000, 0);
    scene = new THREE.Scene();
    camera = new THREE.PerspectiveCamera(75, width / height, 0.1, 1000);
    camera.position.set(0, 0, 150);
    var geometry = new THREE.SphereGeometry(80, 15, 15);
    var material = new THREE.MeshBasicMaterial({
      color: 0xffffff,
      wireframe: true,
    });
    mesh = new THREE.Mesh(geometry, material);
    scene.add(mesh);
    var light = new THREE.SpotLight(0xff0000);
    light.position.set(50, 50, 150);
    scene.add(light);

    document.addEventListener("mousemove", move);
    autoMove();
  }

  function move(e) {
    mesh.rotation.x = e.pageY * 0.005;
    mesh.rotation.y = e.pageX * 0.005;
    renderer.render(scene, camera);
  }

  function autoMove() {
    let pos = 0;
    setInterval(() => {
      pos = mesh.rotation.y;
      mesh.rotation.y = pos + 0.5 * 0.005;
      renderer.render(scene, camera);
      // console.log(mesh.rotation.x);
    }, 10);
  }
  return (
    <div id="itemPage">
                    <div id="stars"></div>
      {/* nav */}
      <Nav />
      <section className="sec" id="sec1"></section>
      <section className="sec" id="sec2"></section>
      <section className="sec" id="sec3"></section>
      <section className="sec" id="sec4"></section>
      {/* canvas */}
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
          <div className="itemOptions" id="itemColor">
            <h1>COLORS</h1>
            <div></div>
            <div></div>
          </div>
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
