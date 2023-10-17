import Image from "next/image";
import React from "react";

const TestimonialCard = ({ testimonial }) => {
  const session = null;
  return (
    <div className="testimonial_card">
      <div className="flex flex-1 justify-between items-start gap-5">
        <div className="flex-1 flex justify-between items-center gap-3">
          <div className="flex justify-start items-center gap-2">
            <Image
              src={"/assets/images/logo.png"}
              alt="user_image"
              height={40}
              width={40}
              className="rounded-full object-contain"
            />
            <div className="flex flex-col">
              <h3 className="font-satoshi font-semibold text-gray-900">
                {testimonial.username}
              </h3>
            </div>
          </div>
          <Image
            src={"/assets/images/quote.png"}
            alt="user_image"
            height={40}
            width={40}
            color="rgb(23, 44, 74, 0.2)"
            className="object-contain"
          />
        </div>
      </div>
      <p className="my-4 font-satoshi text-sm text-gray-700">
        {testimonial.content}
      </p>
      {session?.user.id === "5" && null === "/profile" && (
        <div className="mt-5 flex-center gap-4 border-t border-gray-100 pt-3">
          <p
            className="font-inter text-sm text-red-700 cursor-pointer "
            onClick={handleDelete}
          >
            Delete
          </p>
        </div>
      )}
    </div>
  );
};

export default TestimonialCard;
