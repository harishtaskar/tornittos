"use client";
import React, { useState } from "react";

const TimePickerComp = ({ time }) => {
  const [timeArial, setTimeArial] = useState({
    time: undefined,
    arial: "AM",
  });

  const onChange = (e) => {
    const { name, value } = e.target;
    setTimeArial((prev) => {
      return { ...prev, [name]: value };
    });
    console.log(value);
    time(timeArial);
  };

  return (
    <div className=" w-full mt-1">
      <label className="label">
        <span className="label-text">Time</span>
      </label>
      <div className="flex justify-between border border-gray-300 rounded-lg">
        <input
          type="number"
          value={timeArial.time}
          maxLength="2"
          name="time"
          onChange={onChange}
          className="w-full rounded-lg active:border-none hover:border-none h-10 p-2 flex-1"
        />
        <select
          name="arial"
          id="time"
          value={timeArial.arial}
          className="flex-1"
          onChange={onChange}
        >
          <option>AM</option>
          <option>PM</option>
        </select>
      </div>
    </div>
  );
};

export default TimePickerComp;
