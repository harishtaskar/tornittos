"use client";
import React, { useRef } from "react";

const Images = [
  "pizza1.jpg",
  "pizza2.jpg",
  "pizza3.jpg",
  "pizza4.jpg",
  "pizza1.jpg",
  "pizza2.jpg",
  "pizza3.jpg",
  "pizza4.jpg",
  "pizza1.jpg",
  "pizza2.jpg",
  "pizza3.jpg",
  "pizza4.jpg",
];

const Posters = () => {
  const scrollContainerRef = useRef(null);

  const handleScroll = () => {
    const container = scrollContainerRef.current;
    if (container) {
      if (
        container.scrollLeft + container.offsetWidth >=
        container.scrollWidth
      ) {
        container.scrollLeft = 0;
      } else {
        container.scrollLeft += 1;
      }
    }
  };

  setInterval(handleScroll, 50);

  return (
    <div
      className="flex w-full overflow-x-auto  whitespace-nowrap my-10 "
      ref={scrollContainerRef}
    >
      {Images.map((image, index) => {
        return (
          <div className="carousel-item flex-0" key={index}>
            <img
              src={`/assets/images/${image}`}
              alt="Burger"
              className="posterImages"
            />
          </div>
        );
      })}
    </div>
  );
};

export default Posters;
