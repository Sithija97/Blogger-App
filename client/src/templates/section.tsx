import { ReactNode } from "react";

type IProps = {
  title: string;
  children: ReactNode;
  customStyles?: string;
};

export const SectionTemplate = ({ title, children, customStyles }: IProps) => {
  return (
    <div className={`mb-4 py-4 ${customStyles}`}>
      <h6 className="text-sm font-semibold mb-4">{title}</h6>
      {children}
    </div>
  );
};
