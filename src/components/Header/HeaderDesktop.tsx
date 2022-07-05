import React, { ChangeEvent, useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { useTypedSelector } from "../../hooks/useTypedSelector";

import "./index.scss";

interface items {
  [key: string]: { name: string; cls: string; slug: string };
}

const links: items = {
  "/": { name: "HOME", cls: "home", slug: "h" },
  "/skills": { name: "SKILLS", cls: "skills", slug: "s" },
  "/projects": { name: "PROJECTS", cls: "projects", slug: "p" },
};

const HeaderDesktop = () => {
  const [page, setPage] = useState(links[window.location.pathname].slug);
  const [transition, setTransition] = useState(
    links[window.location.pathname].slug
  );
  const isScrolled = useTypedSelector((state) => state.window.scrollY) > 90;

  const changePage = (to: string) => {
    if (page == to) return;
    setTransition(`${page}t${to}`);
    setPage(to);
  };

  return (
    <header className={"header desktop" + (isScrolled ? " hide" : " show")}>
      <div className="block block-logo"></div>
      <div className={"block block-nav " + transition}>
        {Object.keys(links).map((link) => (
          <NavLink
            to={link}
            className={`navlink ${links[link].cls} `}
            onClick={() => changePage(links[link].slug)}
          >
            <p className={`text ${links[link].cls}`}>{links[link].name}</p>
          </NavLink>
        ))}
      </div>
      <div className="block block-contact">
        <p className={"text contacts"}>CONTACTS</p>
      </div>
    </header>
  );
};

export default HeaderDesktop;
