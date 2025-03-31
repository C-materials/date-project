import type { Meta, StoryObj } from "@storybook/react";
import { Color } from "../../styles";
import Select from "./Select";

const meta: Meta<typeof Select> = {
  component: Select,
  title: "UI/Select",
  argTypes: {
    disabled: {
      description: "옵션 선택을 비활성화합니다.",
    },
    errorMessage: {
      description: "에러 메시지 표시 및 테두리 색상 적용",
      control: { type: "text" },
    },
    placeholder: {
      description: "텍스트 입력 전 메시지 표시",
      control: { type: "text" },
    },
    optionList: {
      description: "옵션 6개 초과 시 스크롤하여 옵션 탐색",
    },
    initialValue: {
      description: "초기 값 전달",
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
    optionList: [
      "option1",
      "option2",
      "option3",
      "option4",
      "option5",
      "option6",
      "option7",
      "option8",
      "option9",
    ],
    initialValue: "초기 입력값",
    width: 160,
  },
  render: (args) => {
    return (
      <div style={{ padding: "40px", background: Color.bg }}>
        <Select {...args} />
      </div>
    );
  },
};

export const Invalid: Story = {
  args: {
    disabled: false,
    errorMessage: "에러메시지",
    optionList: ["option1", "option2", "option3", "option4"],
  },
  render: (args) => {
    return (
      <div style={{ padding: "40px", background: Color.bg }}>
        <Select {...args} />
      </div>
    );
  },
};
