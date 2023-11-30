interface MenuItemProps {
  label: string;
  handleClick: () => void;
}

export function MenuItem({ label, handleClick }: MenuItemProps) {
  return (
    <button
      className="p-2 flex justify-center items-center rounded-lg bg-transparent text-text-secondary text-base font-normal hover:text-text-primary hover:font-bold focus:text-text-primary focus:border-2 focus:border-text-primary focus:font-bold"
      onClick={handleClick}
    >
      {label}
    </button>
  );
}
