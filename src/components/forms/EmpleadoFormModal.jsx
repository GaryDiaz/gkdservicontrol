import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { InputLabelFlotante, InputSwitch } from "./form-components/Input";
import Modal from "../modal/Modal";
import useEmpleado from "../hooks/useEmpleado";

const EmpleadoFormModal = ({ idEmpleado, token, cerrarModal, notificar }) => {
  const empleado = useEmpleado();
  const [estatus, setEstatus] = useState(true);
  const [consultado, setConsultado] = useState(false);

  useEffect(() => {
    if (!consultado && idEmpleado) {
      empleado.buscar({ id: idEmpleado, token }).then((request) => {
        setConsultado(true);
        if (!request.error) {
          empleado.setData(request.data);
        }
        if (request.error) {
          alert(request.messages.error);
          cerrarModal();
        }
      });
    }
    if (estatus && empleado.data.estatus !== "Activo") {
      empleado.setData({ ...empleado.data, estatus: "Activo" });
    }
    if (!estatus && empleado.data.estatus !== "Inactivo") {
      empleado.setData({ ...empleado.data, estatus: "Inactivo" });
    }
  }, [token, consultado, idEmpleado, cerrarModal, estatus, empleado]);

  const guardarEmpleado = () => {
    empleado.guardar({ id: idEmpleado, token }).then((response) => {
      if (!response.error) {
        notificar(response.message, "success");
        cerrarModal();
      }
      if (response.error) {
        empleado.setErrores(response.messages);
      }
    });
  };

  const botonesEditar = [
    { label: "Editar", metodo: guardarEmpleado, icon: "bi-pencil-fill" },
  ];
  const botonesRegistrar = [
    { label: "Registrar", metodo: guardarEmpleado, icon: "bi-plus" },
  ];

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
              value={empleado.data.cedula}
              errorNotificacion={empleado.errores.cedula ? empleado.errores.cedula : ""}
              onChange={(ev) => {
                empleado.setData({ ...empleado.data, cedula: ev.target.value });
              }}
              readOnly={idEmpleado ? "readOnly" : ""}
            />
            <InputLabelFlotante
              label="Nombre"
              value={empleado.data.nombre}
              errorNotificacion={empleado.errores.nombre ? empleado.errores.nombre : ""}
              onChange={(ev) => {
                empleado.setData({ ...empleado.data, nombre: ev.target.value });
              }}
            />
            <InputLabelFlotante
              label="Apellido"
              value={empleado.data.apellido}
              errorNotificacion={
                empleado.errores.apellido ? empleado.errores.apellido : ""
              }
              onChange={(ev) => {
                empleado.setData({ ...empleado.data, apellido: ev.target.value });
              }}
            />
          </fieldset>
          <fieldset>
            <legend>Teléfonos</legend>
            <InputLabelFlotante
              label="Teléfono Principal"
              value={empleado.data.telefonoPrincipal}
              errorNotificacion={
                empleado.errores.telefonoPrincipal
                  ? empleado.errores.telefonoPrincipal
                  : ""
              }
              onChange={(ev) => {
                empleado.setData({
                  ...empleado.data,
                  telefonoPrincipal: ev.target.value,
                });
              }}
            />
            <InputLabelFlotante
              label="Teléfono 2"
              value={empleado.data.telefono2}
              onChange={(ev) => {
                empleado.setData({ ...empleado.data, telefono2: ev.target.value });
              }}
            />
            <InputLabelFlotante
              label="Teléfono 3"
              value={empleado.data.telefono3}
              onChange={(ev) => {
                empleado.setData({ ...empleado.data, telefono3: ev.target.value });
              }}
            />
          </fieldset>
          <fieldset>
            <legend>Otros Datos</legend>
            <InputLabelFlotante
              label="Cargo"
              value={empleado.data.cargo}
              errorNotificacion={empleado.errores.cargo ? empleado.errores.cargo : ""}
              onChange={(ev) => {
                empleado.setData({ ...empleado.data, cargo: ev.target.value });
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
