import React from "react";
import { formContextDataType } from "_types";

const defaultFormContextData: formContextDataType = {
  setFormFieldValue: () => {},
  formContentRaw: {},
};

const formContext = React.createContext<formContextDataType>(
  defaultFormContextData
);

export { formContext };
