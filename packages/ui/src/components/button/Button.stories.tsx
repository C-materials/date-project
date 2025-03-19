import type { Meta, StoryObj } from "@storybook/react";
import { FiUserPlus } from "react-icons/fi";
import Button from "./Button";
import { block, story } from "./storyStyle.css";

const meta: Meta<typeof Button> = {
  component: Button,
  title: "UI/Button",
  tags: ["!autodocs"],
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => {
    return (
      <div className={story}>
        <h3>primary</h3>
        <div className={block}>
          <Button type="button" variant="primary">
            DEFAULT
          </Button>
          <Button type="button" variant="primary" disabled>
            DISABLED
          </Button>
        </div>
        <h3>secondary</h3>
        <div className={block}>
          <Button type="button" variant="secondary">
            DEFAULT
          </Button>
          <Button type="button" variant="secondary" disabled>
            DISABLED
          </Button>
        </div>
        <h3>outline</h3>
        <div className={block}>
          <Button type="button" variant="outline">
            DEFAULT
          </Button>
          <Button type="button" variant="outline" disabled>
            DISABLED
          </Button>
        </div>
        <h3>accent</h3>
        <div className={block}>
          <Button type="button" variant="accent">
            DEFAULT
          </Button>
          <Button type="button" variant="accent" disabled>
            DISABLED
          </Button>
        </div>
        <h3>with Icon</h3>
        <div className={block}>
          <Button type="button" variant="accent" icon={<FiUserPlus />}>
            DEFAULT
          </Button>
          <Button type="button" variant="accent" icon={<FiUserPlus />} disabled>
            DISABLED
          </Button>
        </div>
      </div>
    );
  },
};
