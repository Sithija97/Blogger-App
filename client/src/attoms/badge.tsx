import { ICategory } from "../organisms";

export const Badge = ({ label, color }: ICategory) => {
  return (
    <span
      className={`flex items-center justify-center rounded-md bg-${color}-50 px-4 py-2 text-normal font-medium text-${color}-600 cursor-pointer`}
    >
      {label}
    </span>
  );
};
