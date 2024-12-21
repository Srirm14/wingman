import Image from "next/image";
import React from "react";

const Header = () => {
  return (
    <header className="flex justify-start items-center gap-3 px-[40px] py-[24px] h-[94px] border-b border-mutedGrey ">
      {/* Chart Icon */}
      <span className="bg-secondary flex items-center justify-center rounded-[1200px] p-[12px] h-[46px] ">
        <span className="flex items-center w-full gap-3  cursor-pointer">
          <Image
            src="/assets/chart.svg"
            width={20}
            height={20}
            alt="Chart Icon"
          />
          <span className="text-dark text-[18px] font-medium">Summary</span>
        </span>
      </span>

      <span className="hover:bg-gray-200  flex items-center justify-center rounded-[1200px] p-[12px] h-[46px] ">
        <span className="flex items-center w-full gap-3  cursor-pointer">
          <Image src="/assets/tag.svg" width={20} height={20} alt="Tag Icon" />
          <span className="text-grey text-[18px] font-medium">Sales</span>
        </span>
      </span>

      <span className="hover:bg-gray-200  flex items-center justify-center rounded-[1200px] p-[12px] h-[46px] ">
        <span className="flex items-center w-full gap-3  cursor-pointer ">
          <Image
            src="/assets/chatH.svg"
            width={20}
            height={20}
            alt="Chats Icon"
          />
          <span className="text-grey text-[18px] font-medium">Chats</span>
        </span>
      </span>
    </header>
  );
};

export default Header;
