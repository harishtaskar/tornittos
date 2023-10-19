import Image from "next/image";
import Link from "next/link";
import React from "react";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import YouTubeIcon from "@mui/icons-material/YouTube";

const Footer = () => {
  return (
    <footer className="footer flex justify-center items-center p-5 mt-5 sm:p-8 md:p-10 lg:p-10 sm:px-14 md:px-16 lg:32 bg-background-blue text-base-content">
      <div className="flex flex-col gap-6 justify-center items-center text-center md:flex-row md:justify-between md:gap-16 md:items-center md:w-[80vw] sm:gap-8 lg:gap-28">
        <aside>
          <Image
            width={200}
            height={200}
            src={"/assets/images/logo.png"}
            className="fill-current"
            alt="logo"
          />
          <p className="text-white text-[0.75rem] font-extralight">
            ACME Industries Ltd.
            <br />
            Providing reliable tech since 1992
          </p>
        </aside>
        <div className="flex flex-col gap-5 sm:flex-row sm:justify-between sm:w-[90vw] justify-between md:flex-row md:gap-4 md:items-start lg:items-start">
          <p className="hidden md:flex lg:flex text-white font-extralight sm:text-sm w-4/12 text-start ">
            Pizza is an Italian food that was created in Italy (The Naples
            area). It is made with different toppings. Some of the most common
            toppings are cheese, sausages, pepperoni, vegetables, tomatoes,
            spices and herbs and basil. These toppings are added over a piece of
            bread covered with sauce.
          </p>
          <nav className="flex flex-col gap-1 items-center sm:items-center md:items-start lg:items-start">
            <header className="headerTitle">Usefull Links</header>
            <a className="headerTexts">Term & Conditions</a>
            <a className="headerTexts">Privacy Policy</a>
            <a className="headerTexts">Refund Policy</a>
          </nav>
          <nav className="flex flex-col gap-1 items-center sm:items-center md:items-start lg:items-start">
            <header className="headerTitle">Contact Us</header>
            <a className="headerTexts">Customer Support</a>
            <a className="headerTexts">tornittos@pizaa.com</a>
            <a className="headerTexts">support@tornittos.in</a>
          </nav>
          <nav className="flex flex-col gap-1">
            <header className="headerTitle">Follow Us</header>
            <div className="flex flex-row gap-3 justify-between sm:flex-col">
              <Link href="/">
                <FacebookIcon style={{ color: "white" }} />
              </Link>
              <Link href="/">
                <InstagramIcon style={{ color: "white" }} />
              </Link>
              <Link href="/">
                <TwitterIcon style={{ color: "white" }} />
              </Link>
              <Link href="/">
                <YouTubeIcon style={{ color: "white" }} />
              </Link>
            </div>
          </nav>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
