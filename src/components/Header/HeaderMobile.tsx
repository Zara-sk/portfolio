import React, { useEffect } from "react";
import NavbarMobile from "./Navbar/NavbarMobile";

import "./index.scss";

const HeaderMobile: React.FC = () => {
  return (
    <div className="header mobile">
      <NavbarMobile />
    </div>
  );
};

export default HeaderMobile;
