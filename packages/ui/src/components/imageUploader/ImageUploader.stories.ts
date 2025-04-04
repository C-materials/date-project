import type { Meta, StoryObj } from "@storybook/react";
import ImageUploader from "./ImageUploader";

const meta: Meta<typeof ImageUploader> = {
  component: ImageUploader,
  title: "UI/ImageUploader",
  argTypes: {
    disabled: {
      description: "체크박스 체크 여부",
      control: "boolean",
    },
  },
};

export default meta;

type Story = StoryObj<typeof ImageUploader>;
