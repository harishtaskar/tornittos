import React from "react";

const OfferCard = ({ name, cardClickHandler, offer }) => {
  return (
    <div
      className="card rounded-lg  bg-yellow-200 border-background-blue lg:rounded-xl w-64 sm:w-72 md:w-80 lg:w-96 text-primary-content cursor-pointer overflow-hidden"
      onClick={cardClickHandler}
    >
      <img
        src="/assets/images/logo.png"
        alt="logo"
        className="absolute bottom-[-20px] right-[-20px] w-[150px] h-[150px]"
      />
      <div className="card-body text-white">
        <h4 className="card-title font-bold text-black">{offer}</h4>
        <p className="font-normal text-background-blue">{name}</p>
      </div>
    </div>
  );
};

export default OfferCard;
