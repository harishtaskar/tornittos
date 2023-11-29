"use client";
import React from "react";
import ReservationCard from "./ReservationCard";
import HeaderText from "../Shared/HeaderText";
import { useRecoilValue } from "recoil";
import { reservationsListState } from "@/store";

const ReservationsList = () => {
  const reservationsList = useRecoilValue(reservationsListState);
  console.log(reservationsList);
  if (reservationsList.length > 0) {
    return (
      <>
        <HeaderText text={"Your Reservations"} />
        <ul className="w-full flex gap-2 md:gap-6 flex-col md:flex-row">
          {reservationsList?.map((item, index) => {
            return (
              <li key={index}>
                <ReservationCard item={item} />
              </li>
            );
          })}
        </ul>
      </>
    );
  } else {
    return <HeaderText text={"No Reservations"} />;
  }
};

export default ReservationsList;
