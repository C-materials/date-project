import type { Meta, StoryObj } from "@storybook/react";
import { useState } from "react";
import { Color } from "../../styles/theme.css";
import CheckBox from "./CheckBox";

const meta: Meta<typeof CheckBox> = {
  component: CheckBox,
  title: "UI/CheckBox",
  argTypes: {
    disabled: {
      description: "체크박스 체크 여부",
      control: "boolean",
    },
    name: {
      description: "체크박스 name",
      control: "text",
    },
    label: {
      description: "체크박스 라벨",
      control: "text",
    },
  },
};

export default meta;

type Story = StoryObj<typeof CheckBox>;

export const Default: Story = {
  args: {
    disabled: false,
    name: "default",
    label: "Check Box",
  },
  render: (args) => {
    const [isChecked, setIsChecked] = useState(false);
    const handleClickCheckBox = () => {
      if (args.disabled) return;
      setIsChecked((prev) => !prev);
    };
    return (
      <div style={{ padding: "40px", background: Color.bg }}>
        <CheckBox {...args} checked={isChecked} onClick={handleClickCheckBox} />
      </div>
    );
  },
};
