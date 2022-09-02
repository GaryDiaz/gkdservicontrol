import React, { useEffect } from "react";
import { useState } from "react";
import Servicio from "./Servicio";

const Home = ({ apiRest, token }) => {
  useEffect(() => {
    fetch(apiRest + "servicios", {
      method: "GET",
      headers: {
        "Content-Type": "aplication/json",
        "GKD-Token": token,
      },
    })
      .then((response) => response.json())
      .catch((error) => console.error("Error: ", error))
      .then((request) => setServicios(request.data));
  }, [apiRest, token]);

  const [servicios, setServicios] = useState([]);

  return servicios.length > 0 ? (
    <div>
      <h1>Lista de Servicios</h1>
      {servicios.map((servicio) => {
        return <Servicio key={servicio.id} servicio={servicio} />;
      })}
    </div>
  ) : (
    <h2>No se encontraron servicios</h2>
  );
};

export default Home;
