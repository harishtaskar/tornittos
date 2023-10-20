import React from "react";
import HeaderText from "../Shared/HeaderText";

const OurStory = () => {
  return (
    <div className="flex items-center justify-center mt-5 ">
      <div className="mainContent px-5 sm:px-0 md:px-0 lg:px-0 xl:px-0">
        <div className="flex-start flex-col text-start border border-gray-300 rounded-lg p-5">
          <HeaderText text={"Our Story"} />
          <span className="font-semibold mb-5 text-black text-2xl lg:text-3xl xl:text-[2rem] leading-5">
            Tornitto's Magic Slice
          </span>
          <p className="font-thin mb-5 text-gray-800 leading-7 text-base lg:text-xl xl:text-[1.25rem] lg:leading-8">
            In the heart of a bustling town, there stood a pizzeria called
            Tornitto's Pizzas. Owned by the passionate chef, Luigi Tornitto, it
            was no ordinary place. Luigi's secret sauce was said to have magical
            properties, making his pizzas unforgettable. One day, a newcomer
            named Mia wandered in, feeling lost. A single bite of Tornitto's
            pizza warmed her heart and filled her with joy. Word of the magical
            pizzas spread, turning Tornitto's into a beloved local spot.
            Families, friends, and even strangers gathered there, finding
            happiness in every slice. Tornitto's Pizzas became a symbol of
            unity, love, and the extraordinary power of simple pleasures.
            Luigi's magic slice brought people together, making the world a
            brighter, happier place, one pizza at a time.
          </p>
        </div>
      </div>
    </div>
  );
};

export default OurStory;
