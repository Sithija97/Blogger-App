import { Post } from "../molecules";
import { data } from "../organisms";
import { SectionTemplate } from "../templates/section";

export const LikedPosts = () => {
  return (
    <SectionTemplate title="Liked Posts" customStyles="ml-4">
      <div className="flex flex-col gap-8 lg:gap-4 px-20 h-[calc(100vh-140px)] overflow-y-auto">
        {data.map((item, index) => (
          <div key={index} className="flex flex-col lg:flex-row gap-2 lg:gap-4">
            <Post {...item} />
          </div>
        ))}
      </div>
    </SectionTemplate>
  );
};
