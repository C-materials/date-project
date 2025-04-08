import { tag } from "./style.css";

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
  variant: "active" | "accent";
  checked?: boolean;
  onClick?: () => void;
  as?: "li" | "div";
}) => {
  const TagComponent = as || "div";
  let tagStyle: "active" | "accent" | "default" = checked ? variant : "default";

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
