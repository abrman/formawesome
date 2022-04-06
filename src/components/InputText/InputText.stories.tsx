import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import InputText from "./InputText";
import { useForm } from "hooks";
import { FormContext } from "components";

const ContextProvider = (Story: React.FC) => {
  return (
    <FormContext>
      <Story />
    </FormContext>
  );
};

const FormDataProvider = (Story: React.FC) => {
  const { formContentRaw } = useForm();
  return (
    <>
      <Story />
      {JSON.stringify(formContentRaw)}
    </>
  );
};

export default {
  title: "Form Components/InputText",
  component: InputText,
  decorators: [FormDataProvider, ContextProvider],
} as ComponentMeta<typeof InputText>;

const Template: ComponentStory<typeof InputText> = (args) => (
  <InputText {...args} />
);

export const Primary = Template.bind({});
Primary.args = {
  label: "Name:",
  id: "name",
};
