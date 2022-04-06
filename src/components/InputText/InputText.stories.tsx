import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import InputText from "./InputText";
import { useForm } from "../../hooks";

const ContextProvider = (Story: React.FC) => {
  const { FormContext } = useForm();
  return (
    <FormContext>
      <Story />
    </FormContext>
  );
};

export default {
  title: "Form Components/InputText",
  component: InputText,
  decorators: [ContextProvider],
} as ComponentMeta<typeof InputText>;

const Template: ComponentStory<typeof InputText> = (args) => (
  <InputText {...args} />
);

export const Primary = Template.bind({});
Primary.args = {
  label: "Name:",
  id: "name",
};
