import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import RightNav from "../components/RightNav";

export default {
  title: "Example/RightNav",
  component: RightNav,
} as ComponentMeta<typeof RightNav>;

const Template: ComponentStory<typeof RightNav> = (args) => (
  <RightNav {...args} />
);

export const ExampleOne = Template.bind({});
ExampleOne.args = {};
