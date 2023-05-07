import React from "react";
import "./styles/app.scss";
import { styled, createGlobalStyle, ThemeProvider } from "styled-components";
import { Routes, Navigate, Route } from "react-router-dom";
import ReactGA from "react-ga";
import { NavContainer } from "./containers";
import { Social, Main } from "./components";
import { AppContextProvider } from "./context";
import { theme } from "./theme";
import circular from './fonts/Circular.otf';

ReactGA.initialize("UA-109516063-1");

const LogPageView = () => {
  ReactGA.set({ page: window.location.pathname });
  ReactGA.pageview(window.location.pathname);
  return null;
};

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
  }

  * {
    box-sizing: border-box;
  }

  @import '~font-awesome/css/font-awesome.min.css';
  @font-face(Futura, fonts/Futura);
  @font-face {
    font-family: "Circular";
    src: url(${circular}) format("opentype");
  }
`;

const AppContainer = styled.div`
  min-height: 100vh;
  min-width: 100vw;
  font-family: Circular, Helvetica;
`;

export default () => (
  <AppContextProvider>
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <AppContainer>
        <NavContainer />
        <Routes>
          <Route element={<LogPageView />} />
          <Route exact path="/" element={<Navigate replace to="/current" />} />
          <Route path="/:id?" element={<Main />} />
        </Routes>
        <Social />
      </AppContainer>
    </ThemeProvider>
  </AppContextProvider>
);
