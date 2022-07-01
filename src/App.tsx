import React, { useEffect } from "react";

import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Footer } from "./components/Footer";
import { HeaderCombined } from "./components/Header";
import { useActions } from "./hooks/useActions";

const App = () => {
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
      <div>
        <HeaderCombined />
        <Routes>
          <Route path={"/test"} element={<div>test</div>} />
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );
};

export default App;
