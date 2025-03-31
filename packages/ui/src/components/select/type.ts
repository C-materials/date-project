import type { InputProps } from "../textfield/textInput/type";

export type SelectProps = InputProps & {
  errorMessage?: string;
  optionList: string[];
  onChangeValue: (value: string) => void;
};
