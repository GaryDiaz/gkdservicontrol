import { useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { InputLabelFlotante } from "./forms/form-components/Input";
import { ButtonIconLabel } from "./forms/form-components/Button";
import useUsuario from "./hooks/useUsuario";

const Login = ({ token, setToken }) => {
  const [loginData, setLoginData, login] = useUsuario();
  const [welcomeMessage, setWelcomeMessage] = useState("");
  const [error, setError] = useState("");

  const iniciarSesion = () => {
    login().then((response) => {
      if (!response.error) {
        localStorage.setItem("GKD-Token", response.token);
        setToken(response.token);
        setWelcomeMessage(response.message);
        setError("");
      }
      if (response.error) {
        setError(response.messages.error);
      }
    });
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.25 }}
    >
      {!token ? (
        <form
          onSubmit={(ev) => {
            ev.preventDefault();
            iniciarSesion();
          }}
          noValidate
        >
          <div className="content-login">
            <div className="card form-login">
              <div className="card-header">
                <h2 className="text-center">
                  <i className="bi bi-box-arrow-in-left"></i> Iniciar Sesión
                </h2>
                <p className="fg-red">{error}</p>
              </div>
              <div className="card-content p-8">
                <InputLabelFlotante
                  type="text"
                  icon="bi-person-lines-fill"
                  label="Nick"
                  value={loginData.nick}
                  onChange={(ev) => setLoginData({ ...loginData, nick: ev.target.value })}
                />
                <InputLabelFlotante
                  type="password"
                  icon="bi-key-fill"
                  label="Clave"
                  value={loginData.clave}
                  onChange={(ev) =>
                    setLoginData({ ...loginData, clave: ev.target.value })
                  }
                />
              </div>
              <div className="card-footer d-flex flex-justify-end">
                <ButtonIconLabel
                  type="submit"
                  icon="bi-box-arrow-in-right"
                  titulo="Login"
                />
              </div>
            </div>
            <div
              className="logo-servicontrol ocultar-en-pantalla-pequenia"
              style={{
                height: "370px",
                backgroundImage: "url('/images/gkdservicontrol-marca370px.png')",
                backgroundRepeat: "no-repeat",
                backgroundPosition: "center",
              }}
            ></div>
          </div>
        </form>
      ) : (
        <div className="card">
          <div className="card-header">
            <h2>Hola</h2>
          </div>
          <div className="card-content">
            <p>{welcomeMessage ? welcomeMessage : "Ya tienes una sesión iniciada"}</p>
          </div>
          <div className="card-footer d-flex flex-justify-end">
            <Link to="/">Ir al inicio</Link>
          </div>
        </div>
      )}
    </motion.div>
  );
};

export default Login;
