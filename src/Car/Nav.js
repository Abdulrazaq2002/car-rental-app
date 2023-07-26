import React, { useState, useEffect } from "react";
import "../Style/Navbar.css";
import { Link } from "react-router-dom";

const Nav = ({ handleNavClick }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleCutClick = () => {
    // Implement the desired functionality when the "Cut" button is clicked
    console.log("Cut button clicked");
  };

  useEffect(() => {
    const checkMobileScreen = () => {
      setIsMobile(window.innerWidth <= 767);
    };

    // Add event listener to check screen size on resize
    window.addEventListener("resize", checkMobileScreen);

    // Initial check on component mount
    checkMobileScreen();

    // Cleanup event listener on component unmount
    return () => window.removeEventListener("resize", checkMobileScreen);
  }, []);

  const handleAboutClick = () => {
    handleNavClick("about"); // Call the handleNavClick function with the appropriate section identifier
    setIsMenuOpen(false); // Close the menu after clicking
  };

  return (
    <nav className={`nav ${isMenuOpen ? "open" : ""}`}>
      <Link to='/'>
        <span id='tit-cont'>
          <img className='nav-img' src='./CarLogo.png' />
        </span>
      </Link>
      {isMobile && (
        <div className='icon' onClick={toggleMenu}>
          <div className='bar'></div>
          <div className='bar'></div>
          <div className='bar'></div>
        </div>
      )}
      <div className={`menu ${isMenuOpen ? "open" : ""}`}>
        <div className='menu-close' onClick={toggleMenu}>
          X
        </div>
        <center>
          <ul>
            <li
              onClick={() => {
                handleNavClick("sectionone");
                setIsMenuOpen(false);
              }}>
              <Link className='link' to='/'>
                Home
              </Link>
            </li>
            <li
              onClick={() => {
                handleNavClick("faq");
                setIsMenuOpen(false);
              }}>
              <Link className='link' to='/'>
                FAQ
              </Link>
            </li>
            <li>
              <Link className='link' to='/vehicles'>
                Vehicles
              </Link>
            </li>
            <li>
              <Link className='link' to='/team'>
                Our Team
              </Link>
            </li>
            <li onClick={handleAboutClick}>
              <Link className='link' to='/'>
                About
              </Link>
            </li>
            <li>
              <Link className='Login signin' to='/#'>
                Sign In
              </Link>
            </li>
            <li>
              <Link className='Login register' to='/#'>
                Register
              </Link>
            </li>
          </ul>
        </center>
      </div>
    </nav>
  );
};

export default Nav;
