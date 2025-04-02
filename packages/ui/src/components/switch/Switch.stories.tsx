import type { Meta, StoryObj } from "@storybook/react";
import { story } from "../../styles/storyStyle.css";
import Switch from "./Switch";

const meta: Meta<typeof Switch> = {
  component: Switch,
  title: "UI/Switch",
  argTypes: {
    disabled: {
      control: "boolean",
    },
    checked: {
      control: "boolean",
    },
  },
};

export default meta;

type Story = StoryObj<typeof Switch>;

export const Default: Story = {
  args: {
    disabled: false,
    checked: false,
  },
  render: (args) => {
    return (
      <div className={story}>
        <Switch {...args} />
      </div>
    );
  },
};
