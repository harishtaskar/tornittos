import Link from "next/link";
import React from "react";

const NavBar = () => {
  return (
    <>
      <div className="navbar bg-background-blue text-white z-10 fixed">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden text-white">
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
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow rounded-none w-52 h-96 bg-background-blue"
            >
              <li>
                <a className="hover:text-white hover:bg-primary-red rounded-none">
                  Home
                </a>
              </li>
              <li>
                <a>Menu</a>
                <ul className="p-2">
                  <li>
                    <a className="hover:text-white hover:bg-primary-red rounded-none">
                      Pizza
                    </a>
                  </li>
                  <li>
                    <a className="hover:text-white hover:bg-primary-red rounded-none">
                      Salad
                    </a>
                  </li>
                </ul>
              </li>
              <li>
                <a className="hover:text-white hover:bg-primary-red rounded-none">
                  About us
                </a>
              </li>
            </ul>
          </div>
          <Link
            href="/"
            className="btn btn-ghost text-white text-xl sm:text-2xl md:text-2xl lg:text-2xl xl:text-3xl"
          >
            TORNITTO'S PIZAA
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 ">
            <li>
              <a className="hover:text-white hover:bg-primary-red rounded-none text-xl">
                Home
              </a>
            </li>
            <li tabIndex={0}>
              <details className="text-xl">
                <summary className="hover:text-white active:bg-primary-red hover:bg-primary-red rounded-none">
                  Menu
                </summary>
                <ul className="text-white bg-primary-red rounded-none z-10 w-96">
                  <li>
                    <a className="hover:text-white hover:bg-background-blue rounded-none">
                      Pizza
                    </a>
                  </li>
                  <li>
                    <a className="hover:text-white hover:bg-background-blue rounded-none">
                      Salad
                    </a>
                  </li>
                </ul>
              </details>
            </li>
            <li>
              <a className="hover:text-white hover:bg-primary-red rounded-none text-xl">
                About us
              </a>
            </li>
          </ul>
        </div>
        <div className="navbar-end">
          <a className="btn_primary">Dine in</a>
        </div>
      </div>
    </>
  );
};

export default NavBar;
