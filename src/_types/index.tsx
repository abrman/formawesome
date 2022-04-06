type Validation =
  | "valid"
  | "awaiting"
  | { type: "warning" | "invalid"; message: string }[];

type Check = { type: "incomplete" | "complete"; message: string }[];

type StringTransformerFunction = (value: string) => any;

type StringValidatorFunction = (
  value: string | any,
  transformer: StringTransformerFunction,
  checks?: Check[]
) => Exclude<Validation, "awaiting">;

type Option = {
  label: string;
  value: any;
};

type OptionRenderFunction = (option: Option) => Element;

type InputTextType = string | string[];
type InputSelectableType = string | string[] | any;
type InputCreatableType = string | string[] | any;
type InputToggleType = boolean;
type InputNumberType = boolean;

type FormContentRawType =
  | InputTextType
  | InputSelectableType
  | InputCreatableType
  | InputToggleType
  | InputNumberType;

export type {
  Validation,
  Check,
  StringTransformerFunction,
  StringValidatorFunction,
  Option,
  OptionRenderFunction,
  FormContentRawType,
  InputTextType,
  InputSelectableType,
  InputCreatableType,
  InputToggleType,
  InputNumberType,
};
