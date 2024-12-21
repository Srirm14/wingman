"use client";

import React from "react";

type TableProps = {
  data: Array<{
    productName: string;
    date: string;
    timeSpent: string;
    orderValue: string;
    commission: string;
  }>;
  currentPage: number;
  itemsPerPage: number;
  onPageChange: (page: number) => void;
};

const Table: React.FC<TableProps> = ({
  data,
  currentPage,
  itemsPerPage,
  onPageChange,
}) => {
  // Calculate total pages
  const totalPages = Math.ceil(data.length / itemsPerPage);

  // Get current page data
  const currentData = data.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  return (
    <div className="overflow-x-auto mt-6 rounded-[8px]">
      <table className="min-w-full border border-mutedGrey rounded-[8px]">
        <thead className="border-b-[1px] border-mutedGrey rounded-t-[12px]">
          <tr className="bg-offWhite text-muted rounded-xl">
            <th className="py-4 px-6 text-left">Product</th>
            <th className="py-4 px-6 text-left">Date</th>
            <th className="py-4 px-6 text-left">Time Spent</th>
            <th className="py-4 px-6 text-left">Order Value</th>
            <th className="py-4 px-6 text-left">Commission</th>
            <th className="py-4 px-6"></th>
          </tr>
        </thead>
        <tbody>
          {currentData.map((row, index) => (
            <tr key={index} className="hover:bg-gray-100">
              <td className="py-4 px-6 text-dark">{row.productName}</td>
              <td className="py-4 px-6 text-dark">{row.date}</td>
              <td className="py-4 px-6 text-dark">{row.timeSpent}</td>
              <td className="py-4 px-6 text-dark">{row.orderValue}</td>
              <td className="py-4 px-6 text-dark font-bold">
                {row.commission}
              </td>
              <td className="py-4 px-6">
                <div className="flex items-center gap-[12px]">
                  <span className="text-[#8A94A6] text-xs font-normal cursor-pointer">
                    View Chat
                  </span>
                  <span>
                    <img
                      src="/assets/arrowUp.svg"
                      width={18}
                      height={18}
                      alt="grow"
                    />
                  </span>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* Pagination Controls */}
      <div className="flex justify-center items-center mt-4">
        <button
          onClick={() => onPageChange(currentPage - 1)}
          disabled={currentPage === 1}
          className="px-4 py-2 mx-2 border rounded-md bg-gray-200 hover:bg-gray-300 disabled:opacity-50"
        >
          Previous
        </button>
        {Array.from({ length: totalPages }, (_, index) => (
          <button
            key={index}
            onClick={() => onPageChange(index + 1)}
            className={`px-4 py-2 mx-2 border rounded-md ${
              currentPage === index + 1
                ? "bg-primary text-white"
                : "bg-gray-200 hover:bg-gray-300"
            }`}
          >
            {index + 1}
          </button>
        ))}
        <button
          onClick={() => onPageChange(currentPage + 1)}
          disabled={currentPage === totalPages}
          className="px-4 py-2 mx-2 border rounded-md bg-gray-200 hover:bg-gray-300 disabled:opacity-50"
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default Table;
