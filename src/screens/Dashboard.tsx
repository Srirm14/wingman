"use client";
import React, { useEffect, useState } from "react";
import ChartComponent from "./chart";
import PeriodChart from "./periodChart";
import Table from "./DashboardTable";
import Filter from "@components/ui/Filter";
import Loader from "@components/ui/Loader";

// Define types for the fetched data
type CardData = {
  id: number;
  header: string;
  value: string;
  icon: string;
  growth: {
    type: "increase" | "decrease";
    percentage: number;
  };
};

type ChartData = {
  labels: string[];
  datasets: {
    type: string;
    label: string;
    data: number[];
    backgroundColor: string;
    borderColor: string;
    borderWidth: number;
    barThickness: number;
    borderRadius: number;
    order: number;
  }[];
};

type PeriodChartData = {
  labels: string[];
  datasets: {
    label: string;
    data: number[];
    backgroundColor: string;
    borderColor: string;
    borderWidth: number;
    barThickness: number;
    borderRadius: number;
  }[];
};

type TableData = {
  productName: string;
  date: string;
  timeSpent: string;
  orderValue: string;
  commission: string;
};

type DashboardData = {
  cardsData: CardData[];
  chartData: ChartData;
  periodChartData: PeriodChartData;
  tableData: TableData[];
};

const Dashboard = () => {
  const [dashboardData, setDashboardData] = useState<DashboardData | null>(
    null
  );

  useEffect(() => {
    const fetchDashboardData = async () => {
      const response = await fetch("/api/dashboard");
      const data = await response.json();
      setDashboardData(data);
    };

    fetchDashboardData();
  }, []);

  if (!dashboardData)
    return (
      <div>
        <Loader />
      </div>
    );

  const { cardsData, chartData, periodChartData, tableData } = dashboardData;

  return (
    <div className="px-4 sm:px-6 md:px-10 py-8 max-h-[calc(100vh-94px)] overflow-y-auto">
      <div className="w-full mx-auto max-w-full min-h-[519px] py-8 px-[24px] sm:p-6 border-mutedGrey rounded-[20px] shadow-[0px_5px_22px_0px_#0000000A,_0px_0px_0px_1px_#0000000F] gap-6">
        <div className="flex flex-col gap-6">
          <div className="mb-8 px-6">
            <div className="flex justify-between items-center w-full">
              <div className="text-[32px] font-medium">At a glance</div>
              <div className="align-bottom">
                <Filter />
              </div>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-6 py-8 justify-items-center">
              {cardsData.map((card) => (
                <div
                  key={card.id}
                  className="h-[156px] w-full p-6 bg-none border-mutedGrey rounded-[20px] shadow-[0px_5px_22px_0px_#0000000A,_0px_0px_0px_1px_#0000000F] flex justify-center items-center"
                >
                  <div className="flex flex-col items-start w-full gap-2">
                    <span className="flex items-center gap-2">
                      <img
                        src={card.icon}
                        width={12}
                        height={12}
                        alt={`${card.header} Icon`}
                      />
                      <span className="font-semibold text-muted">
                        {card.header}
                      </span>
                    </span>
                    <span className="flex items-center text-[32px] font-medium">
                      {card.value}
                    </span>
                    <span className="flex items-center gap-2">
                      <img
                        src={
                          card.growth.type === "increase"
                            ? "/assets/increase.svg"
                            : "/assets/decrease.svg"
                        }
                        width={24}
                        height={24}
                        alt={
                          card.growth.type === "increase"
                            ? "Positive Growth"
                            : "Negative Growth"
                        }
                      />
                      <span className="flex gap-1 text-sm font-normal">
                        <span
                          className={
                            card.growth.type === "increase"
                              ? "text-success"
                              : "text-error"
                          }
                        >
                          {`${card.growth.percentage}%`}
                        </span>
                        <span className="text-muted">
                          {card.growth.type === "increase"
                            ? "increase"
                            : "decrease"}
                        </span>
                      </span>
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="px-6">
            <div className="text-[32px] font-medium">Insights</div>
            <div className="flex gap-6 mt-6 justify-center py-8">
              <div className="h-[455px] w-3/5 p-6 bg-none border-mutedGrey rounded-[20px] shadow-[0px_5px_22px_0px_#0000000A,_0px_0px_0px_1px_#0000000F] flex flex-col">
                <div className="flex items-center gap-2 mb-4">
                  <img
                    src="/assets/tag.svg"
                    width={12}
                    height={12}
                    alt="Tag Icon"
                  />
                  <span className="font-semibold text-muted">
                    CONSULTATIONS
                  </span>
                </div>
                <div className="flex-grow">
                  <ChartComponent data={chartData} />
                </div>
              </div>

              <div className="h-[455px] w-1/5 p-6 bg-none border-mutedGrey rounded-[20px] shadow-[0px_5px_22px_0px_#0000000A,_0px_0px_0px_1px_#0000000F] flex flex-col">
                <div className="flex items-center gap-2 mb-4">
                  <img
                    src="/assets/graph.svg"
                    width={12}
                    height={12}
                    alt="Tag Icon"
                  />
                  <span className="font-semibold text-muted">
                    VS PAST PERIOD
                  </span>
                </div>
                <PeriodChart data={periodChartData} />
              </div>
              <div
                className="bg-no-repeat bg-center h-[455px] max-lg:w-full w-1/5 border-mutedGrey rounded-[20px] shadow-[0px_5px_22px_0px_#0000000A,_0px_0px_0px_1px_#0000000F] relative overflow-hidden 
             bg-[url('/assets/forecastCardVector.svg')] 2xl:bg-gradient-to-b 2xl:from-[#15B79F] 2xl:to-[#0E9382] "
              >
                <div className="flex flex-col h-full p-6">
                  <div className="flex items-center gap-2 mb-4 z-10">
                    <img
                      src="/assets/tearDropWhite.svg"
                      width={12}
                      height={12}
                      alt="Tag Icon"
                    />
                    <span className="font-semibold text-secondary">
                      FORECASTS
                    </span>
                  </div>
                  <div className="flex flex-col items-start gap-[24px] w-full h-full text-white">
                    <div className="flex w-full justify-between items-start gap-[8px]">
                      <div className="flex text-[56px] font-medium">+15%</div>
                      <div>
                        <img
                          src="/assets/increaseWhite.svg"
                          width={35}
                          height={35}
                          alt="grow"
                        />
                      </div>
                    </div>
                    <div>
                      <p className="text-sm font-normal">
                        forecasted increase in your sales closed by the end of
                        the current month
                      </p>
                    </div>

                    <div className="flex w-full justify-between items-start">
                      <div className="flex text-[56px] font-medium">+15%</div>
                      <div>
                        <img
                          src="/assets/increaseWhite.svg"
                          width={35}
                          height={35}
                          alt="grow"
                        />
                      </div>
                    </div>
                    <div>
                      <p className="text-sm font-normal">
                        forecasted increase in your sales closed by the end of
                        the current month
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="mb-8 px-6">
            <div className="flex justify-between items-center">
              <div className="text-[32px] font-medium">Orders</div>
            </div>
            <div className="overflow-x-auto mt-6 rounded-[8px]">
              <Table data={tableData} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
