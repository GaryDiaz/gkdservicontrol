import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Servicio from "./Servicio";
import { getRecurso } from "./servicios/ApiFetch";

const Home = ({ token }) => {
  const [servicios, setServicios] = useState([]);
  const [errorMensaje, setErrorMensaje] = useState("");
  useEffect(() => {
    getRecurso("servicios", token)
      .catch((error) => console.error("Error: ", error))
      .then((response) => {
        console.log("llego la respuesta");
        console.log(response);
        if (!response.error) {
          setServicios(response.data);
        }
        if (response.error) {
          if ((response.error = 401)) {
            localStorage.removeItem("GKD-Token");
          }
          setErrorMensaje(response.messages.error);
        }
      });
  }, [token]);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.25 }}
    >
      <h1>Lista de Servicios</h1>
      {servicios.length ? (
        servicios.map((servicio) => {
          return <Servicio key={servicio.id} servicio={servicio} />;
        })
      ) : (
        <h2>{errorMensaje}</h2>
      )}
    </motion.div>
  );
};

export default Home;
