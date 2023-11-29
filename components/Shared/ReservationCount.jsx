"use client";
import { reservationsListState } from "@/store";
import React from "react";
import { useRecoilValue } from "recoil";

const ReservationCount = () => {
  const reservations = useRecoilValue(reservationsListState);
  if (reservations.length > 0) {
    return (
      <div
        className="badge badge-primary border-none bg-red-600 text-xs text-white 
     badge-xs"
      >
        {reservations.length.toString()}
      </div>
    );
  }
};

export default ReservationCount;
