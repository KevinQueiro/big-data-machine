import React, { useState } from "react";

import logIn from "../auxFunctions/logIn";

const Log = () => {
  const [datos, setDatos] = useState({ user: "", pass: "" });

  const hadleInputChange = (event) => {
    setDatos({
      ...datos,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    let res = logIn(event.target[0].value, event.target[1].value);
    if (res === "OK") {
      sessionStorage.setItem("active", true);
      window.location.replace("/");
    } else {
      alert(res);
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>
          Usuario:
          <input
            type="text"
            name="user"
            value={datos.user}
            onChange={hadleInputChange}
          />
        </label>
        <label>
          Contraseña:
          <input
            type="password"
            name="pass"
            value={datos.pass}
            onChange={hadleInputChange}
          />
        </label>
        <input type="submit" value="Iniciar Sesion" />
      </form>
    </div>
  );
};

export default Log;
