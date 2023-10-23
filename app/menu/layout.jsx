import MenuNavBar from "@/components/NavBar/MenuNavBar";
import React from "react";

export const metadata = {
  title: "Menu",
  description: "the party can't start without pizza",
  icons: "/assets/images/logo.png",
};

const MenuLayout = ({ children }) => {
  return (
    <div>
      <MenuNavBar />
      {children}
    </div>
  );
};

export default MenuLayout;
