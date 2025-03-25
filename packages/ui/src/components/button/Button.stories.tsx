import type { Meta, StoryObj } from "@storybook/react";
import { FiUserPlus } from "react-icons/fi";
import Button from "./Button";
import { story } from "./storyStyle.css";

const meta: Meta<typeof Button> = {
  component: Button,
  title: "UI/Button",
  argTypes: {
    variant: {
      description: "버튼 스타일 종류 설정",
      options: ["primary", "secondary", "outline", "accent"],
      control: { type: "radio" },
    },
    icon: {
      description: "(optional) 버튼 아이콘",
    },
    iconPosition: {
      description: "버튼 아이콘 위치 설정",
      options: ["left", "right"],
      control: { type: "radio" },
    },
    disabled: {
      description: "버튼 비활성화 여부",
      control: { type: "boolean" },
    },
  },
};

export default meta;
type Story = StoryObj<typeof Button>;

export const Default: Story = {
  args: {
    variant: "primary",
    iconPosition: "left",
    disabled: false,
    children: "Button",
  },
  render: (args) => {
    return (
      <div className={story}>
        <Button type="button" {...args} />
      </div>
    );
  },
};

export const withIcon: Story = {
  args: {
    variant: "primary",
    iconPosition: "left",
    disabled: false,
    children: "Button",
    icon: <FiUserPlus />,
  },
  render: (args) => {
    return (
      <div className={story}>
        <Button type="button" {...args} />
      </div>
    );
  },
};
