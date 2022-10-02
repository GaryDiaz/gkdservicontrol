export const ButtonIconLabel = ({
  type = "button",
  icon = "",
  titulo = "Enviar",
  ...props
}) => {
  const contenido = icon ? (
    <span>
      <i className={"bi " + icon} style={{ marginRight: "5px" }}></i> {titulo}
    </span>
  ) : (
    <span>{titulo}</span>
  );
  return (
    <button type={type} className="buttonIconLabel" value={titulo} {...props}>
      {contenido}
    </button>
  );
};

export const ButtonCircularIcon = ({
  type = "button",
  icon = "bi-send-fill",
  ...props
}) => {
  return (
    <button type={type} className="buttonCircular" {...props}>
      <i className={"bi " + icon}></i>
    </button>
  );
};
