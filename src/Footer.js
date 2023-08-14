import React from "react";
import "./Footer.css";
import copyright from "./images/copyright.png";

export default function Footer() {
  return (
    <div className="FooterDiv">
      <div className="FooterContent">
        <div className="Copyright">
          <img src={copyright} alt="copyright" />
        </div>
        <p>Deen Qureshi</p>
      </div>
    </div>
  );
}
