import React from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom"; // Import Link from react-router-dom
import Charts from "./Charts";
import Home from "./components/Home";
import Weather from "./components/Weather";
import LineChart from "./components/Linegraph";
import Navbar from "./navbar";
// import WeatherBarGraph from './WeatherBarGraph';
// import Product from "./Weather";
// import './app.css';
function App() {
  return ( 
    <div>
      <div>
    <BrowserRouter>
     <Navbar/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/charts" element={<LineChart />} />
        <Route path="/weather" element={<Weather />} />
        <Route path="/line" element={<LineChart />} />
      </Routes>
    </BrowserRouter>
  </div>
 
  </div>
  );
}

export default App;
