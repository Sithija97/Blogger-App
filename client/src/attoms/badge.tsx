import { ICategory } from "../organisms";

export const Badge = ({ label }: ICategory) => {
  return (
    <span className="inline-flex items-center rounded-md bg-gray-50 hover:bg-gray-200 px-2 py-1 text-xs font-semibold text-gray-600 ring-1 ring-inset ring-gray-500/10 mr-2 mb-2 cursor-pointer">
      {label}
    </span>
  );
};
