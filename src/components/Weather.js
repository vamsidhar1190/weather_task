

import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Pie } from 'react-chartjs-2';

function Weather() {
  const [data, setData] = useState([]);
  const [showChart, setShowChart] = useState(false);
  const [chartInstance, setChartInstance] = useState(null);

  useEffect(() => {
    if (chartInstance) {
      chartInstance.destroy();
    }
  }, [showChart]);

  const fetchData = async () => {
    try {
      const response = await axios.get(
        'https://pro.openweathermap.org/data/2.5/forecast/hourly?lat=44.34&lon=10.99&appid=b1b15e88fa797225412429c1c50c122a1'
      );
      let humidityData = response.data.list.map((item) => item.main.humidity);
      setData(humidityData);
      setShowChart(true);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  const createChartData = () => {
    if (data.length === 0) {
      return {}; // Return an empty object if data is not available yet
    }

    const humidityLevels = {
      '0-20%': 0,
      '21-40%': 0,
      '41-60%': 0,
      '61-80%': 0,
      '81-100%': 0,
    };

    data.forEach((humidity) => {
      if (humidity <= 20) {
        humidityLevels['0-20%']++;
      } else if (humidity <= 40) {
        humidityLevels['21-40%']++;
      } else if (humidity <= 60) {
        humidityLevels['41-60%']++;
      } else if (humidity <= 80) {
        humidityLevels['61-80%']++;
      } else {
        humidityLevels['81-100%']++;
      }
    });

    const chartData = {
      labels: Object.keys(humidityLevels),
      datasets: [
        {
          data: Object.values(humidityLevels),
          backgroundColor: [
            'rgba(255, 99, 132, 0.7)',
            'rgba(54, 162, 235, 0.7)',
            'rgba(255, 206, 86, 0.7)',
            'rgba(75, 192, 192, 0.7)',
            'rgba(153, 102, 255, 0.7)',
          ],
        },
      ],
    };

    return chartData;
  };

  return (
    <div className="App App-content">
      <h1>Humidity Pie Chart</h1>

      <div className="buttoncntainer-sec">
      <button  onClick={fetchData}>Fetch Humidity Data</button>

      </div>

      {showChart && (
        <div className="chart-container">
          <Pie
            data={createChartData()}
            options={{ maintainAspectRatio: false }}
            ref={(ref) => setChartInstance(ref)}
          />
        </div>
      )}
    </div>
  );
}

export default Weather;

