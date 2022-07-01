import { lazy } from "react";

const HeaderMobile = lazy(() => import("./HeaderMobile"));
const HeaderDesktop = lazy(() => import("./HeaderDesktop"));

export { HeaderMobile, HeaderDesktop };
export { default as HeaderCombined } from "./Header";
