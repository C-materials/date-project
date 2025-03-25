import type { ComponentPropsWithoutRef } from "react";

type InputProps = ComponentPropsWithoutRef<"input"> & {
  errorMessage?: string;
};

const TextInput = ({
  errorMessage,
  disabled = false,
  ...props
}: InputProps) => {
  return (
    <>
      <input disabled={disabled} {...props} />
      {errorMessage && <span>{errorMessage}</span>}
    </>
  );
};

export default TextInput;
