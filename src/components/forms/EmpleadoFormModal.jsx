import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { InputLabelFlotante, InputSwitch } from "./form-components/Input";
import { getRecurso, registrar, editar } from "../servicios/ApiFetch";
import { validarCampo } from "./validador";
import Modal from "../modal/Modal";

const EmpleadoFormModal = ({ idEmpleado, token, cerrarModal, notificar }) => {
  const empleadoDefault = {
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
  const [empleadoData, setEmpleadoData] = useState(empleadoDefault);
  const [estatus, setEstatus] = useState(true);
  const [consultado, setConsultado] = useState(false);
  const [errores, setErrores] = useState({});

  useEffect(() => {
    if (!consultado && idEmpleado) {
      getRecurso("empleado", token, idEmpleado)
        .catch((error) => console.error("Error al obtener recurso: ", error))
        .then((request) => {
          setConsultado(true);
          if (!request.error) {
            setEmpleadoData(request.data);
          }
          if (request.error) {
            alert(request.messages.error);
            cerrarModal();
          }
        });
    }
    if (estatus && empleadoData.estatus !== "Activo") {
      setEmpleadoData({ ...empleadoData, estatus: "Activo" });
    }
    if (!estatus && empleadoData.estatus !== "Inactivo") {
      setEmpleadoData({ ...empleadoData, estatus: "Inactivo" });
    }
  }, [token, consultado, idEmpleado, cerrarModal, estatus, empleadoData]);

  const validarForm = () => {
    let auxErrores = {};
    for (const campo in reglasDeValidacion) {
      let error = validarCampo({
        valor: empleadoData[campo],
        validaciones: reglasDeValidacion[campo],
      });
      if (error) auxErrores[campo] = error;
    }
    setErrores(auxErrores);
  };

  const guardar = () => {
    validarForm();
    if (JSON.stringify(errores) !== "{}") return;
    if (!idEmpleado) {
      registrar("empleado", token, empleadoData).then((response) => {
        if (!response.error) {
          notificar(response.message, "success");
          cerrarModal();
        }
        if (response.error) {
          setErrores(response.messages);
        }
      });
    }
    if (idEmpleado) {
      editar("empleado", token, empleadoData, idEmpleado).then((response) => {
        if (!response.error) {
          notificar(response.message, "success");
          cerrarModal();
        }
        if (response.error) {
          setErrores(response.messages);
        }
      });
    }
  };

  const botonesEditar = [{ label: "Editar", metodo: guardar, icon: "bi-pencil-fill" }];
  const botonesRegistrar = [{ label: "Registrar", metodo: guardar, icon: "bi-plus" }];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.25 }}
    >
      <Modal
        cerrarModal={cerrarModal}
        titulo={idEmpleado ? "Editar Empleado" : "Registro de Empleado"}
        botones={idEmpleado ? botonesEditar : botonesRegistrar}
      >
        <div className="detallesForm">
          <fieldset>
            <legend>Datos Personales</legend>
            <InputLabelFlotante
              label="Cédula"
              value={empleadoData.cedula}
              errorNotificacion={errores.cedula ? errores.cedula : ""}
              onChange={(ev) => {
                setEmpleadoData({ ...empleadoData, cedula: ev.target.value });
              }}
              readOnly={idEmpleado ? "readOnly" : ""}
            />
            <InputLabelFlotante
              label="Nombre"
              value={empleadoData.nombre}
              errorNotificacion={errores.nombre ? errores.nombre : ""}
              onChange={(ev) => {
                setEmpleadoData({ ...empleadoData, nombre: ev.target.value });
              }}
            />
            <InputLabelFlotante
              label="Apellido"
              value={empleadoData.apellido}
              errorNotificacion={errores.apellido ? errores.apellido : ""}
              onChange={(ev) => {
                setEmpleadoData({ ...empleadoData, apellido: ev.target.value });
              }}
            />
          </fieldset>
          <fieldset>
            <legend>Teléfonos</legend>
            <InputLabelFlotante
              label="Teléfono Principal"
              value={empleadoData.telefonoPrincipal}
              errorNotificacion={
                errores.telefonoPrincipal ? errores.telefonoPrincipal : ""
              }
              onChange={(ev) => {
                setEmpleadoData({
                  ...empleadoData,
                  telefonoPrincipal: ev.target.value,
                });
              }}
            />
            <InputLabelFlotante
              label="Teléfono 2"
              value={empleadoData.telefono2}
              onChange={(ev) => {
                setEmpleadoData({ ...empleadoData, telefono2: ev.target.value });
              }}
            />
            <InputLabelFlotante
              label="Teléfono 3"
              value={empleadoData.telefono3}
              onChange={(ev) => {
                setEmpleadoData({ ...empleadoData, telefono3: ev.target.value });
              }}
            />
          </fieldset>
          <fieldset>
            <legend>Otros Datos</legend>
            <InputLabelFlotante
              label="Cargo"
              value={empleadoData.cargo}
              errorNotificacion={errores.cargo ? errores.cargo : ""}
              onChange={(ev) => {
                setEmpleadoData({ ...empleadoData, cargo: ev.target.value });
              }}
            />
            <InputSwitch label="Estatus" value={estatus} setValue={setEstatus} />
          </fieldset>
        </div>
      </Modal>
    </motion.div>
  );
};

export default EmpleadoFormModal;
