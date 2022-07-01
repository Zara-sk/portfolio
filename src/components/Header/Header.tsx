import React, { lazy, Suspense } from "react";
import { useTypedSelector } from "../../hooks/useTypedSelector";

const HeaderDesktopLazy = lazy(() => import("./HeaderDesktop"));
const HeaderMobileLazy = lazy(() => import("./HeaderMobile"));

const Header = () => {
  const state = useTypedSelector((state) => state);
  const isMobile = false;

  return (
    <Suspense>
      {isMobile ? <HeaderMobileLazy /> : <HeaderDesktopLazy />}
    </Suspense>
  );
};

export default Header;
