import type { Meta, StoryObj } from "@storybook/react";
import ButtonComponent from "./ButtonComponent";
import type { MouseEvent } from "react";
import { FiUserPlus } from "react-icons/fi";

const meta: Meta<typeof ButtonComponent> = {
  component: ButtonComponent,
  title: "UI/Button/Variant",
  argTypes: {
    children: { control: "text" },
    type: {
      control: "radio",
      options: ["button", "submit", "reset"],
    },
    variant: {
      control: "radio",
      options: ["primary", "secondary", "outline", "accent"],
    },
    onClick: (e: MouseEvent) => alert("클릭 이벤트 발생"),
    disabled: { control: "boolean" },
  },
  tags: ["!autodocs"],
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary_Button: Story = {
  args: {
    variant: "primary",
    disabled: false,
    children: "버튼입니다",
  },
};

export const Secondary_Button: Story = {
  args: {
    variant: "secondary",
    disabled: false,
    children: "버튼입니다",
  },
};

export const Accent_Button: Story = {
  args: {
    variant: "accent",
    disabled: false,
    children: "버튼입니다",
  },
};

export const Outline_Button: Story = {
  args: {
    variant: "outline",
    disabled: false,
    children: "버튼입니다",
  },
};

export const Icon_Button: Story = {
  args: {
    variant: "outline",
    disabled: false,
    children: "버튼입니다",
    icon: <FiUserPlus />,
  },
};
