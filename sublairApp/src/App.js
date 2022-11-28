import { useEffect, useState } from "react";
import PaypalCheckoutButton from "./PaypalCheckoutButton";
import upBtn from "./upBtn.png";
import "./app.css";

function App() {
  let open = false;
  const product = {
    description: "zectangles",
    price: 19
  }

  function rippleClick(e) {
    window.test(e.clientX + 75, e.clientY + 50);
  }

  // function openPage(state) {
  //   document.getElementById("bg").style.transform = "scaleY(1)";
  //   document.getElementById("mainFooter").style.top = "15px";
  //   rotateBtn();
  // }

  function openPage() {
    if (open === true) {
      document.getElementById("mainFooter").style.top = "calc(100vh - 95px)";
      document.getElementById("homeSlide").style.transform = "scaleY(0)";
      document.getElementById("upBtn").style.transform = "rotate(0deg)";
      document.getElementById("itemArea").style.opacity = "0%";
    } else {
      document.getElementById("homeSlide").style.transform = "scaleY(1)";
      document.getElementById("mainFooter").style.top = "15px";
      document.getElementById("upBtn").style.transform = "rotate(180deg)";

      setTimeout(() => {
        document.getElementById("itemArea").style.opacity = "100%";
      }, 100);
    }
    open = !open;
  }

  return (
    <div>

      {/* <PaypalCheckoutButton product={product}/> */}



      <div class="indexOuter">
        <div className="indeximage"></div>
      </div>



      <div id="mainFooter">
        <img src="https://sublair.com/images/LOGO.png" id="logo"></img>
        <div id="footTitle">
          SUBLAIR
        </div>
        <img src={upBtn} id="upBtn" onClick={() => openPage()}></img>
      </div>

      <div id="homeSlide">


        <div id="itemArea">

          <div className="item">
            <img src="https://cdn.shopify.com/s/files/1/1672/7095/products/DigitalPoltergeistMainE2_720x.png?v=1667081776" className="itemImage"></img>
            <div className="itemInfo">
              <div className="itemName">
                clones t-shirt
              </div>
              <div className="itemPrice">
                $125
              </div>
            </div>
          </div>

          <div className="item">
            <img src="https://cdn.shopify.com/s/files/1/1672/7095/products/PADDEDVESTMAIN_2048x.png?v=1669329878" className="itemImage"></img>
            <div className="itemInfo">
              <div className="itemName">
                clones t-shirt
              </div>
              <div className="itemPrice">
                $125
              </div>
            </div>
          </div>

          <div className="item">
            <img src="https://cdn.shopify.com/s/files/1/1672/7095/products/EHP02e1_2048x.png?v=1661040011" className="itemImage"></img>
            <div className="itemInfo">
              <div className="itemName">
                clones t-shirt
              </div>
              <div className="itemPrice">
                $125
              </div>
            </div>
          </div>

          <div className="item">
            <img src="https://cdn.shopify.com/s/files/1/1672/7095/products/DigitalPoltergeistMainE2_720x.png?v=1667081776" className="itemImage"></img>
            <div className="itemInfo">
              <div className="itemName">
                clones t-shirt
              </div>
              <div className="itemPrice">
                $125
              </div>
            </div>
          </div>

          <div className="item">
            <img src="https://cdn.shopify.com/s/files/1/1672/7095/products/DigitalPoltergeistMainE2_720x.png?v=1667081776" className="itemImage"></img>
            <div className="itemInfo">
              <div className="itemName">
                clones t-shirt
              </div>
              <div className="itemPrice">
                $125
              </div>
            </div>
          </div>

          <div className="item">
            <img src="https://cdn.shopify.com/s/files/1/1672/7095/products/DigitalPoltergeistMainE2_720x.png?v=1667081776" className="itemImage"></img>
            <div className="itemInfo">
              <div className="itemName">
                clones t-shirt
              </div>
              <div className="itemPrice">
                $125
              </div>
            </div>
          </div>

          <div className="item">
            <img src="https://cdn.shopify.com/s/files/1/1672/7095/products/DigitalPoltergeistMainE2_720x.png?v=1667081776" className="itemImage"></img>
            <div className="itemInfo">
              <div className="itemName">
                clones t-shirt
              </div>
              <div className="itemPrice">
                $125
              </div>
            </div>
          </div>

          <div className="item">
            <img src="https://cdn.shopify.com/s/files/1/1672/7095/products/DigitalPoltergeistMainE2_720x.png?v=1667081776" className="itemImage"></img>
            <div className="itemInfo">
              <div className="itemName">
                clones t-shirt
              </div>
              <div className="itemPrice">
                $125
              </div>
            </div>
          </div>

          <div className="item">
            <img src="https://cdn.shopify.com/s/files/1/1672/7095/products/DigitalPoltergeistMainE2_720x.png?v=1667081776" className="itemImage"></img>
            <div className="itemInfo">
              <div className="itemName">
                clones t-shirt
              </div>
              <div className="itemPrice">
                $125
              </div>
            </div>
          </div>

          <div className="item">
            <img src="https://cdn.shopify.com/s/files/1/1672/7095/products/DigitalPoltergeistMainE2_720x.png?v=1667081776" className="itemImage"></img>
            <div className="itemInfo">
              <div className="itemName">
                clones t-shirt
              </div>
              <div className="itemPrice">
                $125
              </div>
            </div>
          </div>

          <div className="item">
            <img src="https://cdn.shopify.com/s/files/1/1672/7095/products/DigitalPoltergeistMainE2_720x.png?v=1667081776" className="itemImage"></img>
            <div className="itemInfo">
              <div className="itemName">
                clones t-shirt
              </div>
              <div className="itemPrice">
                $125
              </div>
            </div>
          </div>


        </div>
      </div>
    </div>
  );
}

export default App;
