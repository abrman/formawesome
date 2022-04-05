import React from "react";
import { FormContext } from "../../hooks";
import "./InputText.css";

type Validation =
  | "valid"
  | "awaiting"
  | { type: "warning" | "invalid"; message: string }[];

type Check = { type: "incomplete" | "complete"; message: string }[];

type StringTransformerFunction = (value: string) => any;

type StringValidatorFunction = (
  value: string | any,
  transformer: StringTransformerFunction
) => Exclude<Validation, "awaiting">;

type Option = {
  label: string;
  value: any;
};

type OptionRenderFunction = (option: Option) => Element;

const InputText: React.FC<
  {
    label: string | Element;
    key: string;
    infoTooltip?: string | Element;
    validator?: StringValidatorFunction;
    transformer?: StringTransformerFunction;
    charLimit?: number;
    placeholder?: string;
    default?: string;
    icon?: Element;
  } & (
    | {
        password?: never;
        checks?: never;
      }
    | {
        password: true;
        checks: Check[];
      }
  ) &
    (
      | {
          suffix?: string | Element;
          suffixPosition?: "right" | "inline";
        }
      | {
          suffix: "dropdown";
          suffixOptions: Option[];
          suffixOptionRender: OptionRenderFunction;
          suffixPosition?: never;
        }
    ) &
    (
      | {
          prefix?: string | Element;
          prefixPosition?: "right" | "inline";
        }
      | {
          prefix: "dropdown";
          prefixOptions: Option[];
          prefixOptionRender: OptionRenderFunction;
          prefixPosition?: never;
        }
    )
> = () => {
  return <div className="fa-input-text">InputText</div>;
};

export default InputText;
