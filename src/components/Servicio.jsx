import React from "react";
import Cliente from "./Cliente";
import Empleado from "./Empleado";
import MomentDate from "./moment-date/MomentDate";

const Servicio = ({ servicio }) => {
  return (
    <div className="card" data-shadow="true">
      <div className="card-header">
        <div>
          {servicio.fechaProximaVisita ? (
            <MomentDate
              label="Próxima Visita"
              date={servicio.fechaProximaVisita}
              isDateTime={true}
              includeRelativeDate={true}
            />
          ) : (
            <MomentDate
              label="Visita"
              date={servicio.fechaVisita}
              isDateTime={true}
              includeRelativeDate={true}
            />
          )}
        </div>
        <div>
          <h3>
            Servicio Nro. {servicio.id} ({servicio.estatus})
          </h3>
        </div>
      </div>
      <div className="card-content">
        <div className="detalles">
          <MomentDate label="Fecha de Servicio" date={servicio.fechaServicio} />
          <MomentDate
            label="Visita"
            date={servicio.fechaVisita}
            isDateTime={true}
            includeRelativeDate={true}
          />
          <MomentDate
            label="Próxima Visita"
            date={servicio.fechaProximaVisita}
            isDateTime={true}
            includeRelativeDate={true}
          />
          <MomentDate
            label="Fin Servicio"
            date={servicio.fechaFinServicio}
            isDateTime={true}
            includeRelativeDate={true}
          />
        </div>
        <hr className="border" />
        <div className="detalles">
          <div>
            <h6 className="h6">CLIENTE</h6>
            <Cliente cliente={servicio.cliente} mostrarEnCard={false} />
          </div>
          <div>
            <h6 className="h6">EMPLEADO</h6>
            <Empleado empleado={servicio.empleado} mostrarEnCard={false} />
          </div>
          <div>
            <h6 className="h6">USUARIO</h6>
            <span className="mif-spinner4 ani-pulse"></span>
          </div>
        </div>
      </div>
      <div className="card-footer">Ver Detalles del Servicio</div>
    </div>
  );
};

export default Servicio;
