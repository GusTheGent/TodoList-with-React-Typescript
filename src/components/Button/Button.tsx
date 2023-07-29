import { ButtonProps } from "./types";

export const Button: React.FunctionComponent<ButtonProps> = ({
  className,
  buttonText,
  disabled,
  clickHandler,
}: ButtonProps) => {
  return (
    <button
      className={className}
      onClick={clickHandler}
      type="submit"
      disabled={disabled}
    >
      {buttonText}
    </button>
  );
};
