import type { ComponentPropsWithoutRef, ReactNode } from "react";

export type InputProps = ComponentPropsWithoutRef<"input"> & {
  errorMessage?: string;
  suffix?: ReactNode;
};
