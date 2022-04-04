import React from "react";
import "./InputText.css";

type Validation =
  | "valid"
  | "awaiting"
  | { type: "warning" | "invalid"; message: string }[];

type Check = { type: "incomplete" | "complete"; message: string }[];

type TransformerFunction = (value: string) => any;

type ValidatorFunction = (
  value: string | any,
  transformer: TransformerFunction
) => Exclude<Validation, "awaiting">;

const InputText: React.FC<{
  label: string | Element;
  key: string;
  infoTooltip?: string | Element;
  validator?: ValidatorFunction;
  checks?: Check[];
  transformer?: TransformerFunction;
  suffix?: string | Element;
  suffixPosition?: "right" | "inline";
  prefix?: string | Element;
  prefixPosition?: "left" | "inline";
  charLimit?: number;
  placeholder?: string;
  default?: string;
  password?: boolean;
}> = () => {
  return <div className="fa-input-text">InputText</div>;
};

export default InputText;
