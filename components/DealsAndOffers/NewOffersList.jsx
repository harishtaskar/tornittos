"use client";
import React from "react";
import OfferCard from "./OfferCard";
import HeaderText from "../HeaderText";

const NewOffersList = () => {
  return (
    <div className="flex items-center justify-center bg-white mt-10">
      <div className="mainContent pl-5 sm:pl-0 md:pl-0 lg:pl-0 xl:pl-0">
        <HeaderText text="Deals and Offers" />
        <div className="carousel w-full gap-5">
          <div id="item1" className="carousel-item ">
            <OfferCard name={"first"} />
          </div>
          <div id="item2" className="carousel-item">
            <OfferCard name={"Second"} />
          </div>
          <div id="item3" className="carousel-item">
            <OfferCard name={"Third"} />
          </div>
          <div id="item4" className="carousel-item">
            <OfferCard name={"Forth"} />
          </div>
          <div id="item4" className="carousel-item">
            <OfferCard name={"Forth"} />
          </div>
          <div id="item4" className="carousel-item">
            <OfferCard name={"Forth"} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewOffersList;
