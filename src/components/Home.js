import React from 'react';
import { Link } from 'react-router-dom';
// import '../../../chart-demo/src/';

const Home = () => {
  return (
    <div className='img-container' >
      <h1 > Weather Report</h1>
      <ul>
        <li>
          <img
            src="https://media.istockphoto.com/id/824845572/photo/thermometer-sun-high-degres-hot-summer-day-high-summer-temperatures.jpg?s=612x612&w=0&k=20&c=MyYLgJ9NKAGMGh69lTW1r03_f91pozcmrZyPo9Oqcu8="
            alt="Cute Cat"
          />
          <Link to="/line">Line Chart</Link>
        </li>
        <li>
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRt3XNC4bqVnnBlEeJFeSq_fVqT4Rr6YIBAcw&usqp=CAU"
            alt="Cute Cat"
          />
          <Link to="/weather">Weather</Link>
        </li>
      </ul>
    </div>
  );
};

export default Home;
