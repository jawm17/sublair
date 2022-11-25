import { useEffect } from "react";
import PaypalCheckoutButton from "./PaypalCheckoutButton";
import "./app.css";

function App() {
  const product = {
    description: "zectangles",
    price: 19
  }

  function rippleClick(e) {
    // window.test(e.clientX + 75, e.clientY + 50);
  }

  return (
    <div>
      
      <PaypalCheckoutButton product={product}/>


      {/* <div>
        <div id="safeSpace" >
        </div>
        <div id="safeSpaceOuter" onClick={(e) => rippleClick(e)}>
        </div>
        <div class="indexOuter">
          <div class="indexBackground">
            <div className="indeximage"></div>
          </div>
        </div>
        <div class="legalobligation">
          <p><a class="policylink" href="https://alphamotif.net/policies/terms-of-service">TERMS OF SERVICE + </a> <a class="policylink" href="https://alphamotif.net/policies/privacy-policy">PRIVACY POLICY</a></p>
        </div>
      </div> */}
    </div>
  );
}

export default App;
