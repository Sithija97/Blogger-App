import { Link } from "react-router-dom";
import { Badge } from "../attoms";
import { SectionTemplate } from "../templates";

export type ICategory = {
  label: string;
  color?: string;
};

export const Categories = () => {
  const categories: ICategory[] = [
    { label: "Programming" },
    { label: "DSA", color: "pink" },
    { label: "MERN Stack", color: "orange" },
    { label: "Next js", color: "blue" },
    { label: "Self Improvement" },
    { label: "Trending Topics", color: "purple" },
  ];
  return (
    <SectionTemplate
      title="Recommended topics"
      customStyles="border-l border-[#F2F2F2] h-full pr-6 pl-10"
    >
      {/* <div className="grid grid-cols-2 md:grid-cols-4 gap-4"> */}
      {categories.map((category, index) => (
        <Link key={index} to={`/categories/${category.label}`}>
          <Badge key={index} label={category.label} />
        </Link>
      ))}
    </SectionTemplate>
  );
};
