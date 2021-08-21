import React from "react";
import './Style/DevProfile.css'

const Devprofile = () => {
  return (
    <div className="container">
      <div className="devpic">
        <img className="myprofile" src="/Assets/prooo.png" alt="profile" />
      </div>
      <div className="devskills">
        <div className="name">KABALISA Dany</div>
        <div className="skills">Full Stack Web Developer</div>
        <p className="date">22 August 2021</p>
      </div>
    </div>
  );
};
export default Devprofile;
