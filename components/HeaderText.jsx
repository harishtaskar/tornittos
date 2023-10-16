import React from "react";

const HeaderText = ({ text }) => {
  return (
    <div className="flex flex-col w-full justify-start my-5 mb-5 text-2xl md:text-3xl lg:text-4xl ">
      <h1 className="my-0">{text}</h1>
      {/* <span className="border-gray-800 my-0">----</span> */}
    </div>
  );
};

export default HeaderText;
