import React, {useState} from "react";
import "./styles/navStyle.css";
import soundGif from "../assets/giphy.gif";
import facebook from "../assets/facebook.png";
import insta from "../assets/insta.png";
import twitter from "../assets/twitter.png";
import music from "../assets/Grumble.mp3";
import soundStopped from "../assets/musicStop.png";


export default function Nav(props) {
    const [paused, setPaused] = useState(true);


    function playPause() {
        var x = document.getElementById("audioPlayer");
           if (paused) {
               x.play();
           } else {
               x.pause();
           }
           setPaused(!paused);
       }
   
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
            <img src={paused ? soundStopped : soundGif} id="sound" className="navText" onClick={() => playPause()}></img>
            <audio
                id="audioPlayer"
                controls
                autoPlay={false}
                src={music}
                style={{ display: "none" }}
            >
            </audio>
            <div id="socials" style={!props.shopOpenNav ? { background: "#0000" } : { background: "black", transitionDelay: "1.5s" }}>
                <a className="socialIcon" href="https://www.instagram.com/_mindfabric/"><img src={insta}></img></a>
                <a className="socialIcon" href="#"><img src={facebook}></img></a>
                <a className="socialIcon" href="#"><img src={twitter}></img></a>
            </div>
        </nav>
    );
}
