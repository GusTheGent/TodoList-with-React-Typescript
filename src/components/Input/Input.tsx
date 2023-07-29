import { InputProps } from "./types";

export const Input: React.FunctionComponent<InputProps> = ({
  className,
  labelText,
  label_input_attribute,
  value,
  changeHandler,
}: InputProps) => {
  return (
    <div className={className}>
      <label htmlFor={label_input_attribute}>{labelText}</label>
      <input
        type="text"
        id={label_input_attribute}
        value={value}
        onChange={changeHandler}
      />
    </div>
  );
};
