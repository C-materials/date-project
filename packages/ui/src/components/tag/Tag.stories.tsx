import type { Meta, StoryObj } from "@storybook/react";
import { useState } from "react";
import { Color } from "../../styles/theme.css";
import Tag from "./Tag";

const meta: Meta<typeof Tag> = {
  component: Tag,
  title: "UI/Tag",
  argTypes: {
    disabled: {
      description: "체크박스 체크 여부",
      control: "boolean",
    },
    checked: {
      description: "클릭 시 checked 토글",
      control: "boolean",
    },
    accent: {
      description: "true 설정 시 accent 색상 적용",
      control: "boolean",
    },
    onClick: {
      description: "클릭 ",
    },
  },
};

export default meta;

type Story = StoryObj<typeof Tag>;

export const Default: Story = {
  args: {
    disabled: false,
    checked: false,
    accent: false,
    content: "Tag",
  },
  render: (args) => {
    const [isChecked, setIsChecked] = useState(args.checked);
    const handleClick = () => {
      setIsChecked((prev) => !prev);
    };

    return (
      <div style={{ padding: "40px", background: Color.bg }}>
        <Tag {...args} checked={isChecked} onClick={handleClick} />
      </div>
    );
  },
};
