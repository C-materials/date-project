import { Meta, StoryObj } from "@storybook/react";
import ImageUploader from "./ImageUploader";

const meta: Meta<typeof ImageUploader> = {
  component: ImageUploader,
  title: "UI/ImageUploader",
  decorators: [],
};

export default meta;
type Story = StoryObj<typeof meta>;

export const ImgaeFileInput: Story = {};
