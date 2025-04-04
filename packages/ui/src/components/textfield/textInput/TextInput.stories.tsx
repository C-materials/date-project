import type { Meta, StoryObj } from "@storybook/react";
import type { ChangeEvent } from "react";
import { useState } from "react";
import { Color } from "../../../styles";
import TextInput from "./TextInput";

const meta: Meta<typeof TextInput> = {
  component: TextInput,
  title: "UI/Input/TextInput",
  argTypes: {
    disabled: {
      description: "텍스트 필드를 비활성화",
    },
    errorMessage: {
      description: "에러 메시지 있을때만 invalid 스타일 적용",
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
    width: {
      description: "컴포넌트 너비",
      control: { type: "range", min: 160, max: 500 },
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    disabled: false,
    placeholder: "텍스트를 입력해주세요",
    errorMessage: "",
  },
  render: (args) => {
    const [initialValue, setInitialValue] = useState("기본 입력값");
    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
      setInitialValue(e.target.value);
    };
    return (
      <div style={{ padding: "40px", background: Color.bg }}>
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
