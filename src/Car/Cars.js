import { useState } from "react";
import React from "react";
import { Link } from "react-router-dom";
import carData from "../data/CarList.json";
import "../Style/Car.css";
import Nav from "./Nav";

function CarCardsSection({ handleBookNow }) {
  const handleBookClick = () => {
    handleBookNow();
  };
  const [activeSection, setActiveSection] = useState("home");
  const handleNavClick = (section) => {
    setActiveSection(section);
    if (section === "sectionone") {
      const carDetailsSection = document.getElementById("sectionone");
      carDetailsSection.scrollIntoView({ behavior: "smooth" });
    } else {
      const carDetailsSection = document.getElementById("about");
      carDetailsSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      <Nav handleNavClick={handleNavClick} />
      <div className='car-cards-section'>
        <div className='car-cards-container'>
          {carData.map((car) => (
            <div className='car-card' key={car.model}>
              <img className='car-image' src={car.img} alt='Car' />
              <h3>
                {car.make} {car.model}
              </h3>
              <h5>Make: {car.make}</h5>
              <h5>Year: {car.year}</h5>
              <h5>Price: ${car.price}</h5>
              <Link className='book-bt' to='/'>
                Reserve Car
              </Link>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default CarCardsSection;
