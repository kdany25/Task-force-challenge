import React from "react";
import './Style/Footer.css'
const Footer = () => {
  return (
    <div className="main-footer">
      
        <div className="row">
          <div className="col">
            <h4>REACH ME</h4>
            <ul className="email">
              <li >Email</li>
              <li className="em">kabadany25@gmail.com</li>
            </ul>
            <ul className="phone">
              <li>phone</li>
              <li className="ph">+250788730199</li>
            </ul>
            <ul className="profile">
              <li>Profile</li>
              <li className="pr">www.linkedin.com</li>
            </ul>
          </div>
        </div>
        {/* ---------- */}
        
        <div className="row2">
          <p className="dev">Developed by <span>Kabalisa Dany</span></p>
        
          <p className="des">Designed by <span>Awesomity Lab</span></p>
        </div>
      </div>
    
  );
};
export default Footer;
