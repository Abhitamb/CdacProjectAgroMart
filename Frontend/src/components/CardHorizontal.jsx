import React from 'react';
import Oder from "./CardHorizontal.css";
import slide from "../img/9.png"
import slide1 from "../img/12.png"
import slide2 from "../img/13.png"
const CardHorizontal = () => {
  return (
    <div className="image-card">
      <div className="image-container">
        <img src={slide} alt="Image 1" />
        <h5>Grain Marketing</h5>
        <p>"Maximize your profits with strategic <br /> grain marketing solutions tailored to your agricultural needs."</p>
      </div>
      <div class = "vertical"></div>
      <div className="image-container">
        <img src={slide1} alt="Image 2" />
        <h5>Feed Solution</h5>
        <p>"Boost your livestock's health and productivity <br /> with our innovative feed solutions."</p>
      </div>
      <div class = "vertical"></div>
      <div className="image-container">
        <img src={slide2} alt="Image 3" />
        <h5>Risk Management</h5>
        <p>"Mitigate uncertainties and safeguard your <br /> agricultural investments with our comprehensive risk management solutions."</p>
      </div>
    </div>
  );
};

export default CardHorizontal;