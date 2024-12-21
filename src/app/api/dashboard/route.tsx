import { DashboardData } from '../../../types/dashboardTypes';
import { NextResponse } from 'next/server';

export async function GET() {
  const data: DashboardData = {
    cardsData: [
      {
        id: 1,
        header: 'CONSULTATIONS',
        value: 24,
        growth: { type: 'increase', percentage: 15 },
        icon: '/assets/tearDrop.svg',
      },
      {
        id: 2,
        header: 'ORDERS PLACED',
        value: 30,
        growth: { type: 'decrease', percentage: 5 },
        icon: '/assets/orderTag.svg',
      },
      {
        id: 3,
        header: 'CONVERSION',
        value: '50%',
        growth: { type: 'increase', percentage: 20 },
        icon: '/assets/conversion.svg',
      },
      {
        id: 4,
        header: 'TOTAL SALES VALUE',
        value: '$2,400',
        growth: { type: 'increase', percentage: 10 },
        icon: '/assets/coins.svg',
      },
      {
        id: 5,
        header: 'AVG ORDER VALUE',
        value: '$340',
        growth: { type: 'decrease', percentage: 2 },
        icon: '/assets/coin.svg',
      },
      {
        id: 6,
        header: 'COMMISSION PAID',
        value: '$240',
        growth: { type: 'increase', percentage: 3 },
        icon: '/assets/commission.svg',
      },
    ],
    chartData: {
      labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
      datasets: [
        {
          type: 'bar',
          label: 'Experts online',
          data: [35, 20, 50, 40, 55, 30, 50],
          backgroundColor: '#FFF3C6',
          borderColor: '#FFF3C6',
          borderWidth: 1,
          barThickness: 32,
          borderRadius: 6,
          order: 2,
        },
        {
          type: 'line',
          label: 'Answered',
          data: [10, 25, 22, 18, 24, 30, 23],
          borderColor: 'green',
          backgroundColor: 'rgba(0, 255, 0, 0.3)',
          fill: false,
          borderWidth: 2,
          tension: 0.5,
          borderDash: [50, 0],
          order: 1,
          // Added properties to match bar chart style
          barThickness: 32,
          borderRadius: 6,
        },
        {
          type: 'line',
          label: 'Incoming',
          data: [30, 35, 36, 35, 45, 32, 45],
          borderColor: '#8A94A6',
          backgroundColor: '#8A94A6',
          fill: false,
          borderWidth: 1,
          tension: 0.5,
          borderDash: [10, 5],
          order: 1,
          // Added properties to match bar chart style
          barThickness: 32,
          borderRadius: 6,
        },
      ],
    },
    periodChartData: {
      labels: ['This Week', 'Last Week'],
      datasets: [
        {
          label: 'Consultations',
          data: [30, 25],
          backgroundColor: '#CCFBEF',
          borderColor: '#CCFBEF',
          borderWidth: 1,
          barThickness: 32,
          borderRadius: 6,
        },
        {
          label: 'Orders Closed',
          data: [20, 15],
          backgroundColor: '#134E48',
          borderColor: '#134E48',
          borderWidth: 1,
          barThickness: 32,
          borderRadius: 6,
        },
      ],
    },
    tableData: [
      {
        productName: 'Product Name 1',
        date: '24 Apr ‘2024, 10:24 AM',
        timeSpent: '2h 5m',
        orderValue: '$320.23',
        commission: '$31',
      },
      {
        productName: 'Product Name 2',
        date: '24 Apr ‘2024, 11:00 AM',
        timeSpent: '3h 10m',
        orderValue: '$410.50',
        commission: '$42',
      },
      {
        productName: 'Product Name 3',
        date: '24 Apr ‘2024, 1:30 PM',
        timeSpent: '1h 45m',
        orderValue: '$250.00',
        commission: '$20',
      },
      {
        productName: 'Product Name 4',
        date: '24 Apr ‘2024, 3:00 PM',
        timeSpent: '4h 20m',
        orderValue: '$560.75',
        commission: '$60',
      },
      {
        productName: 'Product Name 5',
        date: '25 Apr ‘2024, 9:00 AM',
        timeSpent: '5h 15m',
        orderValue: '$300.00',
        commission: '$35',
      },
      {
        productName: 'Product Name 6',
        date: '25 Apr ‘2024, 10:45 AM',
        timeSpent: '2h 30m',
        orderValue: '$400.50',
        commission: '$50',
      },
    ],
  };

  return NextResponse.json(data);
}
