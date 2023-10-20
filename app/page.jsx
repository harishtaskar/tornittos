import HeroSection from "@/components/HeroSection/Hero";
import NewOffersList from "@/components/DealsAndOffers/NewOffersList";
import React from "react";
import BestSellersList from "@/components/BestSellers/BestSellersList";
import Posters from "@/components/ListOfPosters/Posters";
import TestimonialsList from "@/components/Testimonials/TestimonialsList";
import OurStory from "@/components/OurStory/OurStory";


const HomePage = () => {
  return (
    <>
      <HeroSection />
      <NewOffersList />
      {/* <Posters /> */}
      <BestSellersList />
      <OurStory />
      <TestimonialsList />
    </>
  );
};

export default HomePage;
