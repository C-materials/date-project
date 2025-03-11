import { Meta, StoryObj } from "@storybook/react";
import ImageInput from "./ImageInput";

const meta: Meta<typeof ImageInput> = {
  component: ImageInput,
  title: "UI/ImageInput",
  decorators: [],
};

export default meta;
type Story = StoryObj<typeof meta>;

export const ImgaeFileInput: Story = {};
