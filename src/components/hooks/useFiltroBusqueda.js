import { useState, useEffect } from "react";

const useFiltroBusqueda = (nombreRecurso) => {
  const [tipoConsulta, setTipoConsulta] = useState("todos");
  const [textoBuscar, setTextoBuscar] = useState("");
  const [textoDisabled, setTextoDisabled] = useState(true);

  useEffect(() => {
    if (tipoConsulta === "todos") {
      setTextoBuscar("");
    }
    setTextoDisabled(tipoConsulta === "todos");
  }, [tipoConsulta]);

  const recursoFiltro = ({ texto, tipo }) => {
    let recurso = nombreRecurso;
    const txt = texto !== undefined ? texto : textoBuscar;
    const tpo = tipo !== undefined ? tipo : tipoConsulta;
    if (txt && tpo !== "todos") {
      recurso = `${recurso}/${tpo}/${txt}`;
    }
    return recurso;
  };

  return {
    recursoFiltro,
    tipoConsulta,
    setTipoConsulta,
    textoBuscar,
    setTextoBuscar,
    textoDisabled,
  };
};

export default useFiltroBusqueda;
