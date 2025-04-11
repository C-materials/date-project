import type { InputProps } from "../textfield/textInput/type";

export type SelectProps = InputProps & {
  optionList: string[];
  onChangeValue: (value: string) => void;
  isOpen?: boolean;
  onClickClose?: () => void;
  onClickInput?: () => void;
};
