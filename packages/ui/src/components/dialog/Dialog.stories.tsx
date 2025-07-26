import type { Meta, StoryObj } from "@storybook/react";
import { useState } from "react";
import { Button } from "../button";
import Dialog from "./Dialog";

const meta: Meta<typeof Dialog> = {
  component: Dialog,
  title: "UI/Dialog",
  argTypes: {
    isMobile: {
      description: "모바일 여부에 따라 wrapper 크기 적용",
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
  },
  render: (args) => {
    const { isMobile, closeButton } = args;
    const [show, setShow] = useState(false);
    return (
      <>
        <div id="global-dialog"></div>
        <div style={{ padding: "40px" }}>
          <Button variant="outline" onClick={() => setShow((prev) => !prev)}>
            Click!
          </Button>
          <Dialog
            show={show}
            onClose={() => setShow(false)}
            isMobile={isMobile}
            closeButton={closeButton}
          >
            <Dialog.Header title="Dialog Title" description="description" />
            <Dialog.Content>
              <div>body content</div>
            </Dialog.Content>
            <Dialog.Footer>
              <Button
                variant="outline"
                onClick={() => console.log("button1 clicked")}
              >
                button
              </Button>
              <Button
                variant="primary"
                onClick={() => console.log("button2 clicked")}
              >
                button
              </Button>
            </Dialog.Footer>
          </Dialog>
        </div>
      </>
    );
  },
};
