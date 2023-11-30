import { ArrowRight } from "@phosphor-icons/react/dist/ssr/ArrowRight";

interface ButtonProps {
  variant?: "primary" | "secondary";
  label: string;
  handleClick: () => void;
}

export function Button({
  label,
  handleClick,
  variant = "primary",
}: ButtonProps) {
  const backgroundColor = {
    primary: "bg-primary-500 hover:bg-primary-400 focus:bg-primary-400",
    secondary:
      "bg-surface-secondary hover:bg-surface-tertiary focus:bg-surface-tertiary",
  };

  return (
    <button
      className={
        backgroundColor[variant] +
        " px-6 py-4 flex flex-row gap-2 rounded-lg justify-center items-center text-text-primary text-base font-medium focus:border-2 focus:border-neutral-100"
      }
      onClick={handleClick}
    >
      {label}
      <ArrowRight size={24} color="text-text-primary" />
    </button>
  );
}
