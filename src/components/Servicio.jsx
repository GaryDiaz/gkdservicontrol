import React from "react";
import MomentDate from "./moment-date/MomentDate";

const Servicio = ({ servicio }) => {
  return (
    <div className="card">
      <div className="card-header">
        <div className="row">
          <div className="cell-sm-12 cell-md-12 cell-lg-8 cell-xl-9">
            <h3>
              Servicio Nro. {servicio.id} ({servicio.estatus})
            </h3>
          </div>
          {servicio.fechaProximaVisita ? (
            <MomentDate
              label="Próxima Visita"
              date={servicio.fechaProximaVisita}
              isDateTime={true}
              includeRelativeDate={true}
              className="cell-sm-12 cell-md-12 cell-lg-4 cell-xl-3"
            />
          ) : (
            <MomentDate
              label="Visita"
              date={servicio.fechaVisita}
              isDateTime={true}
              includeRelativeDate={true}
              className="cell-sm-12 cell-md-12 cell-lg-4 cell-xl-3"
            />
          )}
        </div>
      </div>
      <div className="card-content">
        <div className="row" style={{ paddingLeft: "12px", paddingRight: "12px" }}>
          <MomentDate
            label="Fecha de Servicio"
            date={servicio.fechaServicio}
            className="cell-sm-6 cell-md-6 cell-lg-3 cell-xl-3"
          />
          <MomentDate
            label="Visita"
            date={servicio.fechaVisita}
            isDateTime={true}
            includeRelativeDate={true}
            className="cell-sm-6 cell-md-6 cell-lg-3 cell-xl-3"
          />
          <MomentDate
            label="Próxima Visita"
            date={servicio.fechaProximaVisita}
            isDateTime={true}
            includeRelativeDate={true}
            className="cell-sm-6 cell-md-6 cell-lg-3 cell-xl-3"
          />
          <MomentDate
            label="Fin Servicio"
            date={servicio.fechaFinServicio}
            isDateTime={true}
            includeRelativeDate={true}
            className="cell-sm-6 cell-md-6 cell-lg-3 cell-xl-3"
          />
        </div>
      </div>
      <div className="calendar-footer"></div>
    </div>
  );
};

export default Servicio;
