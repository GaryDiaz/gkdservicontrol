export const InputLabelFlotante = ({
  type = "text",
  icon = "",
  label = "",
  errorNotificacion = "",
  value = "",
  className = "",
  ...props
}) => {
  const labelIcon = icon ? (
    <>
      <i className={"bi " + icon} style={{ marginRight: "5px" }}></i> {label}
    </>
  ) : (
    <>{label}</>
  );

  const getClassName = () => {
    if (errorNotificacion === "") return className;
    return className === "" ? "error" : className + " error";
  };

  return (
    <div className="inputBox">
      <input
        type={type}
        className={getClassName()}
        value={value}
        required="required"
        {...props}
      />
      <span>{labelIcon}</span>
      {errorNotificacion && <div className="errorNotificacion">{errorNotificacion}</div>}
    </div>
  );
};

export const InputSwitch = ({ label = "", value = false, setValue }) => {
  return (
    <div className="inputSwitch">
      {label && <span className="label">{label}</span>}
      <input
        type="checkbox"
        name=""
        checked={value ? "checked" : ""}
        onChange={() => {
          setValue(!value);
        }}
      />
    </div>
  );
};
