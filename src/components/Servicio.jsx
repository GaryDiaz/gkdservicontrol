import React from "react";
import MomentDate from "./moment-date/MomentDate";

const Servicio = ({ servicio }) => {
  return (
    <div className="card">
      <div className="card-header">
        <h3>
          Servicio Nro. {servicio.id} ({servicio.estatus})
        </h3>
        {servicio.fechaProximaVisita ? (
          <MomentDate
            label="Fecha Próxima Visita"
            date={servicio.fechaProximaVisita}
            isDateTime={true}
            includeRelativeDate={true}
          />
        ) : (
          <MomentDate
            label="Fecha de Visita"
            date={servicio.fechaVisita}
            isDateTime={true}
            includeRelativeDate={true}
          />
        )}
      </div>
      <div className="card-content">
        <div className="row">
          <MomentDate
            label="Fecha de Servicio"
            date={servicio.fechaServicio}
            className="cell-lg-quarter cell-md-half cell-sm-full"
          />
          <MomentDate
            label="Feche de Visita"
            date={servicio.fechaVisita}
            isDateTime={true}
            includeRelativeDate={true}
            className="cell-lg-quarter cell-md-half cell-sm-full"
          />
          <MomentDate
            label="Feche Próxima Visita"
            date={servicio.fechaProximaVisita}
            isDateTime={true}
            includeRelativeDate={true}
            className="cell-lg-quarter cell-md-half cell-sm-full"
          />
          <MomentDate
            label="Feche Fin Servicio"
            date={servicio.fechaFinServicio}
            isDateTime={true}
            includeRelativeDate={true}
            className="cell-lg-quarter cell-md-half cell-sm-full"
          />
        </div>
      </div>
      <div className="calendar-footer"></div>
    </div>
  );
};

export default Servicio;
