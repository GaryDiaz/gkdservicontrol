import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Empleado from "./Empleado";
import { getRecurso } from "./servicios/ApiFetch";

export const Empleados = ({ token }) => {
  useEffect(() => {
    getRecurso("empleados", token)
      .catch((error) => console.error("Error: ", error))
      .then((request) => setEmpleados(request.data));
  });

  const [empleados, setEmpleados] = useState([]);

  return (
    <motion.div
      initial={{ opacity: 0, scaleX: 0 }}
      animate={{ opacity: 1, scaleX: 1 }}
      exit={{ opacity: 0, scaleX: 0 }}
      transition={{ duration: 0.25 }}
    >
      <h1>Lista de Empleados</h1>
      {empleados.length > 0 ? (
        empleados.map((empleado) => {
          return <Empleado key={empleado.id} empleado={empleado} />;
        })
      ) : (
        <h2>No se encontraron empleados</h2>
      )}
    </motion.div>
  );
};

export default Empleados;
