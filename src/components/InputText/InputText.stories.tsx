import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import InputText from "./InputText";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "Form Components/InputText",
  component: InputText,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    backgroundColor: { control: "color" },
  },
} as ComponentMeta<typeof InputText>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof InputText> = (args) => (
  <InputText {...args} />
);

export const Primary = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Primary.args = {
  label: "Button",
  key: "name",
};

export const Secondary = Template.bind({});
Secondary.args = {
  label: "Weight",
  key: "weight",
  suffix: "kg",
  suffixPosition: "inline",
};
