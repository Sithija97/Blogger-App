import { ReactNode } from "react";

type IProps = {
  title: string;
  children: ReactNode;
};

export const SectionTemplate = ({ title, children }: IProps) => {
  return (
    <div className="mb-4 py-4">
      <h6 className="text-sm font-semibold mb-4">{title}</h6>
      {children}
    </div>
  );
};
