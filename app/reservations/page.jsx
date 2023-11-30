import ReservationsList from "@/components/Reservation/ReservationsList";
import React from "react";

const Reservations = () => {
  return (
    <div className="flex items-center justify-center">
      <div className="mainContent px-4 py-15 sm:px-0 md:px-0 lg:px-0 xl:px-0">
        <div className="flex flex-col text-center justify-start items-center md:items-start w-full mt-20 py-4 min-h-[100vh]">
          <ReservationsList />
        </div>
      </div>
    </div>
  );
};

export default Reservations;
