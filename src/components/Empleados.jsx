import React, { useEffect, useState } from "react";
import useModal from "./hooks/useModal";
import useFiltroBusqueda from "./hooks/useFiltroBusqueda";
import useEmpleado from "./hooks/useEmpleado";
import { motion } from "framer-motion";
import Empleado from "./Empleado";
import { ButtonCircularIcon } from "./forms/form-components/Button";
import { SelectDropDown } from "./forms/form-components/Select";
import { optionsFiltroEmpleados as options } from "./forms/options-dropdown";
import { InputLabelFlotante } from "./forms/form-components/Input";
import EmpleadoFormModal from "./forms/EmpleadoFormModal";
import { notificar } from "./servicios/Notificacion";

export const Empleados = ({ token }) => {
  const empleado = useEmpleado([]);
  const [errorMessage, setErrorMessage] = useState("");
  const filtro = useFiltroBusqueda("empleados");
  const modal = useModal(false);

  const getTipoConsulta = () => {
    if (filtro.tipoConsulta === "todos") return "";
    let opt = options.find((option) => option.value === filtro.tipoConsulta);
    if (opt.value === filtro.tipoConsulta) {
      return (
        <>
          <i className={"bi " + opt.icon} style={{ marginRight: "5px" }}></i>
          {opt.label}
        </>
      );
    }
  };

  useEffect(() => {
    if (empleado.empleados.length === 0 && filtro.tipoConsulta === "todos") {
      empleado.listar({ recurso: "empleados", token }).then((response) => {
        if (!response.error) {
          empleado.setEmpleados(response.data);
          setErrorMessage("");
        }
        if (response.error) {
          empleado.setEmpleados([]);
          setErrorMessage(response.messages.error);
        }
      });
    }
  }, [empleado, filtro.tipoConsulta, token]);

  const buscarPorTexto = ({ texto, tipo }) => {
    const recurso = filtro.recursoFiltro({ texto, tipo });
    empleado.listar({ recurso, token }).then((request) => {
      if (!request.error) {
        empleado.setEmpleados(request.data);
        setErrorMessage("");
      }
      if (request.error) {
        empleado.setEmpleados([]);
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
      {modal.esVisible && (
        <EmpleadoFormModal
          cerrarModal={modal.cerrar}
          idEmpleado={modal.id}
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
              modal.abrir();
            }}
          />
        </div>
        <div className="ob-selector">
          <SelectDropDown
            value={filtro.tipoConsulta}
            setValue={filtro.setTipoConsulta}
            options={options}
            accion={buscarPorTexto}
          />
        </div>
        <div className="ob-input">
          <form>
            <InputLabelFlotante
              label={getTipoConsulta()}
              type="search"
              value={filtro.textoBuscar}
              onChange={(ev) => {
                filtro.setTextoBuscar(ev.target.value);
                buscarPorTexto({ texto: ev.target.value });
              }}
              onKeyPress={(ev) => {
                if (ev.key === "Enter") ev.preventDefault();
              }}
              disabled={filtro.textoDisabled}
            />
          </form>
        </div>
      </div>
      {empleado.empleados && empleado.empleados.length ? (
        empleado.empleados.map((empleado) => {
          return (
            <Empleado
              key={empleado.id}
              empleado={empleado}
              modoEdicion={modal.abrir}
              setIdEnEdicion={modal.setId}
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
