import { useState } from "react";

const useModal = (valorInicial = false) => {
  const [esVisible, setEsVisible] = useState(valorInicial);
  const [id, setId] = useState(0);

  const abrir = () => {
    setEsVisible(true);
  };

  const cerrar = () => {
    setEsVisible(false);
    setId(0);
  };

  return { esVisible, abrir, cerrar, id, setId };
};

export default useModal;
