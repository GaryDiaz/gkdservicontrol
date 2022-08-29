import { Route, Routes } from "react-router-dom";
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
  return (
    <div>
      {token} ? (
      <Navigation />
      ):(
      <br />)
      <div style={{ marginTop: "60px" }} className="container">
        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/servicios" element={<Servicios />} />
          <Route path="/clientes" element={<Clientes />} />
          <Route path="/empleados" element={<Empleados />} />
          <Route path="/usuarios" element={<Usuarios />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
