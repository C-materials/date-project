import type { Meta, StoryObj } from "@storybook/react";
import type { ChangeEvent } from "react";
import { useState } from "react";
import { Color } from "../../styles/theme.css";
import CheckBox from "./CheckBox";

const meta: Meta<typeof CheckBox> = {
  component: CheckBox,
  title: "UI/CheckBox/Single",
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
      description: "체크박스 라벨 - 보여지는 값",
      control: "text",
    },
    onClick: {
      description: "컴포넌트 전체 영역 클릭 핸들러",
    },
    onChange: {
      description: "input 값 change 핸들러",
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

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
      setIsChecked(e.target.checked);
    };
    return (
      <div style={{ padding: "40px", background: Color.bg }}>
        <CheckBox
          {...args}
          checked={isChecked}
          onClick={handleClickCheckBox}
          onChange={handleChange}
        />
      </div>
    );
  },
};
