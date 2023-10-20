"use client";
import Link from "next/link";
import React from "react";

const DineInButton = () => {
  return (
    <Link href={"dinein"} className="btn btn_primary">
      Dine in
    </Link>
  );
};

export default DineInButton;
