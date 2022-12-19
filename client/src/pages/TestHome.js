import React, { useEffect } from "react";
import { useHistory } from "react-router-dom";
import * as THREE from 'three';
import sound from "../assets/giphy.gif";
import facebook from "../assets/facebook.png";
import insta from "../assets/insta.png";
import twitter from "../assets/twitter.png";
import "./testStyle.css";

export default function TestHome() {
    const history = useHistory();
    var renderer, scene, camera, mesh;

    useEffect(() => {
        initaite();
    }, []);

    function initaite() {
        var canvas = document.getElementById('canvas');
        var width = 500;
        var height = 400;
        renderer = new THREE.WebGLRenderer({
            canvas: canvas
        });
        scene = new THREE.Scene();
        camera = new THREE.PerspectiveCamera(75, width / height, 0.1, 1000);
        camera.position.set(0, 0, 150);
        var geometry = new THREE.SphereGeometry(80, 15, 15);
        var material = new THREE.MeshBasicMaterial({
            color: 0xffffff,
            wireframe: true
        });
        mesh = new THREE.Mesh(geometry, material);
        scene.add(mesh);
        var light = new THREE.SpotLight(0xFF0000);
        light.position.set(50, 50, 150);
        scene.add(light);

        document.addEventListener('mousemove', move);
        autoMove();
    }

    function move(e) {
        mesh.rotation.x = e.pageY * 0.005;
        mesh.rotation.y = e.pageX * 0.005;
        renderer.render(scene, camera);
    }

    function autoMove() {
        let pos = 0
        setInterval(() => {
            pos = mesh.rotation.y
            mesh.rotation.y = pos + 0.5 * 0.005;
            renderer.render(scene, camera);
            console.log(mesh.rotation.x);
        }, 10);
    }

    function openMenu() {
        if (document.getElementById("sidebar").style.left === "0px") {
            document.getElementById("sidebar").style.left = "100vw";
            document.getElementById("sidebarTab").style.opacity = "100"
            document.getElementById("siteTitle").style.color = "white";
            document.getElementById("about").style.color = "white";
            document.getElementById("contact").style.color = "white";
        } else {
            document.getElementById("sidebar").style.left = "0px"
            document.getElementById("sidebarTab").style.opacity = "0"
            document.getElementById("siteTitle").style.color = "black";
            document.getElementById("about").style.color = "black";
            document.getElementById("contact").style.color = "black";
        }
    }

    return (
        <div id="testBg">
            <div id="stars">

            </div>
            <div id="siteTitle" className="navText" onClick={() => openMenu()}>
                sublair
            </div>
            <div id="about" className="navText">
                about
            </div>
            <div id="contact" className="navText">
                contact
            </div>
            <img src={sound} id="sound"></img>
            <div id="socials">
                <img className="socialIcon" src={insta}></img>
                <img className="socialIcon" src={facebook}></img>
                <img className="socialIcon" src={twitter}></img>
            </div>
            <div id="sidebar">
                <div id="sidebarTab" onClick={() => openMenu()}>
                    <div>
                        <div>
                            s
                        </div>
                        <div>
                            h
                        </div>
                        <div>
                            o
                        </div>
                        <div>
                            p
                        </div>
                    </div>
                </div>
            </div>
            <div id="canvasFlex">
                <canvas id="canvas" width="500" height="400"></canvas>
            </div>
        </div>
    );
}