import React from "react";

const OfferCard = ({ name, cardClickHandler, offer, image }) => {
  return (
    <div
      className="card rounded-lg  bg-yellow-200 border-background-blue lg:rounded-xl w-64 sm:w-72 md:w-80 lg:w-96 text-primary-content cursor-pointer overflow-hidden"
      onClick={cardClickHandler}
    >
      <img
        src={image}
        alt="logo"
        className="absolute bottom-[-35px] right-[-35px] w-[150px] h-[150px]"
      />
      <div className="card-body text-white">
        <h4 className="card-title text-3xl text-black">{offer}</h4>
        <p className="font-sm text-background-blue w-[60%] leading-5">{name}</p>
      </div>
    </div>
  );
};

export default OfferCard;
