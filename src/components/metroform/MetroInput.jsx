export const InputMaterial = ({
  type,
  placeholder,
  role,
  icon,
  label,
  notificacion,
  tipoNotificacion,
  nombreColor,
  ...props
}) => {
  return (
    <div>
      <input
        type={type}
        placeholder={placeholder}
        data-role="materialinput"
        data-icon={"<i class='bi " + icon + "'></i>"}
        data-label={label}
        data-informer={notificacion}
        data-cls-informer={tipoNotificacion ? "fg-" + nombreColor : "fg-magenta"}
        data-cls-line={tipoNotificacion ? "bg-" + nombreColor : "bg-magenta"}
        data-cls-label={"fg-" + nombreColor}
        data-cls-icon={"fg-" + nombreColor}
        {...props}
      />
    </div>
  );
};

export const Input = ({ type = "text", searchButton = false, ...props }) => {
  return (
    <div>
      <input type={type} data-role="input" data-search-button={searchButton} {...props} />
    </div>
  );
};
