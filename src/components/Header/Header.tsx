import React, { lazy, Suspense } from "react";
import { useTypedSelector } from "../../hooks/useTypedSelector";

const HeaderDesktopLazy = lazy(() => import("./HeaderDesktop"));
const HeaderMobileLazy = lazy(() => import("./HeaderMobile"));

const Header: React.FC = () => {
  const window_s = useTypedSelector((state) => state.window);

  return (
    <Suspense fallback={<div className="header blank"></div>}>
      {window_s.is_mobile ? <HeaderMobileLazy /> : <HeaderDesktopLazy />}
    </Suspense>
  );
};

export default Header;
