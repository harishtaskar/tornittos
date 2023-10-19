"use client";
import Link from "next/link";
import React from "react";
import { useSession } from "next-auth/react";

const DineInButton = () => {
  const { data: session } = useSession();
  console.log(session);
  return (
    <Link
      href={session ? `/dinein` : `api/auth/signin`}
      className="btn btn_primary"
    >
      Dine in
    </Link>
  );
};

export default DineInButton;
