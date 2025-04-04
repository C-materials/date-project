import type { Meta, StoryObj } from "@storybook/react";
import { useState } from "react";
import { story } from "../../styles/storyStyle.css";
import Slider from "./Slider";

const meta: Meta<typeof Slider> = {
  component: Slider,
  title: "UI/Slider",
};
export default meta;

type Story = StoryObj<typeof Slider>;

export const Default: Story = {
  args: {
    disabled: false,
    min: 0,
    max: 200,
    unit: "unit",
    width: 300,
  },
  render: (args) => {
    const [value, setValue] = useState<[number, number]>([0, 100]);
    const handleChange = () => {
      // setValue()
    };
    return (
      <div className={story}>
        <Slider {...args} onInput={handleChange} value={value} />
      </div>
    );
  },
};
