import React from "react";
import { formContext } from "stores/contexts";
import StyleLoader from "../StyleLoader";
import type {
  FormContextType,
  FormContentRawType,
  StringValidatorFunction,
} from "_types";

export const FormContext = React.memo(function FormContext({
  children,
  ...options
}: FormContextType) {
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

  // const previousContentRaw = usePrevious(formContentRaw);

  // React.useEffect(() => {
  //   console.log(previousContentRaw, formContentRaw);
  // }, [formContentRaw]);

  return (
    <formContext.Provider value={{ setFormFieldValue, formContentRaw }}>
      <StyleLoader theme={options || {}}>{children}</StyleLoader>
    </formContext.Provider>
  );
});

export default FormContext;
