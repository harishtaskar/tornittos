"use client";
import React, { useState } from "react";
import Datepicker from "react-tailwindcss-datepicker";

const DatePicker = ({ date, name }) => {
  const [value, setValue] = useState();

  const handleValueChange = (newValue) => {
    setValue(newValue);
    date(newValue?.startDate);
  };
  return (
    <div className=" w-full mt-1">
      <label className="label">
        <span className="label-text">Reservation Date</span>
      </label>
      <div className="border border-gray-300 rounded-lg">
        <Datepicker
          asSingle={true}
          value={value}
          useRange={true}
          name={name}
          onChange={handleValueChange}
        />
      </div>
    </div>
  );
};

export default DatePicker;
