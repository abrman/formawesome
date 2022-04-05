import React from "react";
import FormContext from "./FormContext";
import StyleLoader, { ThemeOptions } from "./StyleLoader";

type Options = {} & ThemeOptions;

const useFormAwesome = (options: Options) => {
  const ContextWrapper: React.FC<{}> = ({ children }) => (
    <FormContext.Provider value={{}}>
      <StyleLoader theme={options}>{children}</StyleLoader>
    </FormContext.Provider>
  );

  return { ContextWrapper };
};

export default useFormAwesome;
