import { useState } from "react";
import { getLogin } from "../servicios/ApiFetch";

const useUsuario = () => {
  const loginDataInicial = {
    nick: "",
    clave: "",
  };
  const [loginData, setLoginData] = useState(loginDataInicial);

  const login = () => {
    return getLogin(loginData);
  };

  return [loginData, setLoginData, login];
};

export default useUsuario;
