import type { Meta, StoryObj } from "@storybook/react";
import { FiUserPlus } from "react-icons/fi";
import { story } from "../../styles/storyStyle.css";
import Button from "./Button";

const meta: Meta<typeof Button> = {
  component: Button,
  title: "UI/Button",
  argTypes: {
    variant: {
      description: "버튼 스타일 종류 설정",
      options: ["primary", "secondary", "outline", "accent"],
      control: { type: "radio" },
    },
    leftIcon: {
      description: "(optional) 버튼 좌측 아이콘",
    },

    rightIcon: {
      description: "(optional) 버튼 우측 아이콘",
    },
    disabled: {
      description: "버튼 비활성화 여부",
      control: { type: "boolean" },
    },
    isLoading: {
      control: { type: "boolean" },
    },
  },
};

export default meta;
type Story = StoryObj<typeof Button>;

export const Default: Story = {
  args: {
    variant: "primary",
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
    disabled: false,
    children: "Button",
    leftIcon: <FiUserPlus />,
    rightIcon: <FiUserPlus />,
    isLoading: false,
  },
  render: (args) => {
    return (
      <div className={story}>
        <Button type="button" {...args} />
      </div>
    );
  },
};

export const Loading: Story = {
  args: {
    variant: "primary",
    disabled: false,
    children: "Button",
    isLoading: true,
  },
  render: (args) => {
    return (
      <div className={story}>
        <Button type="button" {...args} />
      </div>
    );
  },
};
