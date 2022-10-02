export const validarCampo = ({ valor, validaciones }) => {
  const listaValidaciones = {
    noVacio: () => {
      if (valor === "") return "El campo es obligatorio";
      return null;
    },
    numeroNatural: () => {
      let aux = parseInt(valor);
      if (isNaN(aux) || aux.toString() !== valor.toString()) {
        return "El campo es numérico";
      }
      return null;
    },
  };

  for (const validacion of validaciones) {
    const validar = listaValidaciones[validacion];
    if (validar !== undefined) {
      const error = validar();
      if (error) return error;
    }
  }
  return null;
};
