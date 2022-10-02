import { useState } from "react";

export const SelectDropDown = ({ value, setValue, options = [], accion, ...props }) => {
  const [text, setText] = useState("");
  const [activeList, setActiveList] = useState(false);

  const select = (option) => {
    setText(option.label);
    setValue(option.value);
    if (accion) accion({ tipo: option.value });
  };

  return (
    <div
      className={activeList ? "dropdown active" : "dropdown"}
      onClick={() => {
        setActiveList(!activeList);
      }}
    >
      <input
        type="text"
        className="textBox"
        value={text}
        placeholder="Elige una opción"
        readOnly
        {...props}
      />
      <div className="option">
        {options.map((option) => {
          return (
            <div
              key={option.value}
              onClick={(ev) => {
                select(option);
              }}
            >
              <i className={"bi " + option.icon} style={{ marginRight: "5px" }}></i>
              {option.label}
            </div>
          );
        })}
      </div>
    </div>
  );
};
