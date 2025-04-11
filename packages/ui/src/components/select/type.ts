import type { InputProps } from "../textfield/textInput/type";

export type SelectProps = InputProps & {
  optionList: string[] | number[];
  onChangeValue: (value: string | number) => void;
  isOpen?: boolean;
  onClickClose?: () => void;
  onClickInput?: () => void;
};
