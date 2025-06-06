import type { Meta, StoryObj } from "@storybook/react";
import { useState } from "react";
import { story } from "../../styles/storyStyle.css";
import Tag from "./Tag";

const meta: Meta<typeof Tag> = {
  component: Tag,
  title: "UI/Tag",
  argTypes: {
    content: {
      description: "태그 내부에 들어갈 값",
      control: "text",
    },
    disabled: {
      description: "체크박스 체크 여부",
      control: "boolean",
    },
    checked: {
      description: "체크 여부",
      control: "boolean",
    },
    accent: {
      description: "accent 스타일 적용",
      control: "boolean",
    },
    onClick: {
      description: "클릭 시 활성화 토글",
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
      <div className={story}>
        <Tag {...args} checked={isChecked} onClick={handleClick} />
      </div>
    );
  },
};
