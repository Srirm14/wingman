// types.tsx

// Define the type for the individual card
export type CardData = {
    id: number;
    header: string;
    value: string | number;
    growth: {
      type: 'increase' | 'decrease';
      percentage: number;
    };
    icon: string;
  };

// Define the type for the chart data
export type ChartDataset = {
  type: 'bar' | 'line';
  label: string;
  data: number[];
  fill?: boolean;
  backgroundColor: string;
  borderColor: string;
  borderWidth: number;
  barThickness: number;
  borderRadius: number;
  order: number;
  tension?: number;
  borderDash?: [number, number];
};

export type ChartData = {
  labels: string[];
  datasets: ChartDataset[];
};

// Define the type for the period chart data
export type PeriodChartDataset = {
  label: string;
  data: number[];
  backgroundColor: string;
  borderColor: string;
  borderWidth: number;
  barThickness: number;
  borderRadius: number;
};

export type PeriodChartData = {
  labels: string[];
  datasets: PeriodChartDataset[];
};

// Define the type for the table data
export type TableData = {
  productName: string;
  date: string;
  timeSpent: string;
  orderValue: string;
  commission: string;
};

export type DashboardData = {
  cardsData: CardData[];
  chartData: ChartData;
  periodChartData: PeriodChartData;
  tableData: TableData[];
};
