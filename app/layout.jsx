import React from "react";
import "../styles/global.css";
import NavBar from "../components/NavBar/Nav";
import Provider from "../components/Shared/Provider";
import Footer from "@/components/Footer/Footer.jsx";
import "react-toastify/dist/ReactToastify.css";

export const metadata = {
  title: { default: "TORNITTO'S PIZZA", template: " %s | TORNITTO'S " },
  description: "the party can't start without pizza",
  icons: "/assets/images/logo.png",
};

const RootLayout = ({ children }) => {
  return (
    <html lang="en">
      <body>
        <Provider>
          <div>
            <NavBar />
            {children}
            <Footer />
          </div>
        </Provider>
      </body>
    </html>
  );
};

export default RootLayout;
