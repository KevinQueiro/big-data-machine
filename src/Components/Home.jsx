import React from "react";

import IsLoged from "../auxFunctions/IsLoged";

import Dashboard from "./Dashboard";

const Home = () => {
  IsLoged();

const handleLogOut = () => {
  sessionStorage.setItem('active',false);
  window.location.replace('/');
}

  return (
    <div>
      <Dashboard />
      <button onClick={handleLogOut}>logOut</button>
    </div>
  );
};

export default Home;
