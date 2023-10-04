import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Bar } from 'react-chartjs-2';
import { Chart } from 'chart.js/auto';
function BarChart() {
  const [data, setData] = useState([]);
  const [showChart, setShowChart] = useState(true);
  const [chartInstance, setChartInstance] = useState(null);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await axios.get(
        'https://pro.openweathermap.org/data/2.5/forecast/hourly?lat=44.34&lon=10.99&appid=b1b15e88fa797225412429c1c50c122a1'
      );
      setData(response.data.list);
      setShowChart(true);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  const createChartData = () => {
    if (data.length === 0) {
      return {}; // Return an empty object if data is not available yet
    }

    // Extract relevant data from the API response
    const labels = data.map((item) => item.dt_txt);
    const temperatures = data.map((item) => item.main.temp);
    const humidity = data.map((item)=> item.main.humidity) 

    const chartData = {
      labels: labels,
      datasets: [
        {
          label: 'Temperature (°K)',
          data: temperatures,
          backgroundColor: 'blue', // You can change the bar color here
        },
      ],
    };

    return chartData;
  };

  useEffect(() => {
    if (chartInstance) {
      chartInstance.destroy(); // Destroy the existing chart instance
    }

    // Create a new chart instance
    const newChartInstance = new Chart(document.getElementById('myChart'), {
      type: 'bar',
      data: createChartData(),
      options: {
        plugins: {
          legend: {
            display: true,
            position: 'top',
          },
        },
        scales: {
          x: {
            type: 'time', // Use 'time' scale type for dates
            title: {
              display: true,
              text: 'Hours',
            },
          },
          y: {
            title: {
              display: true,
              text: 'Temperature (°K)',
            },
          },
        },
      },
    });

    setChartInstance(newChartInstance);
  }, [data]);

  return (
    <div className="App">
      <h1>Temperature Bar Chart</h1>
      {showChart && (
        <div className="chart-container">
          <canvas id="myChart" width="400" height="200"></canvas>
        </div>
      )}
    </div>
  );
}

export default BarChart;






