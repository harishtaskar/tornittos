import HeroSection from "@/components/HeroSection/Hero";
import NewOffersList from "@/components/DealsAndOffers/NewOffersList";
import React from "react";
import BestSellersList from "@/components/BestSellers/BestSellersList";
import Posters from "@/components/ListOfPosters/Posters";

export const metadata = {
  title: "TORNITTO'S PIZZA",
  description: "best pizza in surat",
};

const HomePage = () => {
  return (
    <>
      <HeroSection />
      <NewOffersList />
      <BestSellersList />
      <Posters />
    </>
  );
};

export default HomePage;
