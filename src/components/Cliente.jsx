import React from "react";

const Cliente = ({ cliente, mostrarEnCard = true }) => {
  return mostrarEnCard ? (
    <div className="card">
      <div className="card-header">
        <h2>{cliente.razonSocial}</h2>
        {cliente.juridica ? (
          <div>
            <div>RIF: {cliente.prefijoRif + "-" + cliente.numeroRif}</div>
            <div>Nombre de Contacto: {cliente.nombreContacto}</div>
            <div>Cargo: {cliente.cargoContacto}</div>
          </div>
        ) : (
          <div>
            <div>CI/RIF: {cliente.prefijoRif + "-" + cliente.numeroRif}</div>
          </div>
        )}
      </div>
      <div className="card-content">
        <div>
          Direccion:{" "}
          {cliente.direccion +
            ", " +
            cliente.direccionAnexo +
            " (" +
            cliente.puntoReferencia +
            ")"}
        </div>
        <div>email: {cliente.email}</div>
        <div>
          Teléfono: {cliente.telefono} Otro Teléfono: {cliente.otroTelefono}
        </div>
      </div>
      <div className="card-footer"></div>
    </div>
  ) : (
    <div>
      <h3>
        <i className="bi bi-person"></i> {cliente.razonSocial}
      </h3>
      {cliente.juridica ? (
        <div>
          <div>RIF: {cliente.prefijoRif + "-" + cliente.numeroRif}</div>
          <div>Nombre de Contacto: {cliente.nombreContacto}</div>
          <div>Cargo: {cliente.cargoContacto}</div>
        </div>
      ) : (
        <div>
          <div>CI/RIF: {cliente.prefijoRif + "-" + cliente.numeroRif}</div>
        </div>
      )}
    </div>
  );
};

export default Cliente;
