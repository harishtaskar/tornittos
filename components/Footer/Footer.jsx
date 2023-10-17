import Image from "next/image";
import Link from "next/link";
import React from "react";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import YouTubeIcon from "@mui/icons-material/YouTube";

const Footer = () => {
  return (
    <footer className="footer flex justify-center items-center p-10 sm:px-14 md:px-16 lg:32 bg-slate-300 text-base-content">
      <div className="flex flex-col justify-center items-center text-center md:flex-row md:justify-between md:gap-16 md:items-center md:w-[80vw] sm:gap-8">
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
        <div className="flex flex-col sm:flex-row sm:justify-between sm:w-[90vw] justify-between md:flex-row md:gap-4 md:items-start lg:items-start">
          <p className="hidden md:flex lg:flex text-base sm:text-sm w-4/12 text-start">
            Pizza is an Italian food that was created in Italy (The Naples
            area). It is made with different toppings. Some of the most common
            toppings are cheese, sausages, pepperoni, vegetables, tomatoes,
            spices and herbs and basil. These toppings are added over a piece of
            bread covered with sauce.
          </p>
          <nav className="flex flex-col gap-2 ">
            <header className="headerTitle">Services</header>
            <a className="headerTexts">Branding</a>
            <a className="headerTexts">Design</a>
            <a className="headerTexts">Marketing</a>
          </nav>
          <nav className="flex flex-col gap-2 ">
            <header className="headerTitle">Company</header>
            <a className="headerTexts">About us</a>
            <a className="headerTexts">Contact</a>
            <a className="headerTexts">Jobs</a>
          </nav>
          <nav className="flex flex-col gap-2">
            <header className="headerTitle">Social</header>
            <div className="flex flex-row gap-2 justify-between sm:flex-col">
              <Link href="/">
                <FacebookIcon />
              </Link>
              <Link href="/">
                <InstagramIcon />
              </Link>
              <Link href="/">
                <TwitterIcon />
              </Link>
              <Link href="/">
                <YouTubeIcon />
              </Link>
            </div>
          </nav>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
