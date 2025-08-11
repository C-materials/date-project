import type { Meta, StoryObj } from "@storybook/react";
import { useState } from "react";
import { Button } from "../button";
import Dialog from "./Dialog";

const meta: Meta<typeof Dialog> = {
  component: Dialog,
  title: "UI/Dialog",
  argTypes: {
    isMobile: {
      description: "모바일 여부에 따라 dialog width 적용",
      control: "boolean",
    },
    isOpen: {
      description: "show",
    },
    onClose: {
      description: "onClose",
    },
    closeButton: {
      description: "상단 dialog 닫힘 버튼 여부",
      control: "boolean",
    },
  },
};

export default meta;

type Story = StoryObj<typeof Dialog>;

export const Default: Story = {
  args: {
    isMobile: false,
    closeButton: true,
    headerTitle: "Dialog Title",
    headerDescription: "description",
    footer: (
      <>
        <Button variant="outline">button</Button>
        <Button variant="primary">button</Button>
      </>
    ),
  } as any,
  render: (args) => {
    // storybook test를 위해 any 처리
    const { isMobile, closeButton, headerTitle, headerDescription, footer } =
      args as any;
    const [show, setShow] = useState(false);
    return (
      <>
        <div style={{ padding: "40px" }}>
          <Button variant="primary" onClick={() => setShow((prev) => !prev)}>
            Click!
          </Button>
          <Dialog
            isOpen={show}
            onClose={() => setShow(false)}
            isMobile={isMobile}
            closeButton={closeButton}
          >
            <Dialog.Header
              title={headerTitle}
              description={headerDescription}
            />
            <Dialog.Content>
              <div>content is here</div>
            </Dialog.Content>
            <Dialog.Footer>{footer}</Dialog.Footer>
          </Dialog>
        </div>
      </>
    );
  },
};
