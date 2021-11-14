import React from "react";
import { NavLink } from "react-router-dom";

function LandingPage() {
  return (
    <div>
      Landing Page
      <NavLink to="/home">
        <button>Ingresar</button>
      </NavLink>
    </div>
  );
}

export default LandingPage;
