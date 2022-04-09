import React from "react";
import StyleLoader, { ThemeOptions } from "../../components/StyleLoader";
import type { StringValidatorFunction, FormContentRawType } from "_types";
import { formContext } from "stores";

type useFormOptions = {
  showValidationOn?: "blur" | "keypress" | "manual";
} & ThemeOptions;

const useForm = (options: useFormOptions = { showValidationOn: "blur" }) => {
  const { formContentRaw } = React.useContext(formContext);

  return {
    // formContent,
    formContentRaw,
    // formValid,
    // testResults,
    // testFunctions,
    // setShowValidation,
  } as {
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
