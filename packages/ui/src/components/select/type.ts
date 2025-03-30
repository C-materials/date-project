import type { ComponentPropsWithoutRef } from "react";

export type SelectProps = ComponentPropsWithoutRef<"input"> & {
  errorMessage?: string;
  optionList: string[];
  initialValue?: string;
};
