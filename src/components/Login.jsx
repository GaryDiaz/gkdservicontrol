import { useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { CommandButton } from "./metroform/MetroButton";
import { InputMaterial } from "./metroform/MetroInput";
import { getLogin } from "./servicios/ApiFetch";

const Login = ({ token, setToken }) => {
  const loginDataInicial = {
    nick: "",
    clave: "",
  };

  const [loginData, setLoginData] = useState(loginDataInicial);
  const [welcomeMessage, setWelcomeMessage] = useState("");
  const [error, setError] = useState("");

  function login() {
    getLogin(loginData)
      .catch((error) => console.error("Error:   ", error))
      .then((response) => {
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
  }

  return (
    <motion.div
      initial={{ opacity: 0, scaleX: 0 }}
      animate={{ opacity: 1, scaleX: 1 }}
      exit={{ opacity: 0, scaleX: 0 }}
      transition={{ duration: 0.25 }}
    >
      {!token ? (
        <form
          onSubmit={(ev) => {
            ev.preventDefault();
            login();
          }}
        >
          <div className="grid">
            <div className="row">
              <div className="card cell-sm-full cell-md-half">
                <div className="card-header">
                  <h2 className="text-center">
                    <i className="bi bi-box-arrow-in-left"></i> Iniciar Sesión
                  </h2>
                  <p className="fg-red">{error}</p>
                </div>
                <div className="card-content p-8">
                  <InputMaterial
                    type="text"
                    placeholder="Ingrese su Nick"
                    icon="bi-person-lines-fill"
                    label="Nick"
                    notificacion="Ingresa un Nick válido"
                    tipoNotificacion={true}
                    nombreColor="darkTeal"
                    value={loginData.nick}
                    onChange={(ev) =>
                      setLoginData({ ...loginData, nick: ev.target.value })
                    }
                  />
                  <InputMaterial
                    type="password"
                    placeholder="Clave"
                    icon="bi-key-fill"
                    label="Clave"
                    notificacion="Ingrese su clave"
                    tipoNotificacion={true}
                    nombreColor="darkTeal"
                    value={loginData.clave}
                    onChange={(ev) =>
                      setLoginData({ ...loginData, clave: ev.target.value })
                    }
                  />
                </div>
                <div className="card-footer d-flex flex-justify-end">
                  <CommandButton
                    type="submit"
                    icon="bi-box-arrow-in-right"
                    titulo="Login"
                    subtitulo="Iniciar Sesión"
                  />
                </div>
              </div>
              <div
                className="cell-md-half"
                style={{
                  height: "370px",
                  backgroundImage: "url('/images/gkdservicontrol-marca370px.png')",
                  backgroundRepeat: "no-repeat",
                  backgroundPosition: "center",
                }}
              ></div>
            </div>
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
