import Image from "next/image";
import React from "react";

const Footer = () => {
  return (
    <footer className="footer flex justify-center items-center p-10 sm:px-14 md:px-24 lg:32 bg-slate-400 text-base-content">
      <div className="flex flex-col justify-center items-center text-center md:flex-row md:justify-between md:gap-10 md:items-start">
        <aside>
          <Image
            width={200}
            height={200}
            src={"/assets/images/logo.png"}
            className="fill-current"
          />

          <p>
            ACME Industries Ltd.
            <br />
            Providing reliable tech since 1992
          </p>
        </aside>
        <div className="flex flex-col justify-center md:flex-row md:gap-10">
          <nav className="flex flex-col gap-2 mt-5">
            <header className="footer-title">Services</header>
            <a className="link link-hover">Branding</a>
            <a className="link link-hover">Design</a>
            <a className="link link-hover">Marketing</a>
          </nav>
          <nav className="flex flex-col gap-2 mt-5">
            <header className="footer-title">Company</header>
            <a className="link link-hover">About us</a>
            <a className="link link-hover">Contact</a>
            <a className="link link-hover">Jobs</a>
          </nav>
          <nav className="flex flex-col gap-2 mt-5">
            <header className="footer-title">Social</header>
            <a className="link link-hover">Facebook</a>
            <a className="link link-hover">Instagram</a>
            <a className="link link-hover">Tweeter</a>
          </nav>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
