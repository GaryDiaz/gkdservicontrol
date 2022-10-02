import React from "react";
import { ButtonCircularIcon, ButtonIconLabel } from "../forms/form-components/Button";

const Modal = ({ cerrarModal, titulo, children, botones = [] }) => {
  return (
    <div className={"modal"}>
      <div className="card">
        <div className="card-header">
          <h1>{titulo}</h1>
          <ButtonCircularIcon
            icon="bi-x"
            onClick={() => {
              cerrarModal();
            }}
          />
        </div>
        <div className="card-content">{children}</div>
        <div className="card-footer">
          <div className="botones">
            {botones.map((boton) => {
              return (
                <ButtonIconLabel
                  titulo={boton.label}
                  icon={boton.icon && boton.icon}
                  onClick={() => {
                    boton.metodo();
                  }}
                  key={boton.label}
                />
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
