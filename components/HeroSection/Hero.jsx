import React from "react";

const HeroSection = () => {
  return (
    <div
      className="hero place-items-start min-h-26 z-9"
      style={{
        backgroundImage: 'url("/assets/background/mainBackground3.png")',
      }}
    >
      <div className="hero-overlay bg-opacity-20"></div>
      <div className="hero_content text-start text-neutral-content align-mi">
        <div className="max-w-2xl ml-2 mb-14 mt-24 lg:mt-60 lg:ml-20 lg:mb-32 ">
          <h1 className="mb-5 text-4xl mt-12 md:text-6xl lg:text-7xl font-bold text-white capitalize">
            the party <span className="text-yellow-500">can't start</span>{" "}
            without pizza.
          </h1>
          <p className="mb-5 text-gray-200 text-lg lg:text-xl">
            It is made with different toppings. Some of the most common toppings
            are cheese, sausages, pepperoni, vegetables, tomatoes, spices and
            herbs and basil.
          </p>
          <div className="flex gap-4">
            <button className="btn btn_primary cursor-pointer">
              Reserve table
            </button>
            <button className="btn btn_primary cursor-pointer">Menu</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
