import { ButtonIconLabel } from "./forms/form-components/Button";

const Empleado = ({ empleado, mostrarEnCard = true, modoEdicion, setIdEnEdicion }) => {
  return mostrarEnCard ? (
    <div className="card">
      <div className="card-header">
        <div>
          <h2>{empleado.nombre + " " + empleado.apellido}</h2>
        </div>
        <div>
          <h6>Cargo: {empleado.cargo}</h6>
          <p>Telefono Principal: {empleado.telefonoPrincipal}</p>
        </div>
      </div>
      <div className="card-content">
        <div className="detalles">
          <div>Cedula: {empleado.cedula}</div>
          <div>Telefono 2: {empleado.telefono2}</div>
          <div>Telefono 3: {empleado.telefono3}</div>
          <div>Estatus: {empleado.estatus}</div>
        </div>
      </div>
      <div className="card-footer">
        <div className="botones">
          <ButtonIconLabel
            icon="bi-pencil-fill"
            titulo="Editar"
            onClick={() => {
              setIdEnEdicion(empleado.id);
              modoEdicion();
            }}
          />
        </div>
      </div>
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
