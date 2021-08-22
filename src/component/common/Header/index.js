import React from 'react';
import './styles/header.css';


const Header = () => (
  <div className="mainContainer">
  <div className="header">
    <img src="/Assets/covicalc.svg" alt="covicalc" />
    <div className='contact'>CONTACT</div>
  </div>
  {/* <div className="search">
    
       <div className="update"> UPDATES  </div>
       <div className="searchC">Search Country</div>
  </div> */}
  </div>
)
export default Header;