import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./Car/Home";
import Cars from "./Car/Cars";
import NavBar from "./Car/Nav";
import Team from "./Car/OurTeam";

import About from "./Car/AboutContact";

function App() {
  return (
    <>
      <Router>
        {/* <NavBar /> */}
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/vehicles' element={<Cars />} />
          <Route path='/team' element={<Team />} />
          {/* <Route path='/about' element={<About />} /> */}
        </Routes>
        {/* <About /> */}
      </Router>
    </>
  );
}

export default App;
