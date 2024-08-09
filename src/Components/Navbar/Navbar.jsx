import React from 'react'
import "./Navbar.css";
import logo from "../../Assests/Images/logo.png";

const Navbar = () => {
  return (
    <>
    <div className='Navbar'>
        <div className="nav-left">
          <img src={logo} alt="Logo" />
        </div>
        <div className="nav-right">
            <ul className='main-nav-ul'>
                <li>Movies</li>
                <li>TV Shows</li>
                <li>Plays</li>
                <li>Sports</li>
            </ul>
            <button className='nav-button'>Contact Dev.</button>
        </div>
    </div>
    </>
  )
}

export default Navbar