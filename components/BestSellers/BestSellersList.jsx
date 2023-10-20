"use client";
import React, { useRef } from "react";
import BestSellerCard from "./BestSellerCard";
import HeaderText from "../Shared/HeaderText";
import InfiniteScroll from "react-infinite-scroller";

const BestSeller = [
  {
    title: "Double Cheez",
    subtitle:
      "Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi.",
  },
  {
    title: "Double Secound",
    subtitle:
      "Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi.",
  },
  {
    title: "Third Cheez",
    subtitle:
      "Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi.",
  },
  {
    title: "Forth Cheez",
    subtitle:
      "Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi.",
  },
  {
    title: "Sixth Cheez",
    subtitle:
      "Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi.",
  },
  {
    title: "This five Cheez",
    subtitle:
      "Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi.",
  },
  {
    title: "Seven Cheez",
    subtitle:
      "Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi.",
  },
];

const BestSellersList = () => {
  const scrollContainerRef = useRef(null);

  const container = scrollContainerRef.current;
  if (container) {
    if (container.scrollLeft + container.offsetWidth >= container.scrollWidth) {
      container.scrollLeft = 0;
    } else {
      container.scrollLeft += 1;
    }
  }

  return (
    <div className="flex-col items-center justify-center w-full bg-slate-100 py-5 mt-5">
      <div className="flex items-center justify-center">
        <div className="mainContent pl-5 sm:pl-0 md:pl-0 lg:pl-0 xl:pl-0">
          <HeaderText text="Best Sellers" />
          <div className="carousel w-full" ref={scrollContainerRef}>
            {BestSeller.map((item, index) => {
              return (
                <div id="item1" className="carousel-item mr-5" key={index}>
                  <BestSellerCard title={item.title} subtitle={item.subtitle} />
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default BestSellersList;
