"use client";
import React, { useState } from "react";
import InputText from "../Shared/InputText";
import DatePicker from "../Shared/DatePicker";
import TimePickerComp from "../Shared/TimePickerComp";
import TextArea from "../Shared/TextArea";
import { useSession } from "next-auth/react";

const DineInForm = () => {
  const { data: session } = useSession();
  console.log(session);
  const [formData, setFormData] = useState({
    firstName: undefined,
    lastName: undefined,
    email: undefined,
    mobile: undefined,
    date: undefined,
    time: undefined,
    service: undefined,
  });

  const onChange = (e) => {
    const { name, value } = e.target;
    console.log(e.target.value);
    setFormData((prev) => {
      return { ...prev, [name]: value };
    });
  };

  const dateHandler = (data) => {
    setFormData((prev) => {
      return { ...prev, date: data };
    });
  };
  const timeHandler = (data) => {
    console.log(data);
    setFormData((prev) => {
      return { ...prev, time: `${data?.time} ${data?.arial}` };
    });
  };

  const submitHandler = (e) => {
    e.preventDefault();
    console.log(formData);
  };

  return (
    <form onSubmit={submitHandler} className="w-full">
      <div className="flex gap-2">
        <InputText
          name={"firstName"}
          label={"First Name"}
          type={"text"}
          onChange={onChange}
          value={formData.firstName}
        />
        <InputText
          name={"lastName"}
          label={"Last Name"}
          type={"text"}
          onChange={onChange}
          value={formData.lastName}
        />
      </div>
      <InputText
        name={"email"}
        label={"Email"}
        type={"email"}
        value={formData.email}
        onChange={onChange}
      />
      <InputText
        name={"mobile"}
        label={"Mobile"}
        type={"number"}
        value={formData.mobile}
        onChange={onChange}
      />
      <div className="flex gap-2">
        <DatePicker date={dateHandler} />
        <TimePickerComp time={timeHandler} />
      </div>
      <TextArea
        label={"Additional Services?"}
        placeholder={"Birthday/Anniversary Celebration"}
        type={"text"}
        onChange={onChange}
      />
      <div className="flex flex-row justify-end w-full mt-4 gap-2">
        <button className="btn btn-outline border-background-blue">
          Reset
        </button>
        <button
          type="submit"
          className="btn text-white border-none btn-primary bg-background-blue"
        >
          Submit
        </button>
      </div>
    </form>
  );
};

export default DineInForm;
