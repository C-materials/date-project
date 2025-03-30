import type { Meta, StoryObj } from "@storybook/react";
import type { ChangeEvent } from "react";
import { useState } from "react";
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
    suffix: {
      description: "input 내부 우축에 추가하는 요소",
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
    const [initialValue, setInitialValue] = useState("기본 입력값");
    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
      setInitialValue(e.target.value);
    };
    return (
      <div style={{ padding: "40px", background: Color.bg }}>
        <p>input 입력하면 value 콘솔에 출력</p>
        <TextInput value={initialValue} onChange={handleChange} {...args} />
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
