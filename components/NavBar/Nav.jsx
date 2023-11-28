import Image from "next/image";
import Link from "next/link";
import React from "react";
import MenuIcon from "@mui/icons-material/Menu";
import DineInButton from "./DineInButton";
import SignOutBtn from "../Shared/SignOutBtn";

const NavBar = () => {
  return (
    <>
      <div className="navbar bg-white bg-opacity-80 backdrop-blur backgr z-10 fixed pr-8 h-[4.5rem] sm:h-[5rem] md:h-[5.2rem] lg:h-[5.2rem] xl:h-[5.4rem] min-w-full">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost px-[0.5rem] lg:hidden">
              <MenuIcon className="text-background-blue" />
            </label>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content rounded-xl mt-3 z-[1] p-2 shadow w-52 h-96 bg-background-blue text-white"
            >
              <li>
                <Link href="/">Home</Link>
              </li>
              <li>
                <Link href="/menu"> Menu</Link>
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
              <li>
                <SignOutBtn href="/">Log Out</SignOutBtn>
              </li>
            </ul>
          </div>
          <div className="btn btn-ghost hover:bg-transparent text-background-blue px-0 lg:px-5 text-[1.75rem] sm:text-3xl md:text-3xl lg:text-3xl xl:text-4xl">
            <Image
              src={"/assets/images/logo.png"}
              width={70}
              height={70}
              alt="TornittosLogo"
              className="object-contain hidden md:grid md:w-12 md:h-12 lg:w-15 lg:h-15"
            />
            <Link
              href="/"
              className="sm:flex md:flex lg:flex font-bold flex mt-1"
            >
              TORNITTO'S
              <span className="hidden sm:grid md:grid lg:grid xl:grid ml-[0.5rem]">
                PIZZA
              </span>
            </Link>
          </div>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 ">
            <li>
              <Link href="/" className=" hover:bg-white  text-xl">
                Home
              </Link>
            </li>
            <li tabIndex={0}>
              <details className="text-xl">
                <summary className=" active:bg-primary-red hover:bg-white ml-3">
                  Menu
                </summary>
                <ul className="text-background-blue drop-shadow-xl bg-white  z-10 w-96">
                  <li>
                    <Link href="/menu">Unlimited Pizza</Link>
                  </li>
                  <li>
                    <Link href="/menu">Pizza</Link>
                  </li>
                  <li>
                    <Link href="/menu">Salad</Link>
                  </li>
                  <li>
                    <Link href="/menu">More</Link>
                  </li>
                </ul>
              </details>
            </li>
            <li>
              <Link href="aboutus" className=" hover:bg-white  text-xl ml-3">
                About us
              </Link>
            </li>
          </ul>
        </div>
        <div className="navbar-end">
          <DineInButton />
        </div>
      </div>
    </>
  );
};

export default NavBar;
