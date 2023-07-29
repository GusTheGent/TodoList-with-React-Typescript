import React from "react";
export type ButtonProps = {
  className: string;
  buttonText: string;
  disabled: boolean;
  clickHandler: (event: React.MouseEvent<HTMLButtonElement>) => void;
};
