import React, { lazy, useEffect } from "react";
import Navbar from "../Navbar";

// const NavbarLazy = lazy(() => import("../Navbar"));

const HeaderMobile: React.FC = () => {
  useEffect(() => {
    console.log("mobile loaded");
  }, []);
  return (
    <div>
      Header Mobile
      <Navbar />
    </div>
  );
};

export default HeaderMobile;
