import { useState } from "react";

const useModal = (valorInicial = false) => {
  const [visibleModal, setVisibleModal] = useState(valorInicial);
  const [id, setId] = useState(0);

  const abrirModal = () => {
    setVisibleModal(true);
  };

  const cerrarModal = () => {
    setVisibleModal(false);
    setId(0);
  };

  return [visibleModal, abrirModal, cerrarModal, id, setId];
};

export default useModal;
