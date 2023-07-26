import React from "react";
import "../Style/Banner.css"; // Import the CSS file for styling
import Img1 from "../img/img1.png";

function Banner() {
  return (
    <>
      <div className='banner'>
        <img src={Img1} alt='Car' className='image' />
      </div>
      <div className='banner-content'>
        <div className='one'>
          <h4>Why Choose Us</h4>
          <h1>Best valued deals you will ever find</h1>
          <h5>
            Discover the best deals you'll ever find with our unbeatable offers.
            We're dedicated to providing you with the best value for your money,
            so you can enjoy top-quality services and products without breaking
            the bank. Our deals are designed to give you the ultimate renting
            experience, so don't miss out on your chance to save big
          </h5>
        </div>
        <div className='two'>
          <h1>Cross Country Drive</h1>
          <h3>
            Take your driving experience to the next level with our top-notch
            vehicles for your cross-country adventures.
          </h3>
          <h1>All Inclusive Pricing</h1>
          <h3>
            Get everything you need in one convenient, transparent price with
            our all-inclusive pricing policy.
          </h3>
          <h1>No Hidden Charges</h1>
          <h3>
            Enjoy peace of mind with our no hidden charges policy. We believe in
            transparent and honest pricing.
          </h3>
        </div>
      </div>
    </>
  );
}

export default Banner;
