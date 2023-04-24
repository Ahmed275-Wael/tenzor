import React from "react";
import "./styles/landing.css";
import phone1 from "../assets/images/phone1.png";
import phone2 from "../assets/images/phone2.png";

export default function Landing() {
  return (
    <div className="landing">
      <div className="content">
        <h1>Tenzor</h1>
        <p>First website to trade mobile phones</p>
      </div>
      <div className="phone-imgs">
        <img id="phone1" src={phone1} alt="phone1" />
        <img id="phone2" src={phone2} alt="phone2" />
      </div>
    </div>
  );
}
