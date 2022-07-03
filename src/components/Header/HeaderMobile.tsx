import React, { lazy, useEffect } from "react";
import { NavbarMobile } from "../Navbar";

import "./index.scss";

const HeaderMobile: React.FC = () => {
  return (
    <div className="header mobile">
      <NavbarMobile />
    </div>
  );
};

export default HeaderMobile;
