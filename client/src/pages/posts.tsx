import { RecentBlogs } from "../organisms";
import { SectionTemplate } from "../templates/section";

export const AllPosts = () => {
  return (
    <SectionTemplate title="All Posts">
      <div className="flex flex-col gap-8 lg:gap-4 h-[calc(100vh-140px)] overflow-y-auto px-20">
        <RecentBlogs />
      </div>
    </SectionTemplate>
  );
};
