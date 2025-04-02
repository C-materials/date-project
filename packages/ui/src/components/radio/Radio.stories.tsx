import type { Meta, StoryObj } from "@storybook/react";
import { useState } from "react";
import { Color } from "../../styles/theme.css";
import Radio from "./Radio";

const meta: Meta<typeof Radio> = {
  component: Radio,
  title: "UI/Input/Radio",
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

type Story = StoryObj<typeof Radio>;

export const Default: Story = {
  args: {
    disabled: false,
    name: "default",
    label: "Radio",
  },
  render: (args) => {
    const [isChecked, setIsChecked] = useState(false);
    const handleClickRadio = () => {
      if (args.disabled) return;
      setIsChecked((prev) => !prev);
    };
    return (
      <div style={{ padding: "40px", background: Color.bg }}>
        <Radio {...args} checked={isChecked} onClick={handleClickRadio} />
      </div>
    );
  },
};
