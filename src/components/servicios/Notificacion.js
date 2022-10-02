import { toast } from "react-toastify";

export const notificar = (mensaje, tipo = null) => {
  const confToast = {
    position: "top-right",
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
  };
  if (!tipo) {
    toast(mensaje, confToast);
    return;
  }
  toast[tipo](mensaje, confToast);
};
