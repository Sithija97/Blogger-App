import { ReactNode } from "react";

type IProps = {
  title: string;
  children: ReactNode;
};

export const SectionTemplate = ({ title, children }: IProps) => {
  return (
    <div className="mb-4 py-4">
      <h1 className="text-xl font-semibold mb-4">{title}</h1>
      {children}
    </div>
  );
};
