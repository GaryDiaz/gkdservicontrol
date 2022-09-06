import React from "react";
import moment from "moment";
import "moment/locale/es-mx";

const MomentDate = ({
  label,
  date,
  isDateTime = false,
  includeRelativeDate = false,
  ...props
}) => {
  let format = isDateTime ? "D MMM YYYY, h:mm a" : "D MMM YYYY";
  moment.locale("es-mx");

  return (
    <div className={props.className}>
      <i className="bi bi-calendar-event" style={{ paddingRight: "10px" }}></i>
      <strong>{label + ": "}</strong>
      {includeRelativeDate && moment(date).isValid()
        ? "(" + moment(date).fromNow() + ")"
        : ""}
      <div>{moment(date).isValid() ? moment(date).format(format) : "-"}</div>
    </div>
  );
};

export default MomentDate;
