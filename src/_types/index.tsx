import type { ThemeOptions } from "../components";

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

type formContextDataType = {
  setFormFieldValue: (key: string, value: FormContentRawType) => void;
  formContentRaw: {
    [key: string]: any;
  };
  // formContent: { [key: string]: any | any[] };
  // formContentRaw: { [key: string]: string | string[] };
  // formValid: boolean;
  // testResults: { [key: string]: any };
  // testFunctions: { [key: string]: () => void };
  // setShowValidation: React.Dispatch<
  //   React.SetStateAction<{
  //     [key: string]: boolean;
  //   }>
  // >;
};

type FormContextType = {
  children: React.ReactNode;
  showValidationOn?: "blur" | "keypress" | "manual";
} & ThemeOptions;

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
  formContextDataType,
  FormContextType,
};
