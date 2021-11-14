import React from "react";
import { NavLink } from "react-router-dom";

function LandingPage() {
if (sessionStorage.getItem('active') === "false"){
  return (
    <div>
      PRESENTACION
      <NavLink to="/home">
        <button>Ingresar</button>
      </NavLink>
    </div>
  ); 
} else {
  return (
    <div>
      BIENVENIDO
      <NavLink to="/home">
        <button>Ingresar</button>
      </NavLink>
    </div>
  );
}
}

export default LandingPage;
