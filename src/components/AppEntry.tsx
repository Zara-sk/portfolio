import React, { Suspense, useEffect, lazy, Fragment } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import { HeaderCombined } from "../components/Header";
import { Footer } from "../components/Footer";

import { useActions } from "../hooks/useActions";

import "../normalize.scss";
import "../colormap.scss";
import "../app.scss";

const HomePage = lazy(() => import("../components/Home"));
const SkillsPage = lazy(() => import("../components/Skills"));
const ProjectsPage = lazy(() => import("../components/Projects"));

const page_routes = [
  { path: "/", name: "Home", Component: HomePage },
  { path: "/skills", name: "skills", Component: SkillsPage },
  { path: "/projects", name: "projects", Component: ProjectsPage },
];

const AppEntry: React.FC = () => {
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
    <Fragment>
      <HeaderCombined />
      <Suspense>
        <Routes>
          {page_routes.map(({ path, Component }) => (
            <Route key={path} path={path} element={<Component />} />
          ))}
        </Routes>
      </Suspense>
      <Footer />
    </Fragment>
  );
};

export default AppEntry;
