import type { Meta, StoryObj } from "@storybook/react";
import { useState } from "react";
import { story } from "../../styles/storyStyle.css";
import Slider from "./Slider";

const meta: Meta<typeof Slider> = {
  component: Slider,
  title: "UI/Slider",
  argTypes: {
    min: {
      description: "슬라이더의 최소값 (좌측 끝값)",
      control: "number",
    },
    max: {
      description: "슬라이더의 최대값 (우측 끝값)",
      control: "number",
    },
    step: {
      description: "값 변경 최소 단위",
      control: "range",
    },
    unit: {
      description: "슬라이더 값에 표시되는 단위",
    },
    width: {
      description: "슬라이더 컴포넌트의 너비",
      control: "number",
    },
    disabled: {
      control: "boolean",
    },
  },
};
export default meta;

type Story = StoryObj<typeof Slider>;

export const Default: Story = {
  args: {
    disabled: false,
    min: 0,
    max: 300,
    unit: "unit",
    width: 500,
    step: 10,
  },
  render: (args) => {
    const [value, setValue] = useState<[number, number]>([50, 100]);
    const handleChange = (value: [number, number]) => {
      setValue(value);
    };
    return (
      <div className={story}>
        <Slider {...args} onInput={handleChange} value={value} />
      </div>
    );
  },
};
