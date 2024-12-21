'use client';

import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  LineElement,
  ChartData,
  ChartOptions,
  LineController,
  PointElement,
} from 'chart.js';
import { Chart } from 'react-chartjs-2';

// Register the necessary components for Chart.js
ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  PointElement,
  LineElement,
  LineController,
  Title,
  Tooltip,
  Legend
);

const ChartComponent: React.FC<{ data:any}> = ({ data }) => {
  const options: ChartOptions<'bar' | 'line'> = {
    responsive: true,
    maintainAspectRatio: false,
    scales: {
      y: {
        beginAtZero: false,
        min: 10,
        title: {
          display: true,
          text: 'CONSULTATIONS',
        },
        grid: {
          display: true,
          color: '#D3D3D3', 
          lineWidth: 1,
        },
        border: {
          dash: [6, 8],
          width: 0, 
        },
      },
      x: {
        display: true,
        grid: {
          display: false, 
        },
        border: {
          width: 0, 
        },
      },
      right: {
        position: 'right',
        title: {
          display: true,
          text: 'EXPERTS ONLINE',
        },
        grid: {
          display: false, 
        },
        border: {
          width: 0, 
        },
      },
    },
    plugins: {
      legend: {
        display: true,
        position: 'bottom',
        align: 'start',
      },
    },
  };

  return (
    <div className="h-full w-full">
      <Chart type="bar" data={data} options={options} />
    </div>
  );
};

export default ChartComponent;
