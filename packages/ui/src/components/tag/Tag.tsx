import { tag } from "./style.css";
type VariantType = "active" | "accent";

type TagProps = {
  content: string;
  disabled?: boolean;
  checked?: boolean;
  onClick?: () => void;
  as?: "li" | "div";
  accent?: boolean;
};
const Tag = ({
  content,
  disabled = false,
  checked,
  onClick,
  as,
  accent = false,
}: TagProps) => {
  const TagComponent = as || "div";

  let tagStyle: VariantType | "default" = "default";
  if (accent) {
    tagStyle = "accent";
  } else if (checked) {
    tagStyle = "active";
  }

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
