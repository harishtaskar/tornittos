import React from "react";
import BestSellerCard from "./BestSellerCard";
import HeaderText from "../HeaderText";
import NewOffersList from "../DealsAndOffers/NewOffersList";

const BestSellersList = () => {
  return (
    <div className="flex-col items-center justify-center w-[100vw] bg-slate-300 py-2 mt-10">
      <div className="main">
        <div className="mainContent">
          <HeaderText text="Best Sellers" />
          <div className="carousel w-full gap-5">
            <div id="item1" className="carousel-item">
              <BestSellerCard
                title={"Double Cheez with slice"}
                subtitle={
                  "Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi."
                }
              />
            </div>
            <div id="item2" className="carousel-item">
              <BestSellerCard
                title={"Second"}
                subtitle={
                  "Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi."
                }
              />
            </div>
            <div id="item3" className="carousel-item">
              <BestSellerCard
                title={"Third"}
                subtitle={
                  "Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi."
                }
              />
            </div>
            <div id="item4" className="carousel-item">
              <BestSellerCard
                title={"Forth"}
                subtitle={
                  "Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi."
                }
              />
            </div>
            <div id="item4" className="carousel-item">
              <BestSellerCard
                title={"Forth"}
                subtitle={
                  "Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi."
                }
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BestSellersList;
