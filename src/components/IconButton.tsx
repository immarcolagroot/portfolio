import { cloneElement } from "react";

interface IconButtonProps {
  variant?: "background" | "on-surface";
  children: React.ReactNode;
  handleClick: () => void;
}

export function IconButton({
  children,
  handleClick,
  variant = "background",
}: IconButtonProps) {
  const backgroundColor = {
    background:
      "bg-surface-background hover:bg-surface-primary focus:bg-surface-primary",
    "on-surface":
      "bg-surface-secondary hover:bg-surface-tertiary focus:bg-surface-tertiary",
  };

  return (
    <button
      className={
        backgroundColor[variant] +
        " p-3 focus:border-2 focus:border-neutral-100 rounded-lg"
      }
      onClick={handleClick}
    >
      {cloneElement(children as React.ReactElement, {
        className: "w-6 h-6 text-text-primary",
      })}
    </button>
  );
}
