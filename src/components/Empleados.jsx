import React, { useEffect, useState } from "react";
import useModal from "./modal/useModal";
import { motion } from "framer-motion";
import Empleado from "./Empleado";
import { getRecurso } from "./servicios/ApiFetch";
import { ButtonCircularIcon } from "./forms/form-components/Button";
import { SelectDropDown } from "./forms/form-components/Select";
import { optionsFiltroEmpleados as options } from "./forms/options-dropdown";
import { InputLabelFlotante } from "./forms/form-components/Input";
import EmpleadoFormModal from "./forms/EmpleadoFormModal";
import { notificar } from "./servicios/Notificacion";

export const Empleados = ({ token }) => {
  const [empleados, setEmpleados] = useState([]);
  const [tipoConsulta, setTipoConsulta] = useState("todos");
  const [textoBuscar, setTextoBuscar] = useState("");
  const [textoDisabled, setTextoDisabled] = useState(true);
  const [errorMessage, setErrorMessage] = useState("");
  const [modalAbierto, abrirModal, cerrarModal, idEmpleado, setIdEmpleado] =
    useModal(false);

  const getTipoConsulta = () => {
    if (tipoConsulta === "todos") return "";
    let opt = options.find((option) => option.value === tipoConsulta);
    if (opt.value === tipoConsulta) {
      return (
        <>
          <i className={"bi " + opt.icon} style={{ marginRight: "5px" }}></i>
          {opt.label}
        </>
      );
    }
  };

  useEffect(() => {
    if (empleados.length === 0 && tipoConsulta === "todos") {
      getRecurso("empleados", token).then((response) => {
        if (!response.error) {
          setEmpleados(response.data);
          setErrorMessage("");
        }
        if (response.error) {
          setEmpleados([]);
          setErrorMessage(response.messages.error);
        }
      });
    }
    if (tipoConsulta === "todos") {
      setTextoBuscar("");
    }
    setTextoDisabled(tipoConsulta === "todos");
  }, [empleados.length, tipoConsulta, token]);

  const buscarPorTexto = ({ texto, tipo }) => {
    let recurso = "empleados";
    const txt = texto !== undefined ? texto : textoBuscar;
    const tpo = tipo !== undefined ? tipo : tipoConsulta;
    if (txt && tpo !== "todos") {
      recurso = `${recurso}/${tpo}/${txt}`;
    }
    console.log("recurso:", recurso);
    getRecurso(recurso, token).then((request) => {
      if (!request.error) {
        setEmpleados(request.data);
        setErrorMessage("");
      }
      if (request.error) {
        setEmpleados([]);
        setErrorMessage(request.messages.error);
        notificar(request.messages.error, "warning");
      }
    });
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.25 }}
    >
      {modalAbierto && (
        <EmpleadoFormModal
          cerrarModal={cerrarModal}
          idEmpleado={idEmpleado}
          token={token}
          notificar={notificar}
        />
      )}
      <div className="optionsBar">
        <div className="ob-buttons">
          <ButtonCircularIcon
            icon="bi-plus-lg"
            titulo=""
            onClick={() => {
              abrirModal();
            }}
          />
        </div>
        <div className="ob-selector">
          <SelectDropDown
            value={tipoConsulta}
            setValue={setTipoConsulta}
            options={options}
            accion={buscarPorTexto}
          />
        </div>
        <div className="ob-input">
          <form>
            <InputLabelFlotante
              label={getTipoConsulta()}
              type="search"
              value={textoBuscar}
              onChange={(ev) => {
                setTextoBuscar(ev.target.value);
                buscarPorTexto({ texto: ev.target.value });
              }}
              onKeyPress={(ev) => {
                if (ev.key === "Enter") ev.preventDefault();
              }}
              disabled={textoDisabled}
            />
          </form>
        </div>
      </div>
      {empleados && empleados.length ? (
        empleados.map((empleado) => {
          return (
            <Empleado
              key={empleado.id}
              empleado={empleado}
              modoEdicion={abrirModal}
              setIdEnEdicion={setIdEmpleado}
            />
          );
        })
      ) : (
        <h2>{errorMessage}</h2>
      )}
    </motion.div>
  );
};

export default Empleados;
