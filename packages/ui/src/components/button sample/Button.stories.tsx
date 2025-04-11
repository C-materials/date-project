import type { Meta, StoryObj } from "@storybook/react";
import { Color } from "../../styles/theme.css";
import { Button } from "./ButtonSample";

const meta: Meta<typeof Button> = {
  component: Button,
  title: "UI/Button Sample",
  argTypes: {
    variant: {
      description: "버튼의 종류를 설정할 수 있습니다.",
      options: ["primary", "secondary", "outline", "accent"],
      control: { type: "radio" },
    },
    icon: {
      description: "버튼의 아이콘을 설정할 수 있습니다.",
    },
    iconPosition: {
      description: "버튼의 아이콘 위치를 설정할 수 있습니다.",
      options: ["left", "right"],
      control: { type: "radio" },
    },
    disabled: {
      description: "버튼을 비활성화할 수 있습니다.",
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
      <div style={{ padding: "40px", background: Color.bg }}>
        <Button {...args} />
      </div>
    );
  },
};

export const WithIcon: Story = {
  args: {
    variant: "primary",
    iconPosition: "right",
    icon: (
      <div
        style={{
          width: "12px",
          height: "12px",
          borderRadius: "8px",
          backgroundColor: "red",
        }}
      />
    ),
    children: "Button",
  },
  render: (args) => {
    return (
      <div style={{ padding: "40px", background: Color.bg }}>
        <Button {...args} />
      </div>
    );
  },
};
