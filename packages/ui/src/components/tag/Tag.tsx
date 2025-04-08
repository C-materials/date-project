import { tag } from "./style.css";
import type { VariantType } from "./type";

const Tag = ({
  content,
  disabled,
  variant = "active",
  checked,
  onClick,
  as,
}: {
  content: string;
  disabled?: boolean;
  variant: VariantType;
  checked?: boolean;
  onClick?: () => void;
  as?: "li" | "div";
}) => {
  const TagComponent = as || "div";
  let tagStyle: VariantType | "default" = checked ? variant : "default";

  return (
    <TagComponent
      onClick={onClick}
      className={tag({
        tagStyle,
        disabled,
      })}
    >
      {content}
    </TagComponent>
  );
};

export default Tag;
