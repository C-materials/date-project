import { Meta, StoryObj } from "@storybook/react";
import ButtonComponent from "./ButtonComponent";

const meta: Meta<typeof ButtonComponent> = {
  component: ButtonComponent,
  title: "UI/ImageUploader",
  decorators: [],
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Button: Story = {};
