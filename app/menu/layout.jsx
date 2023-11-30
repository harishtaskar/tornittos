import MenuNavBar from "@/components/NavBar/MenuNavBar";
import React from "react";

export const metadata = {
  title: "Menu",
  description: "the party can't start without pizza",
  icons: "/assets/images/logo.png",
};

const MenuLayout = ({ children }) => {
  return (
    <div className="flex items-center justify-center">
      <div className="mainContent px-4 py-15 sm:px-0 md:px-0 lg:px-0 xl:px-0">
        <div className="flex flex-col text-center justify-start items-center md:items-start w-full mt-16 py-4 min-h-[100vh]">
          {children}
        </div>
      </div>
    </div>
  );
};

export default MenuLayout;
