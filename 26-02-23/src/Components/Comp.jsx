import React from "react";
import "../App.css";
const Comp = () => {
  return (
    <div className="comp">
      <div className="header">
        <span>CRED</span>
        <div className="sub-header">
          <span>credit score check</span>
          <span>CRED pay</span>
        </div>
      </div>
      <div className="main-container">
        <h1 className="heading">rewards for paying <br /> credit card bills.</h1>
        <p style={{fontSize:'2rem', fontWeight:'bold'}}>join 9M+ members who win rewards and cashbacks everyday</p>
        <button className="btn">Download CRED</button>
      </div>
    </div>
  );
};

export default Comp;
