import { useState } from "react";
import { getRecurso, registrar, editar } from "../servicios/ApiFetch";
import { validarCampo } from "../forms/validador";

const useEmpleado = () => {
  const defaultData = {
    cedula: "",
    nombre: "",
    apellido: "",
    telefonoPrincipal: "",
    telefono2: "",
    telefono3: "",
    cargo: "",
    estatus: "Activo",
  };

  const reglasDeValidacion = {
    cedula: ["noVacio", "numeroNatural"],
    nombre: ["noVacio"],
    apellido: ["noVacio"],
    telefonoPrincipal: ["noVacio"],
    cargo: ["noVacio"],
  };

  const [data, setData] = useState(defaultData);
  const [empleados, setEmpleados] = useState([]);
  const [errores, setErrores] = useState({});

  const listar = async ({ recurso, token }) => {
    return await getRecurso(recurso, token);
  };

  const buscar = async ({ id, token }) => {
    return await getRecurso("empleado", token, id);
  };

  const guardar = async ({ id, token }) => {
    validarForm();
    if (JSON.stringify(errores) !== "{}") return;
    if (!id) {
      return await registrar("empleado", token, data);
    }
    if (id) {
      return await editar("empleado", token, data, id);
    }
  };

  const validarForm = () => {
    let auxErrores = {};
    for (const campo in reglasDeValidacion) {
      let error = validarCampo({
        valor: data[campo],
        validaciones: reglasDeValidacion[campo],
      });
      if (error) auxErrores[campo] = error;
    }
    setErrores(auxErrores);
  };

  return {
    listar,
    guardar,
    buscar,
    empleados,
    setEmpleados,
    data,
    setData,
    errores,
    setErrores,
  };
};

export default useEmpleado;
