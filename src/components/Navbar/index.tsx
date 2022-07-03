import { lazy } from "react";

const NavbarMobile = lazy(() => import("./NavbarMobile"));
const NavbarDesktop = lazy(() => import("./NavbarDesktop"));

export { NavbarMobile, NavbarDesktop };
