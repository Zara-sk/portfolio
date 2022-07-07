import React, { useState } from "react";
import { useTypedSelector } from "../../hooks/useTypedSelector";
import { ILink } from "../../types/link";
import NavbarDesktop from "./Navbar/NavbarDesktop";

import "./index.scss";

const links: ILink = {
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
      <section className="block block-logo"></section>
      <section className={"block block-nav " + transition}>
        <NavbarDesktop links={links} changePage={changePage}></NavbarDesktop>
      </section>
      <section className="block block-contact">
        <p className={"text contacts"}>CONTACTS</p>
      </section>
    </header>
  );
};

export default HeaderDesktop;
