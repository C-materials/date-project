import type { Meta, StoryObj } from "@storybook/react";
import { FiUserPlus } from "react-icons/fi";
import ButtonComponent from "./ButtonComponent";
import { block, story } from "./storyStyle.css";

const meta: Meta<typeof ButtonComponent> = {
  component: ButtonComponent,
  title: "UI/Button",
  tags: ["!autodocs"],
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Button: Story = {
  render: () => {
    return (
      <div className={story}>
        <h3>primary</h3>
        <div className={block}>
          <ButtonComponent type="button" variant="primary">
            DEFAULT
          </ButtonComponent>
          <ButtonComponent type="button" variant="primary" disabled>
            DISABLED
          </ButtonComponent>
        </div>
        <h3>secondary</h3>
        <div className={block}>
          <ButtonComponent type="button" variant="secondary">
            DEFAULT
          </ButtonComponent>
          <ButtonComponent type="button" variant="secondary" disabled>
            DISABLED
          </ButtonComponent>
        </div>
        <h3>outline</h3>
        <div className={block}>
          <ButtonComponent type="button" variant="outline">
            DEFAULT
          </ButtonComponent>
          <ButtonComponent type="button" variant="outline" disabled>
            DISABLED
          </ButtonComponent>
        </div>
        <h3>accent</h3>
        <div className={block}>
          <ButtonComponent type="button" variant="accent">
            DEFAULT
          </ButtonComponent>
          <ButtonComponent type="button" variant="accent" disabled>
            DISABLED
          </ButtonComponent>
        </div>
        <h3>with Icon</h3>
        <div className={block}>
          <ButtonComponent type="button" variant="accent" icon={<FiUserPlus />}>
            DEFAULT
          </ButtonComponent>
          <ButtonComponent
            type="button"
            variant="accent"
            icon={<FiUserPlus />}
            disabled
          >
            DISABLED
          </ButtonComponent>
        </div>
      </div>
    );
  },
};
