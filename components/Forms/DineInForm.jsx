"use client";
import React, { useState } from "react";
import InputText from "../Shared/InputText";
import DatePicker from "../Shared/DatePicker";
import TimePickerComp from "../Shared/TimePickerComp";
import TextArea from "../Shared/TextArea";
import { useRouter } from "next/navigation";
import { ToastContainer, toast } from "react-toastify";
import { useRecoilState } from "recoil";
import { reservationsListState } from "@/store";

const DineInForm = () => {
  const [reservations, setReservations] = useRecoilState(reservationsListState);
  const [opacity, setOpacity] = useState(100);
  const router = useRouter();
  const [inputData, setInputData] = useState({
    firstName: undefined,
    lastName: undefined,
    email: undefined,
    mobile: undefined,
    date: undefined,
    time: undefined,
    service: undefined,
    tableFor: undefined,
    notes: undefined,
  });

  const dateHandler = (data) => {
    setInputData((prev) => {
      return { ...prev, date: data };
    });
  };
  const timeHandler = (data) => {
    setInputData((prev) => {
      return { ...prev, time: `${data?.time}${data?.arial}` };
    });
  };

  const submitHandler = (e) => {
    e.preventDefault();
    setOpacity(30);
    const form = e.target;
    const formData = new FormData(form);
    const formJson = Object.fromEntries(formData.entries());
    setInputData((prev) => {
      return { ...prev, ...formJson };
    });
    setReservations((prev) => {
      return [...prev, { ...formJson, date: inputData.date }];
    });
    toast.success("🥘 table succefully reserved");
    setInputData({
      firstName: "",
      lastName: "",
      email: "",
      mobile: "",
      date: "",
      tableFor: "",
      time: "",
      notes: "",
    });
    setTimeout(() => {
      router.push("/reservations");
      setOpacity(100);
    }, 5000);
  };

  console.log(reservations);

  return (
    <form
      onSubmit={submitHandler}
      className={`w-full max-w-[60rem] flex md:gap-2 flex-col opacity-${opacity}`}
    >
      <div className="flex gap-2">
        <InputText
          name={"firstName"}
          label={"First Name"}
          type={"text"}
          value={inputData.firstName}
        />
        <InputText
          name={"lastName"}
          label={"Last Name"}
          type={"text"}
          value={inputData.lastName}
        />
      </div>
      <InputText
        name={"email"}
        label={"Email"}
        type={"email"}
        value={inputData.email}
      />
      <InputText
        name={"mobile"}
        label={"Mobile"}
        type={"number"}
        value={inputData.mobile}
      />
      <div className="flex gap-2">
        <DatePicker date={dateHandler} name={"date"} />
        <TimePickerComp
          time={timeHandler}
          name1={"time"}
          name2={"arial"}
          value={inputData.time}
        />
      </div>
      <InputText
        name={"tableFor"}
        label={"How many person will you be with?"}
        type={"number"}
        value={inputData.tableFor}
      />
      <TextArea
        label={"Notes"}
        placeholder={""}
        type={"text"}
        value={inputData.notes}
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
      <ToastContainer position="top-center" />
    </form>
  );
};

export default DineInForm;
