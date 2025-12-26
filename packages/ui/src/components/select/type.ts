import type { InputProps } from "../textfield/text-input/type";

export type SelectProps = InputProps & {
  optionList?: string[] | number[];
  onChangeValue?: (value: string | number) => void;
  isOpen?: boolean;
  onClickClose?: () => void;
  onClickInput?: () => void;
};
