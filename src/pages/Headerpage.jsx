import React from 'react';
import Navbar from '../routingComponets/Navbar';
import './Headerpage.css';

const Headerpage = () => {
  return (
    <div className="headerContiner">
      <div className="logoleft">
        <div className="logo">
          <h2>Shoppy</h2>
        </div>
      </div>
      <div className="navSection">
        <Navbar />
      </div>
      <div className="cartsing">
        <div className="logingSction">Login</div>
        <div className="cortlef">Cart</div>
      </div>
    </div>
  );
};

export default Headerpage;
