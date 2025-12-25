import type { ComponentPropsWithoutRef } from "react";

export type CheckboxProps = ComponentPropsWithoutRef<"input"> & {
  label?: string;
};
