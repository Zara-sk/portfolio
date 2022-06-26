import React from "react";

import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Footer } from "./components/Footer";
import { Header } from "./components/Header";

const App = () => {
  return (
    <BrowserRouter>
      <div>
        <Header />
        <Routes>
          <Route path={"/test"} element={<div>test</div>} />
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );
};

export default App;
