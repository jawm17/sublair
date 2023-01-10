import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import * as THREE from "three";
import sound from "../../assets/giphy.gif";
import facebook from "../../assets/facebook.png";
import insta from "../../assets/insta.png";
import twitter from "../../assets/twitter.png";

import "./itemPageStyle2.css";
import items from "../../assets/items.json";

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
            <div>
                <a href="/">
                    <div id="siteTitle" className="navText">
                        Sublair
                    </div>
                </a>
                <div id="about" className="navText">
                    About
                </div>
                <div id="contact" className="navText">
                    Contact
                </div>
                <img src={sound} id="sound"></img>
            </div>
            {/* canvas */}
            <div id="itemImgContainer">
                <div id="mainImgContainer"><img id="mainItemImg" src="https://cdn.shopify.com/s/files/1/1672/7095/products/PADDEDVESTMAIN_720x.png?v=1669329878"></img>
                </div>
                <ul>
                    <li><img src="https://cdn.shopify.com/s/files/1/1672/7095/products/PADDEDVESTMAIN_720x.png?v=1669329878" /></li>
                    <li><img src="https://cdn.shopify.com/s/files/1/1672/7095/products/PADDEDVESTMAIN_720x.png?v=1669329878" /></li>
                    <li><img src="https://cdn.shopify.com/s/files/1/1672/7095/products/PADDEDVESTMAIN_720x.png?v=1669329878" /></li>
                    <li><img src="https://cdn.shopify.com/s/files/1/1672/7095/products/PADDEDVESTMAIN_720x.png?v=1669329878" /></li>
                    <li><img src="https://cdn.shopify.com/s/files/1/1672/7095/products/PADDEDVESTMAIN_720x.png?v=1669329878" /></li>
                    <li><img src="https://cdn.shopify.com/s/files/1/1672/7095/products/PADDEDVESTMAIN_720x.png?v=1669329878" /></li>
                </ul>
            </div>
            {/* info */}
            <div id="itemInfoContainer">
                <div id="itemTitle">
                    <h1>Item Title</h1>
                    <h5></h5>
                </div>
                <p>
                    Just like you, our Frame Tee is versatile. Made of super soft Cotton
                    PYCA, it's cut to flatter a variety of body shapes and sizes, and
                    features a straight cut bottom hem. For those who like a looser fit,
                    this shirt is designed for movement - perfect for everyday wear and
                    comfort.
                </p>
                <ul id="itemMatsInfo">
                    <li>70% cotton, 24% polyester, & 6% spandex</li>
                    <li>Machine wash cold</li>
                    <li>Wash with like colors</li>
                    <li>Do Not Iron</li>
                </ul>
                <div id="itemOptions">
                    <ul id="itemColors">
                        <li id="li1"></li>
                        <li id="li2"></li>
                        <li id="li3"></li>
                        <li id="li4"></li>
                        <li id="li5"></li>
                    </ul>
                    <ul id="itemSizes">
                        <li>S</li>
                        <li>M</li>
                        <li>L</li>
                        <li>XL</li>
                        <li>XXL</li>
                    </ul>
                </div>
                <div id="addItemCardBtn">ADD TO CART</div>
            </div>
        </div>
    );
}

export default ItemPage2;