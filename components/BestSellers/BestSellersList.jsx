"use client";
import React, { useEffect } from "react";
import BestSellerCard from "./BestSellerCard";
import HeaderText from "../HeaderText";

const BestSellersList = () => {
  // useEffect(() => {
  //   const scrollInterval = setInterval(() => {
  //     window.scrollBy({
  //       left: 400, // You can adjust the scroll distance as needed
  //       behavior: "smooth",
  //     });
  //   }, 2000); // Scroll every 2 seconds (2000 milliseconds)

  //   return () => clearInterval(scrollInterval); // Clean up the interval on component unmount
  // }, []);

  return (
    <div className="flex-col items-center justify-center w-[100vw] bg-slate-300 py-10 my-10">
      <div className="flex items-center justify-center">
        <div className="mainContent pl-5">
          <HeaderText text="Best Sellers" />
          <div className="carousel w-full gap-5">
            <div id="item1" className="carousel-item">
              <BestSellerCard
                title={"Double Cheez"}
                subtitle={
                  "Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi."
                }
              />
            </div>
            <div id="item2" className="carousel-item">
              <BestSellerCard
                title={"Second"}
                subtitle={
                  "Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi."
                }
              />
            </div>
            <div id="item3" className="carousel-item">
              <BestSellerCard
                title={"Third"}
                subtitle={
                  "Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi."
                }
              />
            </div>
            <div id="item4" className="carousel-item">
              <BestSellerCard
                title={"Forth"}
                subtitle={
                  "Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi."
                }
              />
            </div>
            <div id="item4" className="carousel-item">
              <BestSellerCard
                title={"Forth"}
                subtitle={
                  "Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi."
                }
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BestSellersList;
