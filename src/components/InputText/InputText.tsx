import React from "react";

type Transformer = (value: string) => any;

type Validator = (
  value: string | any,
  transformer: Transformer
) => Exclude<Validation, "awaiting">;

type Validation =
  | "valid"
  | "awaiting"
  | { type: "warning" | "invalid"; reason: string }[];

const InputText: React.FC<{
  label: string | Element;
  infoTooltip?: string | Element;
  validator?: Validator;
  transformer?: Transformer;
  suffix?: string | Element;
  suffixPosition?: "right" | "inline";
  prefix?: string | Element;
  prefixPosition?: "left" | "inline";
  charLimit?: number;
  placeholder?: string;
  default?: string;
  password?: boolean;
}> = () => {
  return <div>InputText</div>;
};

export default InputText;
