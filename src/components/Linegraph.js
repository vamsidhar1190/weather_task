

import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Line } from 'react-chartjs-2';

function LineChart() {
  const [data, setData] = useState([]);
  const [showChart, setShowChart] = useState(false);
  const [chartInstance, setChartInstance] = useState(null);
  const [label, setlabel] = useState(null)
  const [Dates, setDates] = useState(null)

  useEffect(() => {
    if (chartInstance) {
      chartInstance.destroy();
    }
  }, [showChart]);

  const fetchData = async (value) => {
    try {
      const response = await axios.get(
        'https://pro.openweathermap.org/data/2.5/forecast/hourly?lat=44.34&lon=10.99&appid=b1b15e88fa797225412429c1c50c122a1'
      );
      let data = response.data.list 
      const temperatures  = data.map((item) => item.main.temp);
      const humidity = data.map((item)=>item.main.humidity)
      const Dates=data.map((item)=>item.dt_txt)
      if(value==="temperature"){
        setData(temperatures)
        setlabel("temperature")
        setDates(Dates)
      }
      else{
        setData(humidity)
        setlabel("humidity")
        setDates(Dates)
      }
      setShowChart(true);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  const createChartData = () => {
    if (data.length === 0) {
      return {}; 
    }

    

    const chartData = {
      labels: Dates.map((item) => {
       
       return item
      }),
    // Use timestamp as labels
      datasets: [
        {
          label: label, 
          data: data,
          fill: false,
          borderColor: 'rgba(75, 192, 192, 0.7)',
          borderWidth: 2,
        },
      ],
    };

    return chartData;
  };

  return (
    <div className="App App-content">
      <h1>Temperature Line Chart</h1>
      <div className="buttoncntainer">
      <button onClick={()=>fetchData("temperature")}>Fetch Temperature Data</button>
      <button onClick={()=>fetchData("Humidity")}>Fetch Humidity Data</button>
      </div>

      {showChart && (
        <div className="chart-container">
          <Line
            data={createChartData()}
            options={{ maintainAspectRatio: false }}
            ref={(ref) => setChartInstance(ref)}
          />
        </div>
      )}
    </div>
  );
}

export default LineChart;

