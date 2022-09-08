import React from "react";
import Cliente from "./Cliente";
import Empleado from "./Empleado";
import MomentDate from "./moment-date/MomentDate";

const Servicio = ({ servicio }) => {
  return (
    <div className="card" data-shadow="true">
      <div className="card-header">
        <div className="row">
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
          <div className="cell-sm-12 cell-md-12 cell-lg-8 cell-xl-9">
            <h3>
              Servicio Nro. {servicio.id} ({servicio.estatus})
            </h3>
          </div>
        </div>
      </div>
      <div className="card-content">
        <div className="row">
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
        <hr className="border" />
        <div className="row">
          <div className="cell-xl-4">
            <h6 className="h6">CLIENTE</h6>
            <Cliente cliente={servicio.cliente} mostrarEnCard={false} />
          </div>
          <div className="cell-xl-4">
            <h6 className="h6">EMPLEADO</h6>
            <Empleado empleado={servicio.empleado} mostrarEnCard={false} />
          </div>
          <div className="cell-xl-4">
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
