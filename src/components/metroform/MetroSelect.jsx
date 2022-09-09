export const SelectOptionTemplate = ({ options = [], ...props }) => {
  return (
    <select data-role="select" {...props}>
      {options.map((option) => {
        return <Option key={option.value} option={option} />;
      })}
    </select>
  );
};

const Option = ({ option }) => {
  return (
    <option
      value={option.value}
      data-template={
        option.icon
          ? '<i class="bi ' + option.icon + '" style="padding-right:5px"></i> $1'
          : ""
      }
    >
      {option.label}
    </option>
  );
};
