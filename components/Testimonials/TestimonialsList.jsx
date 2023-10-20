import React from "react";
import TestimonialCard from "./TestimonialCard";
import HeaderText from "../Shared/HeaderText";

const Testimonials = [
  {
    id: "a1",
    username: "Harish Taskar",
    content:
      "This is testimonial content about some pizaa shop which i naver visited yet",
  },
  {
    id: "a2",
    username: "Keshav Taskar",
    content:
      "This is testimonial content about some pizaa shop which i naver visited yet",
  },
  {
    id: "a3",
    username: "Vasudev Taskar",
    content:
      "This is testimonial content about some pizaa shop which i naver visited yet",
  },
  {
    id: "a4",
    username: "Nitin Taskar ",
    content:
      "This is testimonial content about some pizaa shop which i naver visited yet",
  },
  {
    id: "a5",
    username: "Nitin Taskar ",
    content:
      "This is testimonial content about some pizaa shop which i naver visited yet",
  },
  {
    id: "a6",
    username: "Nitin Taskar ",
    content:
      "This is testimonial content about some pizaa shop which i naver visited yet",
  },
  {
    id: "a7",
    username: "Nitin Taskar ",
    content:
      "This is testimonial content about some pizaa shop which i naver visited yet",
  },
];

const TestimonialsList = () => {
  return (
    <div className="flex-row items-center justify-center w-full mt-5">
      <div className="flex items-center justify-center">
        <div className="mainContent pl-5 sm:pl-0 md:pl-0 lg:pl-0 xl:pl-0">
          <HeaderText text="Testimonials" />
          <div className="carousel w-full">
            {Testimonials.map((testimonial) => {
              return (
                <div className="carousel-item mr-4" key={testimonial.id}>
                  <TestimonialCard
                    key={testimonial.id}
                    testimonial={testimonial}
                  />
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TestimonialsList;
