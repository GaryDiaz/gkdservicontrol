import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Cliente from "./Cliente";
import { getList } from "./servicios/ApiFetch";

const Clientes = ({ token }) => {
  useEffect(() => {
    getList("clientes", token)
      .catch((error) => console.error("Error: ", error))
      .then((request) => setClientes(request.data));
  }, [token]);

  const [clientes, setClientes] = useState([]);

  return (
    <motion.div
      initial={{ opacity: 0, scaleX: 0 }}
      animate={{ opacity: 1, scaleX: 1 }}
      exit={{ opacity: 0, scaleX: 0 }}
      transition={{ duration: 0.25 }}
    >
      <h1>Lista de Clientes</h1>
      {clientes.length > 0 ? (
        clientes.map((cliente) => {
          return <Cliente key={cliente.id} cliente={cliente} />;
        })
      ) : (
        <h2>No se encontraron clientes</h2>
      )}
    </motion.div>
  );
};

export default Clientes;
