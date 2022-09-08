import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Servicio from "./Servicio";
import { getRecurso } from "./servicios/ApiFetch";

const Home = ({ token }) => {
  useEffect(() => {
    getRecurso("servicios", token)
      .catch((error) => console.error("Error: ", error))
      .then((request) => setServicios(request.data));
  }, [token]);

  const [servicios, setServicios] = useState([]);

  return (
    <motion.div
      initial={{ opacity: 0, scaleX: 0 }}
      animate={{ opacity: 1, scaleX: 1 }}
      exit={{ opacity: 0, scaleX: 0 }}
      transition={{ duration: 0.25 }}
    >
      <h1>Lista de Servicios</h1>
      {servicios.length > 0 ? (
        servicios.map((servicio) => {
          return <Servicio key={servicio.id} servicio={servicio} />;
        })
      ) : (
        <h2>No se encontraron servicios</h2>
      )}
    </motion.div>
  );
};

export default Home;
