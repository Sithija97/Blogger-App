import { useLocation } from "react-router-dom";
import { Post } from "../molecules";
import { data } from "../organisms";
import { SectionTemplate } from "../templates/section";

export const Categories = () => {
  const location = useLocation();
  return (
    <SectionTemplate title={location.pathname.split("/")[2]}>
      <div className="flex flex-col gap-8 lg:gap-4 h-[calc(100vh-140px)] overflow-y-auto px-20">
        {data.map((item, index) => (
          <div key={index} className="flex flex-col lg:flex-row gap-2 lg:gap-4">
            <Post {...item} />
          </div>
        ))}
      </div>
    </SectionTemplate>
  );
};
