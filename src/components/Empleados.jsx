import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Empleado from "./Empleado";
import { getRecurso } from "./servicios/ApiFetch";
import { ImageButton } from "./metroform/MetroButton";
import { SelectOptionTemplate } from "./metroform/MetroSelect";
import { Input } from "./metroform/MetroInput";

export const Empleados = ({ token }) => {
  useEffect(() => {
    getRecurso("empleados", token)
      .catch((error) => console.error("Error: ", error))
      .then((request) => setEmpleados(request.data));
  });

  const [empleados, setEmpleados] = useState([]);
  const options = [
    { value: "nombre", label: "Nombre", icon: "bi-card-text" },
    { value: "apellido", label: "Apellido", icon: "bi-card-text" },
    { value: "cedula", label: "Cédula", icon: "bi-card-heading" },
    { value: "cargo", label: "Cargo", icon: "bi-person-workspace" },
    { value: "telefono", label: "Teléfono", icon: "bi-telephone" },
  ];

  return (
    <motion.div
      initial={{ opacity: 0, scaleX: 0 }}
      animate={{ opacity: 1, scaleX: 1 }}
      exit={{ opacity: 0, scaleX: 0 }}
      transition={{ duration: 0.25 }}
    >
      <div className="optionsBar">
        <div className="ob-buttons">
          <ImageButton icon="bi-plus-lg" titulo="Agregar" />
        </div>
        <div className="ob-selector">
          <SelectOptionTemplate options={options} />
        </div>
        <div className="ob-input">
          <form>
            <Input searchButton={true} />
          </form>
        </div>
      </div>
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
