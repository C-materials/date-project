import { tag } from "./style.css";
type VariantType = "active" | "accent";
type TagProps = {
  content: string;
  disabled?: boolean;
  variant: VariantType;
  checked?: boolean;
  onClick?: () => void;
  as?: "li" | "div";
};
const Tag = ({
  content,
  disabled,
  variant = "active",
  checked,
  onClick,
  as,
}: TagProps) => {
  const TagComponent = as || "div";
  let tagStyle: VariantType | "default" = checked ? variant : "default";

  const handleClick = () => {
    if (!disabled) onClick?.();
  };
  return (
    <TagComponent
      onClick={handleClick}
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
