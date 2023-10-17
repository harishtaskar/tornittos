import Image from "next/image";
import Link from "next/link";
import React from "react";

const NavBar = () => {
  return (
    <>
      <div
        className="navbar bg-white z-10 fixed pr-8"
        style={{ minHeight: "4rem", minWidth: "100vw" }}
      >
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content rounded-xl mt-3 z-[1] p-2 shadow w-52 h-96 bg-background-blue text-white"
            >
              <li>
                <Link href="/">Home</Link>
              </li>
              <li>
                <a>Menu</a>
                <ul className="p-2">
                  <li>
                    <Link href="/">Unlimited Pizza</Link>
                  </li>
                  <li>
                    <Link href="/">Pizza</Link>
                  </li>
                  <li>
                    <Link href="/">Salad</Link>
                  </li>
                </ul>
              </li>
              <li>
                <Link href="/">Contact us</Link>
              </li>
              <li>
                <Link href="/">About us</Link>
              </li>
            </ul>
          </div>
          <div className="btn btn-ghost mb-6 hover:bg-white text-background-blue text-2xl sm:text-3xl md:text-3xl lg:text-3xl xl:text-4xl lg:mb-6">
            <Image
              src={"/assets/images/logo.png"}
              width={70}
              height={70}
              alt="TornittosLogo"
              className="object-contain md:w-15 md:h-15"
            />
            <Link href="/" className="sm:flex font-bold hidden mt-1">
              TORNITTO'S PIZAA
            </Link>
          </div>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 ">
            <li>
              <a className=" hover:bg-white  text-xl">Home</a>
            </li>
            <li tabIndex={0}>
              <details className="text-xl">
                <summary className=" active:bg-primary-red hover:bg-white ml-3">
                  Menu
                </summary>
                <ul className="text-background-blue drop-shadow-xl bg-white  z-10 w-96">
                  <li>
                    <Link href="/">Unlimited Pizza</Link>
                  </li>
                  <li>
                    <Link href="/">Pizza</Link>
                  </li>
                  <li>
                    <Link href="/">Salad</Link>
                  </li>
                </ul>
              </details>
            </li>
            <li>
              <a className=" hover:bg-white  text-xl ml-3">About us</a>
            </li>
          </ul>
        </div>
        <div className="navbar-end">
          <a className="btn btn_primary">Dine in</a>
        </div>
      </div>
    </>
  );
};

export default NavBar;
