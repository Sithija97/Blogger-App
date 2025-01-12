import { Post } from "../molecules";
import { data } from "../organisms";
import { SectionTemplate } from "./section";

export const AllPosts = () => {
  return (
    <SectionTemplate title="All Posts">
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
