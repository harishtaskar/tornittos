"use client";
import { useSession } from "next-auth/react";
import Link from "next/link";
import React from "react";
import UserProfileAvatar from "../User/UserProfileAvatar";

const DineInButton = () => {
  const { data: session } = useSession();
  console.log(session);
  if (session) {
    return (
      <UserProfileAvatar
        firstLetter={session.user.email.charAt(0).toUpperCase()}
        image={session.user.image}
      />
    );
  } else {
    return (
      <Link href={"/api/auth/signin"} className="btn btn_primary">
        Sine in
      </Link>
    );
  }
};

export default DineInButton;
