import React from "react";

const Empleado = ({ empleado, mostrarEnCard = true }) => {
  return mostrarEnCard ? (
    <div className="card">
      <div className="card-header">
        <h2>{empleado.nombre + " " + empleado.apellido}</h2>
        <h6>Cargo: {empleado.cargo}</h6>
        <p>Telefono Principal: {empleado.telefonoPrincipal}</p>
      </div>
      <div className="card-content">
        <div className="row">
          <div className="cell-sm-6 cell-md-6 cell-lg-3 cell-xl-3">
            Cedula: {empleado.cedula}
          </div>
          <div className="cell-sm-6 cell-md-6 cell-lg-3 cell-xl-3">
            Telefono 2: {empleado.telefono2}
          </div>
          <div className="cell-sm-6 cell-md-6 cell-lg-3 cell-xl-3">
            Telefono 3: {empleado.telefono3}
          </div>
          <div className="cell-sm-6 cell-md-6 cell-lg-3 cell-xl-3">
            Estatus: {empleado.estatus}
          </div>
        </div>
      </div>
      <div className="card-footer">Ver Detalles</div>
    </div>
  ) : (
    <div>
      <h2>
        <i className="bi bi-person-workspace"></i>{" "}
        {empleado.nombre + " " + empleado.apellido}
      </h2>
      <h6>Cargo: {empleado.cargo}</h6>
      <p>Telefono Principal: {empleado.telefonoPrincipal}</p>
    </div>
  );
};

export default Empleado;
