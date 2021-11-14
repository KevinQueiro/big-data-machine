import React from "react";

import IsLoged from "../auxFunctions/IsLoged";

import Dashboard from "./Dashboard";

const Home = () => {
  IsLoged();
  return (
    <div>
      <Dashboard />
    </div>
  );
};

export default Home;
