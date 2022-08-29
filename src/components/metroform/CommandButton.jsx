import React from "react";

export const CommandButton = ({
  icon,
  titulo,
  subtitulo,
  bgColor = "bg-darkTeal",
  rippleColor = "#00f7f5",
  textColor = "fg-white",
  ...props
}) => {
  return (
    <div>
      <button
        className={"command-button " + bgColor + " " + textColor}
        data-role="ripple"
        data-ripple-color={rippleColor}
        style={{ width: "100%" }}
      >
        <span className="icon">
          <i className={"bi " + icon}></i>
        </span>
        <span className="caption">
          {titulo}
          <small>{subtitulo}</small>
        </span>
      </button>
    </div>
  );
};
