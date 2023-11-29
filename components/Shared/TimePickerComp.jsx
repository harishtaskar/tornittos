"use client";
import React, { useState } from "react";

const TimePickerComp = ({ value, name1, name2 }) => {
  // const [timeArial, setTimeArial] = useState({
  //   time: 12,
  //   arial: "AM",
  // });

  // const onChange = (e) => {
  //   const { name, value } = e.target;
  //   setTimeArial((prev) => {
  //     return { ...prev, [name]: value };
  //   });
  //   time(timeArial);
  // };

  return (
    <div className=" w-full mt-1">
      <label className="label">
        <span className="label-text">Reservation Time</span>
      </label>
      <div className="flex justify-between border border-gray-300 rounded-lg">
        <input
          type="number"
          value={value}
          maxLength="2"
          required
          name={name1}
          className="w-full rounded-lg active:border-none hover:border-none h-10 p-2 flex-1"
        />
        <select name={name2} id="time" value={value} className="flex-1">
          <option>AM</option>
          <option>PM</option>
        </select>
      </div>
    </div>
  );
};

export default TimePickerComp;
