import { Route, Routes, useLocation } from "react-router-dom";
import { useState } from "react";
import Navigation from "./Navigation";
import Home from "./Home";
import Servicios from "./Servicios";
import Clientes from "./Clientes";
import Empleados from "./Empleados";
import Usuarios from "./Usuarios";
import Login from "./Login";

const App = () => {
  const API_REST = "http://192.168.1.109/gkd_servicontrol_api/";
  const [token, setToken] = useState(localStorage.getItem("GKD-Token"));
  const { pathname } = useLocation();
  const toLogin = () => {
    window.location.href = "/login";
  };
  const toLoginMessage = (
    <div>
      <h1>Inicio de Sesión Requerido</h1>
      <p>
        Redirecinando a <a href="/login">Login</a>
      </p>
    </div>
  );

  if (!token && pathname !== "/login") {
    setTimeout(toLogin(), 500);
  }
  return (
    <div>
      {token ? <Navigation /> : <br />}
      <div style={{ marginTop: "60px" }} className="container">
        <Routes>
          <Route
            path="/"
            exact
            element={token ? <Home token={token} apiRest={API_REST} /> : toLoginMessage}
          />
          <Route path="/servicios" element={token ? <Servicios /> : toLoginMessage} />
          <Route path="/clientes" element={token ? <Clientes /> : toLoginMessage} />
          <Route path="/empleados" element={token ? <Empleados /> : toLoginMessage} />
          <Route path="/usuarios" element={token ? <Usuarios /> : toLoginMessage} />
          <Route
            path="/login"
            element={<Login token={token} setToken={setToken} apiRest={API_REST} />}
          />
        </Routes>
      </div>
    </div>
  );
};

export default App;
