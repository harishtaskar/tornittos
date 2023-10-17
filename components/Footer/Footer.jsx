import Image from "next/image";
import React from "react";

const Footer = () => {
  return (
    <footer className="footer flex justify-center items-center p-10 sm:px-14 md:px-16 lg:32 bg-slate-400 text-base-content">
      <div className="flex flex-col justify-center items-center text-center md:flex-row md:justify-between md:gap-16 md:items-center md:w-[80vw]">
        <aside>
          <Image
            width={200}
            height={200}
            src={"/assets/images/logo.png"}
            className="fill-current"
            alt="logo"
          />
          <p className="text-gray-900">
            ACME Industries Ltd.
            <br />
            Providing reliable tech since 1992
          </p>
        </aside>
        <div className="flex flex-col sm:flex-row sm:justify-between sm:w-[90vw]  sm:px-16 justify-center md:flex-row md:gap-4 lg:px-56">
          <nav className="flex flex-col gap-2 mt-5">
            <header className="footer-title text-gray-950 font-bold">
              Services
            </header>
            <a className="link link-hover text-black">Branding</a>
            <a className="link link-hover text-black">Design</a>
            <a className="link link-hover text-black">Marketing</a>
          </nav>
          <nav className="flex flex-col gap-2 mt-5">
            <header className="footer-title text-background-blue">
              Company
            </header>
            <a className="link link-hover text-black">About us</a>
            <a className="link link-hover text-black">Contact</a>
            <a className="link link-hover text-black">Jobs</a>
          </nav>
          <nav className="flex flex-col gap-2 mt-5">
            <header className="footer-title">Social</header>
            <a className="link link-hover text-black">Facebook</a>
            <a className="link link-hover text-black">Instagram</a>
            <a className="link link-hover text-black">Tweeter</a>
          </nav>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
