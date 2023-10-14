import React from "react";
import "../styles/global.css";
import NavBar from "../components/Nav";
import Provider from "../components/Provider";

export const metadata = {
  title: "TORNITTO'S PIZZA",
  description: "the party can't start without pizza",
};

const RootLayout = ({ children }) => {
  return (
    <html lang="en">
      <body>
        <Provider>
          <div>
            <NavBar />
            {children}
          </div>
        </Provider>
      </body>
    </html>
  );
};

export default RootLayout;
