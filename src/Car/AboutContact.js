import React from "react";
import "../Style/AboutPage.css";
import Nav from "./Nav";

const CarRentalPage = () => {
  return (
    <>
      <div className='car-rental-page'>
        <section className='about-section'>
          <h2>About Company</h2>
          <h1>You start the engine and your adventure begins</h1>
          <h5>
            Certain but she but shyness why cottage. Guy the put instrument sir
            entreaties affronting. Pretended exquisite see cordially the you.
            Weeks quiet do vexed or whose. Motionless if no to affronting
            imprudence no precaution. My indulged as disposal strongly attended.
          </h5>
        </section>
        <section className='contact-section'>
          <h2>Contact Us</h2>
          <form>
            <div className='form-group'>
              <label htmlFor='name'>Name</label>
              <input type='text' id='Name' placeholder='Your Name Here' />
            </div>
            <div className='form-group'>
              <label htmlFor='email'>Gmail</label>
              <input type='email' id='gmail' placeholder='Gmail Here' />
            </div>
            <div className='form-group'>
              <label htmlFor='message'>Message</label>
              {/* <textarea id='message' rows='4'></textarea> */}
              <textarea id='msg' placeholder='Feedback Here'></textarea>
            </div>
            <button className='btn'>Send</button>
          </form>
        </section>
      </div>
      <div className='foot'>
        <h1>Build By Abdul Razaq, React Front-End Developer</h1>
        <h3>
          <b>©</b> All Right Taken By Abdul Razaq
        </h3>
      </div>
    </>
  );
};

export default CarRentalPage;
