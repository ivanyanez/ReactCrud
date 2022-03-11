import "bootstrap/dist/css/bootstrap.min.css";
import "font-awesome/css/font-awesome.min.css";
import "./App.css";
import React from "react";
import { BrowserRouter } from "react-router-dom";

import Logo from "../components/templates/Logo";
import Nav from "../components/templates/Nav";
import Home from "../components/home/Home";
import Footer from "../components/templates/Footer";
import Main from "../components/templates/Main";
import Routes from "./Routes";

export default (props) => (
  <BrowserRouter>
    <div className="app">
      <Logo />
      <Nav />

      <Main>
        <Routes />
      </Main>

      <Footer />
    </div>
  </BrowserRouter>
);
