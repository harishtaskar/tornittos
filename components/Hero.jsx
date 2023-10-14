import React from "react";

const HeroSection = () => {
  return (
    <div
      className="hero min-h-screen z-9"
      style={{
        backgroundImage: 'url("/assets/background_white.png")',
      }}
    >
      <div className="hero-overlay bg-opacity-10"></div>
      <div className="hero-content text-center text-neutral-content">
        <div className="max-w-md">
          <h1 className="mb-5 text-5xl font-bold text-white">Hello there</h1>
          <p className="mb-5">
            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
            excepturi exercitationem quasi. In deleniti eaque aut repudiandae et
            a id nisi.
          </p>
          <button className="btn btn_primary cursor-pointer">
            Get Started
          </button>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
