import React, { Fragment, FC } from "react";
import { NavLink } from "react-router-dom";
import { ILink } from "../../../types/link";

type NavbarProps = {
  links: ILink;
  changePage: (link: string) => void;
};

const NavbarDesktop: FC<NavbarProps> = ({ links, changePage }) => {
  return (
    <Fragment>
      {Object.keys(links).map((link) => (
        <NavLink
          to={link}
          className={`navlink ${links[link].cls} `}
          onClick={() => changePage(links[link].slug)}
        >
          <p className={`text ${links[link].cls}`}>{links[link].name}</p>
        </NavLink>
      ))}
    </Fragment>
  );
};

export default NavbarDesktop;
