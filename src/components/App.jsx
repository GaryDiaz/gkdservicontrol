import { Route, Routes, useLocation } from "react-router-dom";
import { useState } from "react";
import { AnimatePresence } from "framer-motion";
import Navigation from "./Navigation";
import Home from "./Home";
import Servicios from "./Servicios";
import Clientes from "./Clientes";
import Empleados from "./Empleados";
import Usuarios from "./Usuarios";
import Login from "./Login";
import { ToastContainer } from "react-toastify";
import "../css/gkd-toastify.min.css";

const App = () => {
  const [token, setToken] = useState(localStorage.getItem("GKD-Token"));
  const location = useLocation();
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

  if (!token && location.pathname !== "/login") {
    setTimeout(toLogin(), 500);
  }
  return (
    <div>
      {token ? <Navigation /> : <br />}
      <div className="container">
        <AnimatePresence>
          <Routes location={location} key={location.pathname}>
            <Route
              path="/"
              exact
              element={token ? <Home token={token} /> : toLoginMessage}
            />
            <Route
              path="/servicios"
              element={token ? <Servicios token={token} /> : toLoginMessage}
            />
            <Route
              path="/clientes"
              element={token ? <Clientes token={token} /> : toLoginMessage}
            />
            <Route
              path="/empleados"
              element={token ? <Empleados token={token} /> : toLoginMessage}
            />
            <Route
              path="/usuarios"
              element={token ? <Usuarios token={token} /> : toLoginMessage}
            />
            <Route path="/login" element={<Login token={token} setToken={setToken} />} />
          </Routes>
        </AnimatePresence>
      </div>
      <ToastContainer />
    </div>
  );
};

export default App;
