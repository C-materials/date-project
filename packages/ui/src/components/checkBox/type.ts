import type { ComponentPropsWithoutRef } from "react";

export type CheckBoxProps = ComponentPropsWithoutRef<"input"> & {
  label?: string;
};
