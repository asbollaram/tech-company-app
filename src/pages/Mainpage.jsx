import React from 'react';
import Homepage from '../routingComponets/Homepage';
import Aboutpage from '../routingComponets/Aboutpage';
import Contactpage from '../routingComponets/Contactpage';
import Servicespage from '../routingComponets/Servicespage';
import { Routes, Route } from 'react-router-dom';
import Headerpage from './Headerpage';
import Footerpage from './Footerpage';

const Mainpage = () => {
  return (
    <div className="MainContainer">
      <Headerpage />
      <Routes>
        <Route path="/Homepage" element={<Homepage />} />
        <Route path="/Service" element={<Servicespage />} />
        <Route path="/AboutUs" element={<Aboutpage />} />
        <Route path="/ContantUs" element={<Contactpage />} />
      </Routes>
      {/* <Homepage />
      <Aboutpage />
      <Servicespage />
      <Contactpage /> */}
      <Footerpage />
    </div>
  );
};

export default Mainpage;
