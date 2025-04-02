import type { Meta, StoryObj } from "@storybook/react";
import { Color } from "../../styles";
import RadioList from "./RadioList";

const meta: Meta<typeof RadioList> = {
  component: RadioList,
  title: "UI/Radio/List",
  argTypes: {
    checkList: {
      description:
        "label(필수), name, checked, disabled 속성을 포함한 객체의 배열을 prop으로 받습니다",
    },
    style: {
      description:
        "여러개의 체크박스를 감싸고 있는 fieldset태그에 style이 적용됩니다 {key: 'value', key:'value',...} 형태로 작성",
      control: "object",
    },
  },
};

export default meta;

type Story = StoryObj<typeof RadioList>;

export const MultiList: Story = {
  args: {
    style: { display: "flex", flexDirection: "column", gap: "8px" },
    checkList: [
      { id: "1", name: "name1", label: "label1" },
      { id: "2", name: "name2", label: "label2" },
      { id: "3", name: "name3", label: "label3" },
      { id: "4", name: "name4", label: "label4", checked: true },
      { id: "5", name: "name5", label: "label5", disabled: true },
    ],
  },
  render: (args) => {
    return (
      <div style={{ padding: "40px", background: Color.bg }}>
        <RadioList {...args} />
      </div>
    );
  },
};
