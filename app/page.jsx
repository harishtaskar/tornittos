import HeroSection from "@/components/HeroSection/Hero";
import NewOffersList from "@/components/DealsAndOffers/NewOffersList";
import OfferCard from "@/components/DealsAndOffers/OfferCard";
import React from "react";
import BestSellersList from "@/components/BestSellers/BestSellersList";

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
    </>
  );
};

export default HomePage;
