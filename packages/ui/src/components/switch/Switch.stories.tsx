import type { Meta, StoryObj } from "@storybook/react";
import { useState } from "react";
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
    onChange: {
      description: "컴포넌트 상위에서 value 상태 관리",
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
    const [isActive, setIsActive] = useState(args.checked);
    const handleChange = () => {
      setIsActive((prev) => !prev);
    };

    return (
      <div className={story}>
        <Switch {...args} onChange={handleChange} checked={isActive} />
      </div>
    );
  },
};
