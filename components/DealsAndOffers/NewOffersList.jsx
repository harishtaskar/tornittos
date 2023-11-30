"use client";
import React, { useRef } from "react";
import OfferCard from "./OfferCard";
import HeaderText from "../Shared/HeaderText";

const Offers = [
  {
    name: "Every Mondays and Saturdays",
    offer: "50% OFF",
    image: "/assets/pizza1.png",
  },
  { name: "Dine in", offer: "20% OFF", image: "/assets/pizza2.png" },
  { name: "Navratri Offer", offer: "30% OFF", image: "/assets/pizza3.png" },
  {
    name: "Every First Friday of Month",
    offer: "20% OFF",
    image: "/assets/pizza4.png",
  },
  { name: "On Weekends", offer: "30% OFF", image: "/assets/pizza1.png" },
  {
    name: "On Parties and Get to Gethers",
    offer: "45% OFF",
    image: "/assets/pizza2.png",
  },
];

const NewOffersList = () => {
  return (
    <div className="flex items-center justify-center bg-white mt-5">
      <div className="mainContent pl-5 sm:pl-0 md:pl-0 lg:pl-0 xl:pl-0">
        <HeaderText text="Deals and Offers" />
        <div className="carousel w-full relative">
          {Offers.map((item, index) => {
            return (
              <div id="item1" className="carousel-item mr-4" key={index}>
                <OfferCard
                  name={item.name}
                  offer={item.offer}
                  image={item.image}
                />
              </div>
            );
          })}
          <btn className="hidden md:grid absolute btn btn-circle bg-opacity-20 hover:bg-opacity-50 left-0 top-[35%] z-10">
            ❮
          </btn>
          <btn className="hidden md:grid absolute btn btn-circle bg-opacity-20 hover:bg-opacity-50 right-0 top-[35%] z-10">
            ❯
          </btn>
        </div>
      </div>
    </div>
  );
};

export default NewOffersList;
