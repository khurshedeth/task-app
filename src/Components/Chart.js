import React, { useRef, useEffect } from 'react';
import Chart from 'chart.js/auto';

const MedalsChart = ({ data }) => {
  const chartRef = useRef(null);
  const chartInstance = useRef(null);


  const years = data.map((item) => item.Year);
  const medals = data.map((item) => item.Medals);

  useEffect(() => {
    if (chartRef.current) {
      if (chartInstance.current) {
      
        chartInstance.current.destroy();
      }
      
      const ctx = chartRef.current.getContext('2d');
      chartInstance.current = new Chart(ctx, {
        type: 'line',
        data: {
          labels: years,
          datasets: [
            {
              label: 'Medals',
              data: medals,
              fill: false,
              backgroundColor: 'rgba(75, 192, 192, 0.4)',
              borderColor: 'rgba(75, 192, 192, 1)',
            },
          ],
        },
      });
    }
  }, [years, medals]);

  return <canvas ref={chartRef} style={{ height: '300px', width: '500px' }} />;
};

export default MedalsChart;
