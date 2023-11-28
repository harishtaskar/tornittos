"use client";
import React, { useEffect, useState } from "react";
import InputText from "../Shared/InputText";
import DatePicker from "../Shared/DatePicker";
import TimePickerComp from "../Shared/TimePickerComp";
import TextArea from "../Shared/TextArea";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { ToastContainer, toast } from "react-toastify";

const DineInForm = () => {
  const { data: session } = useSession();
  useEffect(() => {
    if (!session) {
      router.push("/api/auth/signin");
    }
  }, []);
  const [opacity, setOpacity] = useState(100);
  const router = useRouter();
  const [formData, setFormData] = useState({
    firstName: undefined,
    lastName: undefined,
    email: undefined,
    mobile: undefined,
    date: undefined,
    time: undefined,
    service: undefined,
  });

  const dateHandler = (data) => {
    setFormData((prev) => {
      return { ...prev, date: data };
    });
  };
  const timeHandler = (data) => {
    setFormData((prev) => {
      return { ...prev, time: `${data?.time} ${data?.arial | "AM"}` };
    });
  };

  const submitHandler = (e) => {
    e.preventDefault();
    setOpacity(30);
    const form = e.target;
    const formData = new FormData(form);
    const formJson = Object.fromEntries(formData.entries());
    toast.success("🥘 table succefully reserved");
    setFormData({
      firstName: "",
      lastName: "",
      email: "",
      mobile: "",
      date: "",
      time: "",
      service: "",
    });
    setTimeout(() => {
      router.push("/");
      setOpacity(100);
    }, 5000);
  };

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
          value={formData.firstName}
        />
        <InputText
          name={"lastName"}
          label={"Last Name"}
          type={"text"}
          value={formData.lastName}
        />
      </div>
      <InputText
        name={"email"}
        label={"Email"}
        type={"email"}
        value={formData.email}
      />
      <InputText
        name={"mobile"}
        label={"Mobile"}
        type={"number"}
        value={formData.mobile}
      />
      <div className="flex gap-2">
        <DatePicker date={dateHandler} />
        <TimePickerComp time={timeHandler} />
      </div>
      <TextArea
        label={"Additional Services?"}
        placeholder={"Birthday/Anniversary Celebration"}
        type={"text"}
        value={formData.service}
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
