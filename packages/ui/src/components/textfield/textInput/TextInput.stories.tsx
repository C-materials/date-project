import type { Meta, StoryObj } from "@storybook/react";
import { Color } from "../../../styles";
import TextInput from "./TextInput";

const meta: Meta<typeof TextInput> = {
  component: TextInput,
  title: "UI/TextInput",
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
    isSelect: {
      description: "select 컴포넌트로 활용 시 사용하는 prop입니다",
      control: false,
    },
    show: {
      description: "select 컴포넌트로 활용 시 사용하는 prop입니다",
      control: false,
    },
    suffix: {
      description: "select 컴포넌트로 활용 시 사용하는 prop입니다",
      control: false,
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
        <TextInput {...args} />
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
        <TextInput {...args} />
      </div>
    );
  },
};
