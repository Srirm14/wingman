"use client";

import Table from "@components/ui/Table";
import React, { useEffect, useState } from "react";

// Define the type for the table data
type TableData = {
  productName: string;
  date: string;
  timeSpent: string;
  orderValue: string;
  commission: string;
};

const DashboardTable = () => {
  const [tableData, setTableData] = useState<TableData[]>([]); // State to hold table data
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 3;

  // Fetch the table data from the API
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('/api/dashboard'); // Assuming your API is at this endpoint
        const data = await response.json();
        setTableData(data.tableData); // Set the data to state
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []); // Empty dependency array ensures this runs only once when the component mounts

  return (
    <Table
      data={tableData}
      currentPage={currentPage}
      itemsPerPage={itemsPerPage}
      onPageChange={(page) => setCurrentPage(page)}
    />
  );
};

export default DashboardTable;
