import type { Meta, StoryObj } from "@storybook/react";
import { Color } from "../../../styles";
import Textarea from "./Textarea";

const meta: Meta<typeof Textarea> = {
  component: Textarea,
  title: "UI/TextArea",
  argTypes: {
    disabled: {
      description: "텍스트 필드를 비활성화",
    },
    errorMessage: {
      description: "에러 메시지 표시 및 테두리 색상 적용",
      control: { type: "text" },
    },
    placeholder: {
      description: "텍스트 입력 전 메시지 표시",
      control: { type: "text" },
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    disabled: false,
    placeholder: "텍스트를 입력해주세요",
  },
  render: (args) => {
    return (
      <div style={{ padding: "40px", background: Color.bg }}>
        <Textarea {...args} />
      </div>
    );
  },
};

export const Invalid: Story = {
  args: {
    disabled: false,
    placeholder: "텍스트를 입력해주세요",
    errorMessage: "에러 메시지",
  },
  render: (args) => {
    return (
      <div style={{ padding: "40px", background: Color.bg }}>
        <Textarea {...args} />
      </div>
    );
  },
};
