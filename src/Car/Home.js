import React, { useState, useRef } from "react";
import "../Style/HomePage.css";
import carData from "../data/CarList.json";
import FAQ from "./Faq";
import Nav from "./Nav";
import About from "./AboutContact";
import Banner from "./Banner";
import Carsdetails from "./Cars";

function HomePage() {
  const [isBookingOpen, setBookingOpen] = useState(false);
  const bookNowRef = useRef(null);

  const handleBookNow = () => {
    setBookingOpen(true);
    if (bookNowRef.current) {
      bookNowRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  const [selectedCar, setSelectedCar] = useState(null);
  const [pickupLocation, setPickupLocation] = useState("");
  const [dropLocation, setDropLocation] = useState("");
  const [activeSection, setActiveSection] = useState("home");

  const handleCarSelection = (event) => {
    const selectedModel = event.target.value;
    const selectedCarDetails = carData.find(
      (car) => car.model === selectedModel
    );
    setSelectedCar(selectedCarDetails);
  };

  const handlePickupLocation = (event) => {
    setPickupLocation(event.target.value);
  };

  const handleDropLocation = (event) => {
    setDropLocation(event.target.value);
  };

  const handleNavClick = (section) => {
    setActiveSection(section);
    if (section === "faq") {
      const faqSection = document.getElementById("faq-section");
      faqSection.scrollIntoView({ behavior: "smooth" });
    } else if (section === "vehicles") {
      const carDetailsSection = document.getElementById("car-details-section");
      carDetailsSection.scrollIntoView({ behavior: "smooth" });
    } else if (section === "sectionone") {
      const carDetailsSection = document.getElementById("sectionone");
      carDetailsSection.scrollIntoView({ behavior: "smooth" });
    } else {
      const carDetailsSection = document.getElementById("about");
      carDetailsSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className='homepage-container'>
      <Nav handleNavClick={handleNavClick} />

      <div className='section-one' id='sectionone'>
        <div className='left-section'>
          <img
            className='car-image-1'
            src='https://www.freepnglogos.com/uploads/car-png/car-png-large-images-40.png'
            alt='Car'
          />
        </div>
        <div className='right-side'>
          <h1 className='quote'>
            <b>Book</b> Your Car From Us To Get Your Full <b>Joy</b> At
            <b> Affordable </b>
            Price
          </h1>
          <h6 className='quote'>
            Rent the car of your dreams. Unbeatable prices, unlimited miles,
            flexible pick-up options and much more.
          </h6>
          <div className='buttons-container'>
            <button className='book-btn' onClick={() => handleBookNow()}>
              Book Now
            </button>
            <button
              className='learn-more'
              onClick={() => handleNavClick("faq")}>
              Learn More
            </button>
          </div>
        </div>
      </div>

      <h2>Book Your Car</h2>
      <div ref={bookNowRef} className='booking-section'>
        <form>
          <div className='form-group'>
            <label htmlFor='pickupLocation'>Pickup Location:</label>

            <select
              id='pickupLocation'
              name='pickupLocation'
              value={pickupLocation}
              onChange={handlePickupLocation}
              className='form-control'>
              <option value='' disabled>
                Select a Pickup Location
              </option>
              <option value='Hyderabad'>Hyderabad</option>
              <option value='Punjab'>Punjab</option>
              <option value='Delhi'>Delhi</option>
              <option value='Mumbai'>Mumbai</option>
              <option value='Bangalore'>Bangalore</option>
              <option value='Chennai'>Chennai</option>
              <option value='Gujarat'>Gujarat</option>
              <option value='Lucknow'>Lucknow</option>
              <option value='Kolkata'>Kolkata</option>
              <option value='Rajasthan'>Rajasthan</option>
            </select>

            <label htmlFor='dropLocation'>Drop Location:</label>
            <select
              id='dropLocation'
              name='pickupLocation'
              value={dropLocation}
              onChange={handleDropLocation}
              className='form-control'>
              <option value='' disabled>
                Select a Drop Location
              </option>
              <option value='Hyderabad'>Hyderabad</option>
              <option value='Punjab'>Punjab</option>
              <option value='Delhi'>Delhi</option>
              <option value='Mumbai'>Mumbai</option>
              <option value='Bangalore'>Bangalore</option>
              <option value='Chennai'>Chennai</option>
              <option value='Gujarat'>Gujarat</option>
              <option value='Lucknow'>Lucknow</option>
              <option value='Kolkata'>Kolkata</option>
              <option value='Rajasthan'>Rajasthan</option>
            </select>

            <label htmlFor='pickupDate'>Pickup Date:</label>

            <input
              type='date'
              id='pickupDate'
              name='pickupDate'
              placeholder='Pick-Up Date'
              className='form-control'
            />

            <label htmlFor='returnDate'>Return Date:</label>

            <input
              type='date'
              id='returnDate'
              name='returnDate'
              className='form-control'
            />

            <label htmlFor='carModel'>Car Model:</label>

            <div className='select-container'>
              <select
                id='carModel'
                name='carModel'
                value={selectedCar?.model || ""}
                onChange={handleCarSelection}
                className='form-control'>
                <option value='' disabled>
                  Select a car model
                </option>
                {carData.map((car) => (
                  <>
                    <option key={car.model} value={car.model}>
                      {car.model}
                    </option>
                  </>
                ))}
              </select>
              {/* <button className='submit'>Look Car</button> */}
            </div>
          </div>
        </form>
      </div>

      <div className='booksection'>
        {selectedCar && (
          <div className='card'>
            <h4>Details Of Car Here</h4>
            <h4 className='model'>
              Car Name: {selectedCar.model} {selectedCar.make}
            </h4>
            <img className='car-img2' src={selectedCar.img} alt='' />
            <h5 className='car-year'>Year Of Made: {selectedCar.year}</h5>
            <h5 className='details'>{selectedCar.details}</h5>
            <input type='button' className='submit' value='Reserve' />
          </div>
        )}
      </div>

      <div className='faq-section' id='faq-section'>
        <FAQ />
      </div>
      <div>
        <Banner />
      </div>
      <div id='about'>
        <About />
      </div>
    </div>
  );
}

export default HomePage;
