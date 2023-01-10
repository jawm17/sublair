import React from "react";
import "./styles/navStyle.css";
import sound from "../assets/giphy.gif";
import facebook from "../assets/facebook.png";
import insta from "../assets/insta.png";
import twitter from "../assets/twitter.png";

export default function Nav(props) {
    return (
        <nav>
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
            <img src={sound} id="sound" className="navText"></img>
            <div id="socials" style={!props.shopOpenNav ? { background: "#0000" } : { background: "black", transitionDelay: "1.5s" }}>
                <a className="socialIcon" href="https://www.instagram.com/_mindfabric/"><img src={insta}></img></a>
                <a className="socialIcon" href="#"><img src={facebook}></img></a>
                <a className="socialIcon" href="#"><img src={twitter}></img></a>
            </div>
        </nav>
    );
}
