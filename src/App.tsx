import React, { lazy, Suspense } from "react";
import { BrowserRouter } from "react-router-dom";

import AppLoader from "./components/AppLoader";

const AppEntry = lazy(() => import("./components/AppEntry"));

const App = () => {
  return (
    <BrowserRouter>
      <Suspense fallback={<AppLoader />}>
        <AppEntry />
      </Suspense>
    </BrowserRouter>
  );
};

export default App;
