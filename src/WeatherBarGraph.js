import React from 'react';
import { Bar } from 'react-chartjs-2';

const WeatherBarGraph = ({ data }) => {
  // Extract the relevant data from the provided data
  const labels = data.list.map((item) => item.dt_txt);
  const temperatures = data.list.map((item) => item.main.temp);

  // Define the data for the bar graph
  const chartData = {
    labels,
    datasets: [
      {
        label: 'Temperature (K)',
        backgroundColor: 'rgba(75, 192, 192, 0.2)',
        borderColor: 'rgba(75, 192, 192, 1)',
        borderWidth: 1,
        hoverBackgroundColor: 'rgba(75, 192, 192, 0.4)',
        hoverBorderColor: 'rgba(75, 192, 192, 1)',
        data: temperatures,
      },
    ],
  };

  // Define options for the bar graph
  const chartOptions = {
    maintainAspectRatio: false,
    scales: {
      yAxes: [
        {
          ticks: {
            beginAtZero: true,
          },
        },
      ],
    },
  };

  return (
    <div>
      <h2>Weather Data Bar Graph</h2>
      <Bar data={chartData} options={chartOptions} />
    </div>
  );
};

export default WeatherBarGraph;
