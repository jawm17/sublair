import React, { useEffect } from "react";
import * as THREE from 'three';
import "./testStyle.css";

export default function TestHome() {
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
        var geometry = new THREE.SphereGeometry(80, 500, 500);
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
        document.addEventListener('mousedown', function(event) { 
            // simulating hold event
            setTimeout(function() {
              touch();
            }, 0);
          });
    }

    function move(e) {



        document.getElementById("circle").style.top = e.clientY - 20 +  "px";
        document.getElementById("circle").style.left = e.clientX - 20 + "px";
    }

    function touch(e) {
        document.addEventListener("mouseup", function() {
            console.log("up");
            document.getElementById("circle").style.transform = "scale(1)";
        })
        document.getElementById("circle").style.transform = "scale(100)";
        console.log("down")
    }

    return (
        <div id="testBg">
            <div id="stars">

            </div>
            <div id="canvasFlex">
                <div id="circle"></div>
                <canvas id="canvas"></canvas>
            </div>
        </div>
    );
}