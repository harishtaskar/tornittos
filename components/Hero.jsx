import React from "react";

const HeroSection = () => {
  return (
    <div
      className="hero place-items-start min-h-26 z-9"
      style={{
        backgroundImage: 'url("/assets/mainBackground3.png")',
      }}
    >
      <div className="hero-overlay bg-opacity-5"></div>
      <div className="hero_content text-start text-neutral-content align-mi">
        <div className="max-w-2xl ml-2 mb-14 mt-24 lg:mt-60 lg:ml-20 lg:mb-32 ">
          <h1 className="mb-5 text-4xl mt-12 md:text-6xl lg:text-7xl font-bold text-white">
            the party can't start without pizza.
          </h1>
          <p className="mb-5 text-lg lg:text-xl">
            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
            excepturi exercitationem quasi. In deleniti eaque aut repudiandae et
            a id nisi.
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
