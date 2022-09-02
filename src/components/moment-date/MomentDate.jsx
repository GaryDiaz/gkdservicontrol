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
      <strong>{label + ": "}</strong>
      {moment(date).format(format)}
      {includeRelativeDate ? <div>{moment(date).fromNow()}</div> : ""}
    </div>
  );
};

export default MomentDate;
