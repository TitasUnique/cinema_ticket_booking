import React, { useState } from 'react';
import Navbar from '../Navbar/Navbar';
import Home from '../Home/Home';
import LocationPopup from '../LocationPopup/Popup';
import Movies from "../../Components/Movies/Movies";

const LandingPage = () => {
  const [showPopup, setShowPopup] = useState(true);

  const handleClosePopup = () => {
    setShowPopup(false);
  };

  return (
    <>
      {showPopup && <LocationPopup onClose={handleClosePopup} />}
      <Navbar />
      <Home />
      <Movies />
    </>
  );
};

export default LandingPage;
