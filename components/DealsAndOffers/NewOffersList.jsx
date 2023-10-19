"use client";
import React from "react";
import OfferCard from "./OfferCard";
import HeaderText from "../HeaderText";

const NewOffersList = () => {
  return (
    <div className="flex items-center justify-center bg-white mt-10">
      <div className="mainContent pl-5 sm:pl-0 md:pl-0 lg:pl-0 xl:pl-0">
        <HeaderText text="Deals and Offers" />
        <div className="carousel w-full">
          <div id="item1" className="carousel-item mr-5">
            <OfferCard name={"Every Mondays and Saturdays"} offer={"50% OFF"} />
          </div>
          <div id="item2" className="carousel-item mr-5">
            <OfferCard name={"Dine in"} offer={"20% OFF"} />
          </div>
          <div id="item3" className="carousel-item mr-5">
            <OfferCard name={"Navratri Offer"} offer={"30% OFF"} />
          </div>
          <div id="item4" className="carousel-item mr-5">
            <OfferCard name={"Every First Friday of Month"} offer={"20% OFF"} />
          </div>
          <div id="item4" className="carousel-item mr-5">
            <OfferCard name={"On Weekends"} offer={"10% OFF"} />
          </div>
          <div id="item4" className="carousel-item mr-5">
            <OfferCard
              name={"On Parties and Get to Gethers"}
              offer={"25% OFF"}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewOffersList;
