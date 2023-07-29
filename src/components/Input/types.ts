import React from "react";
export type InputProps = {
  className: string;
  labelText: string;
  label_input_attribute: string;
  value: string;
  changeHandler: (event: React.ChangeEvent<HTMLInputElement>) => void;
};
