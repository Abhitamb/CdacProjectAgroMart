import React from 'react';
import Oder from "./Oder.css";
const Order = () => {
  return (
    <div className="image-card">
      <div className="image-container">
        <img src="https://cdn-icons-png.flaticon.com/512/3306/3306060.png" alt="Image 1" />
        <h5>FREE SHIPPING ACROSS INDIA</h5>
        <p>we will deliver your order across india for free</p>
      </div>
      <div class = "vertical"></div>
      <div className="image-container">
        <img src="https://cdn-icons-png.flaticon.com/512/1701/1701773.png" alt="Image 2" />
        <h5>SUPPORT 24/7</h5>
        <p>Our support team is always there for you</p>
      </div>
      <div class = "vertical"></div>
      <div className="image-container">
        <img src="https://cdn-icons-png.flaticon.com/512/1488/1488176.png" alt="Image 3" />
        <h5>MONEY RETURN</h5>
        <p>Please refer to returns and exchange section for more details</p>
      </div>
    </div>
  );
};

export default Order;

