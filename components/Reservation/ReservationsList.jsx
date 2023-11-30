"use client";
import React from "react";
import ReservationCard from "./ReservationCard";
import HeaderText from "../Shared/HeaderText";
import { useRecoilValue } from "recoil";
import { reservationsListState } from "@/store";
import Link from "next/link";

const ReservationsList = () => {
  const reservationsList = useRecoilValue(reservationsListState);
  console.log(reservationsList);
  if (reservationsList.length > 0) {
    return (
      <>
        <HeaderText text={"Your Reservations"} />
        <ul className="w-full flex gap-2 md:gap-4 flex-col md:flex-row flex-wrap">
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
    return (
      <>
        <div className="flex flex-col w-full justify-center items-center">
          <HeaderText text={"You don't have any reservation 😕"} />

          <Link
            href={"/dinein"}
            className="underline text-background-blue underline-offset-4"
          >
            <HeaderText text={"Let's Reserve a table 😋🍕"} />
          </Link>
        </div>
      </>
    );
  }
};

export default ReservationsList;
