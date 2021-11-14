import React from "react";
import { Route, Routes } from "react-router-dom";

import Home from "./Components/Home";
import LandingPage from "./Components/LandingPage";
import NotFoundPage from "./Components/NotFoundPage";
import Log from "./Components/Log";

import "./App.css";

function App() {
  return (
    <React.Fragment>
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/" element={<LandingPage />} />
        <Route path="/logIn" element={<Log />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </React.Fragment>
  );
}

export default App;
