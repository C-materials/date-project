import type { Meta, StoryObj } from "@storybook/react";
import { Button } from "./button";

const meta: Meta<typeof Button> = {
  component: Button,
  title: "UI/Button",
};

export default meta;
type Story = StoryObj<typeof meta>;

// 다양한 버튼 스토리
export const Primary: Story = {
  args: {
    children: "기본 버튼",
    appName: "Date Project",
    className: "btn-primary",
  },
};

export const Secondary: Story = {
  args: {
    children: "보조 버튼",
    appName: "Date Project",
    className: "btn-secondary",
  },
};

export const Large: Story = {
  args: {
    children: "큰 버튼",
    appName: "Date Project",
    className: "btn-primary btn-large",
  },
};

export const Small: Story = {
  args: {
    children: "작은 버튼",
    appName: "Date Project",
    className: "btn-secondary btn-small",
  },
};
