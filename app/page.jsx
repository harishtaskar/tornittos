import HeroSection from "@/components/HeroSection/Hero";
import NewOffersList from "@/components/DealsAndOffers/NewOffersList";
import React from "react";
import BestSellersList from "@/components/BestSellers/BestSellersList";
import Posters from "@/components/ListOfPosters/Posters";
import TestimonialsList from "@/components/Testimonials/TestimonialsList";

export const metadata = {
  title: "TORNITTO'S PIZZA",
  description: "best pizza in surat",
};

const HomePage = () => {
  return (
    <>
      <HeroSection />
      <NewOffersList />
      {/* <Posters /> */}
      <BestSellersList />
      <TestimonialsList />
    </>
  );
};

export default HomePage;
