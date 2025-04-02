import type { Meta, StoryObj } from "@storybook/react";
import { Color } from "../../styles";
import CheckBoxList from "./CheckBoxList";

const meta: Meta<typeof CheckBoxList> = {
  component: CheckBoxList,
  title: "UI/CheckBox/List",
  argTypes: {
    checkList: {
      description:
        "label(필수), id, name, checked, disabled 속성을 포함한 객체의 배열을 prop으로 받습니다",
    },
    style: {
      description:
        "여러개의 체크박스를 감싸고 있는 fieldset태그에 style이 적용됩니다 {key: 'value', key:'value',...} 형태로 작성",
      control: "object",
    },
  },
};

export default meta;

type Story = StoryObj<typeof CheckBoxList>;

export const MultiList: Story = {
  args: {
    style: { display: "flex", flexDirection: "column", gap: "8px" },
    checkList: [
      { name: "name", id: "1", label: "label1" },
      { name: "name", id: "2", label: "label2" },
      { name: "name", id: "3", label: "label3" },
      { name: "name", id: "4", label: "label4", checked: true },
      { name: "name", id: "5", label: "label5", disabled: true },
    ],
  },
  render: (args) => {
    return (
      <div style={{ padding: "40px", background: Color.bg }}>
        <CheckBoxList {...args} />
      </div>
    );
  },
};
