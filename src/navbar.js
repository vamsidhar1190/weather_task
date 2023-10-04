import React from "react";
import { Link } from "react-router-dom"; // Import Link as a named export

function Navbar() {
  return (
    <div className="home-container">

    <ul>
      <li>
        <Link to="/">Home</Link>
      </li>
      {/* <li>
      <img src=""/><br/>
        <Link to="/charts">Charts</Link>
      </li>
      <li>
        <Link to="/products">Products</Link>
      </li> */}
      <li>
      {/* <img src="https://i0.wp.com/s1.favim.com/orig/23/animal-aww-awww-cat-cute-Favim.com-215286.jpg"/><br/> */}

        <Link to="/line">Line Chart</Link>
      </li>
      <li>
      {/* <img src="https://i0.wp.com/s1.favim.com/orig/23/animal-aww-awww-cat-cute-Favim.com-215286.jpg"/><br/> */}

        <Link to="/weather">weather</Link>
      </li>
    </ul>
    </div>

  );
}

export default Navbar;
