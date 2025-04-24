import type { Meta, StoryObj } from "@storybook/react";
import { story } from "../../styles/storyStyle.css";
import Toast from "./Toast";

const meta: Meta<typeof Toast> = {
  component: Toast,
  title: "UI/Toast",
  argTypes: {
    type: {
      description: `"success" | "warning" | "critical"`,
      control: "radio",
      options: ["success", "warning", "critical"],
    },
    content: {
      description: "토스트 내부 컨텐츠",
    },
    icon: {
      description: "아이콘 추가 여부",
      control: "boolean",
    },
    top: {
      description: "토스트 상단으로부터의 위치",
      control: "range",
    },
    width: {
      description: "토스트 너비",
      control: { type: "range", min: 240, max: 400 },
    },
    className: {
      description: "토스트에 적용할 스타일",
    },
    isOpen: {
      description: "토스트 노출 여부",
      control: "boolean",
    },
  },
};

export default meta;

type Story = StoryObj<typeof Toast>;

export const Default: Story = {
  args: {
    type: "success",
    icon: true,
    top: 64,
    width: 240,
    isOpen: true,
  },
  render: (args) => {
    return (
      <div className={story}>
        <Toast {...args} />
      </div>
    );
  },
};
