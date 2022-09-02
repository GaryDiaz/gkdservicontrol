import { Link } from "react-router-dom";
import { ActiveLink } from "./react-router/ActiveLink";

const Navigation = () => {
  return (
    <nav
      className="app-bar bg-darkTeal fg-white app-bar-expand"
      data-role="appbar"
      data-expand-point="md"
    >
      <Link className="brand no-hover" to="/">
        <span style={{ fontSize: "24px" }} className="p-2 bd-light">
          <img
            className="logoBrand"
            src="/images/gkdservicontrol64.png"
            alt="logo"
            style={{ height: "44px", paddingRight: "5px", paddingBottom: "8px" }}
          />
          GKD Servicontrol
        </span>
      </Link>
      <ul className="app-bar-menu">
        <li>
          <ActiveLink to="servicios">Servicios</ActiveLink>
        </li>
        <li>
          <ActiveLink to="clientes">Clientes</ActiveLink>
        </li>
        <li>
          <ActiveLink to="empleados">Empleados</ActiveLink>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;
