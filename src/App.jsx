import React, {useEffect} from "react";
import "./styles/app.scss";
import { Routes, Navigate, Route } from "react-router-dom";
import ReactGA from "react-ga4";
import { NavContainer } from "./containers";
import { Accounts } from "./content/";
import { Social, Main } from "./components";

ReactGA.initialize("G-1DTFTH6FWG");

const LogPageView = () => {
  useEffect(() => {
    console.log('sending');
    ReactGA.send({
      hitType: "pageview",
      page: window.location.pathname
    });
  }, []);
  return null;
};

export default () => {
  return (
    <div className="App">
      <NavContainer />
      <LogPageView />
      <Routes>
        <Route path="*" element={<LogPageView />} />
        <Route exact path="/" element={<Navigate replace to="/recent" />} />
        <Route path="/:id?" element={<Main />} />
      </Routes>
      <Social accounts={Accounts} />
    </div>
  );
};
