import Image from "next/image";
import React from "react";

const Posters = () => {
  return (
    <div className="carousel mb-10 ">
      <div className="carousel-item">
        <img
          src="/assets/images/offer.png"
          alt="Burger"
          className="posterImages"
        />
      </div>
      <div className="carousel-item">
        <img
          src="/assets/images/offer2.png"
          alt="Burger"
          className="posterImages"
        />
      </div>
      <div className="carousel-item">
        <img
          src="/assets/images/offer3.png"
          alt="Burger"
          className="posterImages"
        />
      </div>
      <div className="carousel-item">
        <img
          src="/assets/images/offer.png"
          alt="Burger"
          className="posterImages"
        />
      </div>
      <div className="carousel-item">
        <img
          src="/assets/images/offer2.png"
          alt="Burger"
          className="posterImages"
        />
      </div>
    </div>
  );
};

export default Posters;
