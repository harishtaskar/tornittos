import Image from "next/image";
import React from "react";

const BestSellerCard = ({ title, subtitle }) => {
  return (
    <div className="card w-60 scroll-auto rounded-lg lg:rounded-xl sm:w-64 md:w-72 lg:w-80 bg-base-100">
      <figure>
        <Image
          src="/assets/images/pizza2.jpg"
          alt="Image"
          width={300}
          height={300}
        />
      </figure>
      <div className="card-body p-4 md:p-5 lg:p-6">
        <h2 className="card-title text-base md:text-xl lg:text-2xl">
          {title}
          <div className="badge badge-xs badge-accent badge-outline md:badge-outline lg:badge-outline md:badge-sm lg:badge-md">
            Recommended
          </div>
        </h2>
        <p className="text-xs sm:text-sm lg:text-base">{subtitle}</p>
      </div>
    </div>
  );
};

export default BestSellerCard;
