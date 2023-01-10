import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import * as THREE from "three";
import soundGif from "../../assets/giphy.gif";
import soundStopped from "../../assets/musicStop.png";
import facebook from "../../assets/facebook.png";
import insta from "../../assets/insta.png";
import twitter from "../../assets/twitter.png";
import music from "../../assets/Grumble.mp3";
import "./homeStyle.css";
import ItemCard from "../../components/ItemCard";
import items from "../../assets/items.json";
import Nav from "../../components/Nav";


export default function Home() {
    const history = useHistory();
    const [paused, setPaused] = useState(true);
    const [shopOpen, setShopOpen] = useState(false);
    var renderer, scene, camera, mesh;


    useEffect(() => {
        initaite();
    }, []);

    function initaite() {
        var canvas = document.getElementById("canvas");
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
        }, 10);
    }

    function playPause() {
        var x = document.getElementById("audioPlayer");
        if (paused) {
            x.play();
        } else {
            x.pause();
        }
        setPaused(!paused);
    }

    function openItem(id) {
        let image = document.getElementById(id);
        let imgData = image.getBoundingClientRect();
        console.log(imgData);


        const newImage = document.createElement("img");
        newImage.src = "https://cdn.shopify.com/s/files/1/1672/7095/products/CSH01E2_720x.png?v=1661039920";
        newImage.width = imgData.width;
        newImage.height = imgData.height;
        newImage.style.left = imgData.x + "px";
        newImage.style.top = imgData.y + "px";
        newImage.id = "testyyyy"
        document.getElementById("sidebar").appendChild(newImage);

        document.getElementById("testCardCompOuterContainer").style.opacity = 0

        setTimeout(() => {
            newImage.style.scale = 1.3
            newImage.style.top = ((window.innerHeight - 2) - (newImage.height * 1.5)) + "px";
            newImage.style.left = "125.5px"
            document.getElementById("textyyy").style.opacity = 100
        }, 2000);
    }

    return (
        <div id="testBg">
            <div id="stars"></div>
            <Nav shopOpenNav={shopOpen}/>
            <div id="sidebarTab" style={!shopOpen ? { opacity: 100, right: 0, transitionDelay: "1100ms" } : { opacity: 0, right: -40, transitionDelay: "0ms" }} onClick={() => setShopOpen(true)}>
                <div>s</div>
                <div>h</div>
                <div>o</div>
                <div>p</div>
            </div>
            <div id="sidebarTab2" style={!shopOpen ? { opacity: 0, right: -40, transitionDelay: "0ms" } : { opacity: 100, right: 0, transitionDelay: "1100ms" }} onClick={() => setShopOpen(false)}>
                <div>h</div>
                <div>o</div>
                <div>m</div>
                <div>e</div>
            </div>

            <div id="sidebar" style={!shopOpen ? { top: "100vh" } : { top: "0vh" }}>
                <div id="testCardCompOuterContainer" style={!shopOpen ? { top: "0vh", background: "transparent", transitionDelay: "0s" } : { top: "100vh", background: "black", transitionDelay: "1.5s" }}>
                    {items.map((item, index) => {
                        return (
                            <ItemCard
                                price={item.price}
                                title={item.description}
                                img={item.image}
                                link="/item"
                            />
                        );
                    })}
                </div>
            </div>
            <div id="canvasFlex" style={!shopOpen ? { opacity: 100, transitionDelay: "1100ms" } : { opacity: 0, transitionDelay: "50ms" }}>
                <canvas id="canvas" width="500" height="400"></canvas>
            </div>
        </div>
    );
}