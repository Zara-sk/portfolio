import React, { ChangeEvent, useEffect, useState } from "react";
import { NavLink } from "react-router-dom";

import "./index.scss";

const HeaderDesktop = () => {
  return (
    <header className="header desktop">
      <NavLink to={"/"} className={"navlink de-active"}>
        Home
      </NavLink>
      <NavLink to={"/skills"} className={"navlink de-active"}>
        Skills
      </NavLink>
      <NavLink to={"/projects"} className={"navlink de-active"}>
        Projects
      </NavLink>
    </header>
  );
};

export default HeaderDesktop;
