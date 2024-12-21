// PeriodChart.tsx
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend,
    ChartData,
    ChartOptions,
  } from 'chart.js';
  import { Chart } from 'react-chartjs-2';
  
  ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
  );
  
  // Define props for PeriodChart
  interface PeriodChartProps {
    data: ChartData<'bar'>;
  }
  
  const PeriodChart: React.FC<PeriodChartProps> = ({ data }) => {
    const options: ChartOptions<'bar'> = {
      responsive: true,
      maintainAspectRatio: false,
      scales: {
        y: {
          beginAtZero: true,
          max: 40,
          min: 10,
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
        },
      },
      plugins: {
        legend: {
          display: true,
          position: 'bottom',
        },
      },
    };
  
    return (
      <div className="h-full w-full">
        <Chart type="bar" data={data} options={options} />
      </div>
    );
  };
  
  export default PeriodChart;
  