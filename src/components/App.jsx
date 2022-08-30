import { Route, Routes, useLocation } from "react-router-dom";
import { Empleados } from "./Empleados";
import { Usuarios } from "./Usuarios";
import { Clientes } from "./Clientes";
import { Servicios } from "./Servicios";
import { Login } from "./Login";
import { Navigation } from "./Navigation";
import { Home } from "./Home";
import { useState } from "react";

function App() {
  const [token, setToken] = useState(localStorage.getItem("gkd-token"));
  const { pathname } = useLocation();
  console.log(pathname);
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
          <Route path="/" exact element={token ? <Home /> : toLoginMessage} />
          <Route path="/servicios" element={token ? <Servicios /> : toLoginMessage} />
          <Route path="/clientes" element={token ? <Clientes /> : toLoginMessage} />
          <Route path="/empleados" element={token ? <Empleados /> : toLoginMessage} />
          <Route path="/usuarios" element={token ? <Usuarios /> : toLoginMessage} />
          <Route path="/login" element={<Login setToken={setToken} />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
