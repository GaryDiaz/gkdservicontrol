import { Link } from "react-router-dom";
import { ActiveLink } from "./react-router/ActiveLink";

const Navigation = () => {
  return (
    <nav className="navigation">
      <Link className="brand" to="/">
        <div>
          <img
            className="logoBrand"
            src="/images/gkdservicontrol64.png"
            alt="logo"
            style={{ height: "44px", paddingRight: "5px", paddingBottom: "8px" }}
          />
          <span>GKD Servicontrol</span>
        </div>
      </Link>
      <ul>
        <ActiveLink to="servicios">
          <span className="icon">
            <i className="bi bi-tools"></i>
          </span>
          <span className="text">Servicios</span>
        </ActiveLink>
        <ActiveLink to="clientes">
          <span className="icon">
            <i className="bi bi-person"></i>
          </span>
          <span className="text">Clientes</span>
        </ActiveLink>
        <ActiveLink to="empleados">
          <span className="icon">
            <i className="bi bi-person-workspace"></i>
          </span>
          <span className="text">Empleados</span>
        </ActiveLink>
        <div className="indicador"></div>
      </ul>
    </nav>
  );
};

export default Navigation;
