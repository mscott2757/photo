import React from "react";
import "./styles/app.scss";
import { Routes, Navigate, Route } from "react-router-dom";
import ReactGA from "react-ga";
import { NavContainer } from "./containers";
import { Accounts } from "./content/";
import { Social, Main } from "./components";

ReactGA.initialize("UA-109516063-1");

const LogPageView = () => {
  ReactGA.set({ page: window.location.pathname });
  ReactGA.pageview(window.location.pathname);
  return null;
};

export default () => {
  return (
    <div className="App">
      <NavContainer />
      <Routes>
        <Route element={<LogPageView />} />
        <Route exact path="/" element={<Navigate replace to="/recent" />} />
        <Route path="/:id?" element={<Main />} />
      </Routes>
      <Social accounts={Accounts} />
    </div>
  );
};
