"use client";
import { signOut } from "next-auth/react";
import { useRouter } from "next/navigation";
import React from "react";

const SignOutBtn = ({ children }) => {
  const router = useRouter();
  const signOutHandler = (e) => {
    e.preventDefault();
    signOut();
    router.push("/");
  };
  return (
    <button onClick={signOutHandler} className="text-red-700">
      {children}
    </button>
  );
};

export default SignOutBtn;
