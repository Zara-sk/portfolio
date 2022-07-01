import React, { Suspense, useEffect } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import { HeaderCombined } from "./components/Header";
import { Footer } from "./components/Footer";

import { useActions } from "./hooks/useActions";

const App: React.FC = () => {
  const { fetchWindowWidth, fetchWindowScroll } = useActions();

  useEffect(() => {
    fetchWindowWidth();
    fetchWindowScroll();
    window.addEventListener("resize", fetchWindowWidth);
    window.addEventListener("scroll", fetchWindowScroll);

    return function () {
      window.removeEventListener("resize", fetchWindowWidth);
      window.removeEventListener("scroll", fetchWindowScroll);
    };
  }, []);

  return (
    <BrowserRouter>
      <HeaderCombined />
      <Routes>
        <Route path={"/"} element={<div>MainPage</div>} />
        <Route path={"/test"} element={<div>test</div>} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};

export default App;
