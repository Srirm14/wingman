"use client";

import Image from "next/image";
import React from "react";
import Link from "next/link"; // Import Link for navigation
import { useNavStore } from "@stores/navStore";
// Import the Zustand store

const Sidebar = () => {
  // Get the selected state and the setSelected action from the Zustand store
  const { selected, setSelected } = useNavStore();

  return (
    <aside className="bg-primary max-h-full w-[60px] flex flex-col justify-between items-center px-4 py-6 border-r border-mutedGrey">
      {/* Logo Section */}
      <div>
        <div className="flex justify-center mb-8">
          <Image
            src="/assets/logo.svg"
            width={33.2}
            height={33.2}
            alt="Wingman Logo"
          />
        </div>
        <div className="flex h-[1px] w-7 bg-accent mb-6" />

        <div className="flex flex-col items-center gap-[22px] h-fit w-9">
          {/* Home Icon */}
          <Link
            href="/"
            className={`flex flex-col cursor-pointer items-center justify-center w-9 h-9 p-2 gap-[22px] transition-all duration-200 ease-in-out ${
              selected === "home" ? "bg-white rounded-[8px]" : ""
            }`}
            onClick={() => setSelected("home")}
          >
            <div className="w-5 h-5 flex items-center justify-center">
              <Image
                src={
                  selected === "home"
                    ? "/assets/house.svg"
                    : "/assets/houseDefault.svg"
                } // Change the icon based on the selection
                width={20}
                height={20}
                alt="Home"
              />
            </div>
          </Link>

          {/* Chat Icon */}
          <Link
            href="/chat"
            className={`flex flex-col items-center justify-center w-9 h-9 gap-[22px] p-2 transition-all duration-200 ease-in-out hover:bg-green-950 rounded-[8px] cursor-pointer ${
              selected === "chat" ? "bg-white rounded-[8px]" : ""
            }`}
            onClick={() => setSelected("chat")}
          >
            <div className="w-5 h-5 flex items-center justify-center">
              <Image
                src={
                  selected === "chat"
                    ? "/assets/chatSelected.svg"
                    : "/assets/chat.svg"
                } // Change the icon based on the selection
                width={20}
                height={20}
                alt="Chat"
              />
            </div>
          </Link>

          {/* Dashboard Icon */}
          <Link
            href="/dashboard"
            className={`flex flex-col items-center justify-center w-9 h-9 gap-[22px] p-2 transition-all duration-200 ease-in-out ${
              selected === "dashboard" ? "bg-white rounded-[8px]" : ""
            }`}
            onClick={() => setSelected("dashboard")}
          >
            <div className="w-5 h-5 flex items-center justify-center">
              <Image
                src="/assets/users.svg"
                width={20}
                height={20}
                alt="Users"
              />
            </div>
          </Link>
        </div>
      </div>

      {/* Last Section - Align it at the bottom */}
      <div className="flex items-center justify-center w-9 h-9 gap-[22px] p-2 transition-all duration-200 ease-in-out hover:bg-green-950 rounded-[8px] mb-6">
        <div className="w-5 h-5 flex items-center justify-center cursor-pointer">
          <Image
            src="/assets/settings.svg"
            width={20}
            height={20}
            alt="Settings"
          />
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;
