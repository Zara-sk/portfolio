import React, { ChangeEvent, useEffect, useState } from "react";
import { NavLink } from "react-router-dom";

import "./index.scss";

const HeaderDesktop = () => {
  return (
    <header className="header desktop">
      <div className="block block-logo"></div>
      <div className="block block-nav">
        <NavLink to={"/"} className={"navlink"}>
          <p className="text">HOME</p>
        </NavLink>
        <NavLink to={"/skills"} className={"navlink"}>
          <p className="text">SKILLS</p>
        </NavLink>
        <NavLink to={"/projects"} className={"navlink"}>
          <p className="text">PROJECTS</p>
        </NavLink>
      </div>
      <div className="block block-contact">
        <p className="text">CONTACTS</p>
      </div>
    </header>
  );
};

export default HeaderDesktop;
