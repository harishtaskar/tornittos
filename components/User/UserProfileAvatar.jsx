import React from "react";
import Link from "next/link";
import { signOut } from "next-auth/react";
import ReservationCount from "../Shared/ReservationCount";
import SignOutBtn from "../Shared/SignOutBtn";

const UserProfileAvatar = ({ firstLetter, image }) => {
  return (
    <div className="dropdown">
      <button tabIndex={0} className="btn btn-ghost px-0">
        <div className="avatar placeholder">
          <div className="bg-gray-600 text-neutral-content rounded-full w-10">
            {image ? (
              <>
                <img src={image} alt="profileimg" />
              </>
            ) : (
              <span className="text-xl text-white">{firstLetter}</span>
            )}
          </div>
        </div>
      </button>
      <ul
        tabIndex={0}
        className="menu menu-md lg:menu-lg rounded-xl dropdown-content right-[0px] mt-1 z-[1] p-2 shadow bg-white text-background-blue w-fit"
      >
        <li>
          <Link href="/">Profile</Link>
        </li>
        <li className="flex">
          <Link href="/reservations">
            Reservations <ReservationCount />
          </Link>
        </li>
        <li>
          <Link href="/">Coupons</Link>
        </li>
        <li>
          <SignOutBtn>Logout</SignOutBtn>
        </li>
      </ul>
    </div>
  );
};

export default UserProfileAvatar;
