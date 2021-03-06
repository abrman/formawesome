import React from "react";
import { formContext } from "stores";
import {
  Validation,
  Check,
  StringTransformerFunction,
  StringValidatorFunction,
  Option,
  OptionRenderFunction,
} from "_types";

const InputText: React.FC<
  {
    label: string | Element;
    id: string;
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
          suffix?: string | Element | "dropdown";
          suffixPosition?: "right" | "inline";
        }
      | {
          suffix: "dropdown";
          suffixOptions: Option[];
          suffixOptionRender?: OptionRenderFunction;
          suffixPosition?: never;
        }
    ) &
    (
      | {
          prefix?: string | Element | "dropdown";
          prefixPosition?: "right" | "inline";
        }
      | {
          prefix: "dropdown";
          prefixOptions: Option[];
          prefixOptionRender?: OptionRenderFunction;
          prefixPosition?: never;
        }
    )
> = ({ label, id }) => {
  const { setFormFieldValue, formContentRaw } = React.useContext(formContext);

  return (
    <label className={["fa-label", "fa-input-text"].join(" ")}>
      <div className="fa-label-title">{label}</div>
      <input
        type="text"
        name={id}
        id={id}
        key={id}
        value={formContentRaw[id]}
        onChange={(e) => {
          setFormFieldValue(id, e.target.value);
          console.log({ formContentRaw });
        }}
      />
      {JSON.stringify(formContentRaw)}
    </label>
  );
};

export default InputText;
