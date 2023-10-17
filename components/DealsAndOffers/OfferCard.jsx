import React from "react";

const OfferCard = ({ name, cardClickHandler }) => {
  return (
    <div
      className="card rounded-lg lg:rounded-xl w-64 sm:w-72 md:w-80 lg:w-96 text-primary-content cursor-pointer"
      style={{
        backgroundImage: "url('/assets/images/offer1.png')",
      }}
      onClick={cardClickHandler}
    >
      <div className="card-body text-white">
        <h4 className="card-title font-light">Card title!</h4>
        <p className="font-normal">{name}</p>
      </div>
    </div>
  );
};

export default OfferCard;
