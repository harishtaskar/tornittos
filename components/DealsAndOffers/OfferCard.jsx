import React from "react";

const OfferCard = ({ name, cardClickHandler }) => {
  return (
    <div
      className="card rounded-lg lg:rounded-xl w-64 sm:w-72 md:w-80 lg:w-96 text-primary-content cursor-pointer"
      style={{
        background:
          "url('/assets/images/offer.png') no-repeat center center/cover fixed",
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
