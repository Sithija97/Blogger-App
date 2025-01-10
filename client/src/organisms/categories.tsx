import { Badge } from "../attoms";
import { SectionTemplate } from "../templates";

export type ICategory = {
  label: string;
  color: string;
};

export const Categories = () => {
  const categories: ICategory[] = [
    { label: "DSA", color: "pink" },
    { label: "MERN Stack", color: "orange" },
    { label: "Next js", color: "blue" },
    { label: "Trending Topics", color: "purple" },
  ];
  return (
    <SectionTemplate title="Categories">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {categories.map((category, index) => (
          <Badge key={index} label={category.label} color={category.color} />
        ))}
      </div>
    </SectionTemplate>
  );
};
