// cardData.js

export const cardsData = [
    {
      id: 1,
      header: "CONSULTATIONS",
      value: 24,
      growth: {
        type: "increase", // "increase" or "decrease"
        percentage: 15,
      },
      icon: "/assets/tearDrop.svg",
    },
    {
      id: 2,
      header: "ORDERS PLACED",
      value: 30,
      growth: {
        type: "decrease",
        percentage: 5,
      },
      icon: "/assets/orderTag.svg",
    },
    {
      id: 3,
      header: "CONVERSION",
      value: "50%",
      growth: {
        type: "increase",
        percentage: 20,
      },
      icon: "/assets/conversion.svg",
    },
    {
      id: 4,
      header: "TOTAL SALES VALUE",
      value: "$2,400",
      growth: {
        type: "increase",
        percentage: 10,
      },
      icon: "/assets/coins.svg",
    },
    {
      id: 5,
      header: "AVG ORDER VALUE",
      value: "$340",
      growth: {
        type: "decrease",
        percentage: 2,
      },
      icon: "/assets/coin.svg",
    },
    {
      id: 6,
      header: "COMMISSION PAID",
      value: "$240",
      growth: {
        type: "increase",
        percentage: 3,
      },
      icon: "/assets/commission.svg",
    },
  ];
  