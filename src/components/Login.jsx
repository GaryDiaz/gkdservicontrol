import { useState } from "react";
import { Link } from "react-router-dom";
import { CommandButton } from "./metroform/CommandButton";
import { InputMaterial } from "./metroform/InputMaterial";

const Login = ({ apiRest, token, setToken }) => {
  const loginDataInicial = {
    nick: "",
    clave: "",
  };

  const [loginData, setLoginData] = useState(loginDataInicial);
  const [welcomeMessage, setWelcomeMessage] = useState("");

  const login = () => {
    fetch(apiRest + "login", {
      method: "POST",
      body: JSON.stringify(loginData),
      headers: {
        "Content-Type": "aplication/json",
      },
    })
      .then((res) => res.json())
      .catch((error) => console.error("Error: ", error))
      .then((response) => {
        localStorage.setItem("GKD-Token", response.token);
        setToken(response.token);
        setWelcomeMessage(response.message);
      });
  };

  return !token ? (
    <form
      onSubmit={(ev) => {
        ev.preventDefault();
        console.log(loginData);
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
                onChange={(ev) => setLoginData({ ...loginData, nick: ev.target.value })}
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
                onChange={(ev) => setLoginData({ ...loginData, clave: ev.target.value })}
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
  );
};

export default Login;
