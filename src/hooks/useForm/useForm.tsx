import React from "react";
import StyleLoader, { ThemeOptions } from "./StyleLoader";
import type { StringValidatorFunction, FormContentRawType } from "_types";
import { usePrevious } from "../usePrevious";

type useFormOptions = {
  showValidationOn?: "blur" | "keypress" | "manual";
} & ThemeOptions;

const FormContext = React.createContext<{
  setFormFieldValue: (key: string, value: FormContentRawType) => void;
  formContentRaw: {
    [key: string]: any;
  };
}>({
  setFormFieldValue: () => {},
  formContentRaw: {},
});

const useForm = (options: useFormOptions = { showValidationOn: "blur" }) => {
  const [formMeta, setFormMeta] = React.useState<{
    [key: string]: any;
  }>({});
  const [formContent, setFormContent] = React.useState<{
    [key: string]: any;
  }>({});
  const [formContentRaw, setFormContentRaw] = React.useState<{
    [key: string]: FormContentRawType;
  }>({});
  const [testResults, setTestResults] = React.useState<{
    [key: string]: ReturnType<StringValidatorFunction>;
  }>({});
  const [testFunctions, setTestFunctions] = React.useState<{
    [key: string]: () => void;
  }>({});
  const [formValid, setFormValid] = React.useState<boolean>(false);
  const [showValidation, setShowValidation] = React.useState<{
    [key: string]: boolean;
  }>({});

  const setFormFieldValue = (key: string, value: FormContentRawType) => {
    setFormContentRaw((prev) => ({ ...prev, [key]: value }));
  };

  const previousContentRaw = usePrevious(formContentRaw);

  React.useEffect(() => {
    console.log(previousContentRaw, formContentRaw);
  }, [formContentRaw]);

  const FormContextWrapper: React.FC = ({ children }) => (
    <FormContext.Provider value={{ setFormFieldValue, formContentRaw }}>
      <StyleLoader theme={options || {}}>{children}</StyleLoader>
    </FormContext.Provider>
  );

  return {
    FormContext: FormContextWrapper,
    formContent,
    formContentRaw,
    formValid,
    testResults,
    testFunctions,
    setShowValidation,
  } as {
    FormContext: React.FC;
    formContent: { [key: string]: any | any[] };
    formContentRaw: { [key: string]: string | string[] };
    formValid: boolean;
    testResults: { [key: string]: any };
    testFunctions: { [key: string]: () => void };
    setShowValidation: React.Dispatch<
      React.SetStateAction<{
        [key: string]: boolean;
      }>
    >;
  };
};

export default useForm;
export { FormContext };
// export type {a}
