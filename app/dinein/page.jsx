import DineInForm from "@/components/Forms/DineInForm";
import HeaderText from "@/components/Shared/HeaderText";
import React from "react";

const DineIn = () => {
  return (
    <div className="flex items-center justify-center">
      <div className="mainContent px-4 py-15 sm:px-0 md:px-0 lg:px-0 xl:px-0">
        <div className="flex flex-col text-center justify-center items-center w-full py-4 mt-24">
          <HeaderText text={"Dine in Reservation"} />
          <DineInForm />
        </div>
      </div>
    </div>
  );
};

export default DineIn;
