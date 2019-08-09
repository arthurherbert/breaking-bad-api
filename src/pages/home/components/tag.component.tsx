import React from "react";
import cx from "classnames";

interface TagProps {
  type: string;
  active: boolean;
  onClick?: () => void;
}
export const Tag: React.FC<TagProps> = ({
  type,
  active,
  onClick,
  children
}) => {
  const classes = cx("tag", {
    "is-active": active,
    "tag--type-alive": type === "Alive",
    "tag--type-dead": type === "Deceased"
  });
  return (
    <span className={classes} onClick={onClick}>
      {children}
    </span>
  );
};
