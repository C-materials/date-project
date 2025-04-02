import type { Meta, StoryObj } from "@storybook/react";
import { story } from "../../styles/storyStyle.css";
import FileUpload from "./FileUpload";

const meta: Meta<typeof FileUpload> = {
  component: FileUpload,
  title: "UI/FileUpload",
  argTypes: {
    disabled: {
      description: "체크박스 체크 여부",
      control: "boolean",
    },
  },
};

export default meta;

type Story = StoryObj<typeof FileUpload>;

export const Default: Story = {
  args: {
    disabled: false,
  },
  render: (args) => {
    return (
      <div className={story}>
        <FileUpload {...args} />
      </div>
    );
  },
};
