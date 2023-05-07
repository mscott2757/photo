import React from "react";
import "./styles/app.scss";
import { ThemeProvider } from 'styled-styled';
import { Routes, useLocation, Navigate, Route } from "react-router-dom";
import { TransitionGroup, CSSTransition } from "react-transition-group";
import ReactGA from "react-ga";
import { NavContainer } from "./containers";
import { Accounts } from "./content/";
import { Social, Main } from "./components";
import { AppContextProvider } from "./context";
import { theme } from './theme';

ReactGA.initialize("UA-109516063-1");

const LogPageView = () => {
  ReactGA.set({ page: window.location.pathname });
  ReactGA.pageview(window.location.pathname);
  return null;
};

export default () => {
  return (
    <AppContextProvider>
      <ThemeProvider theme={theme}>
      <div className="App">
        <NavContainer />
        <Routes>
          <Route element={<LogPageView />} />
          <Route exact path="/" element={<Navigate replace to="/current" />} />
          <Route path="/:id?" element={<Main />} />
        </Routes>
        <Social accounts={Accounts} />
      </div>
      </ThemeProvider>
    </AppContextProvider>
  );
};
