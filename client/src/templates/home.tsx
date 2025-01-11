import { Header } from "../molecules";
import { Categories, RecentBlogs } from "../organisms";

type IAuthor = {
  _id: string;
  username: string;
};

export type IPost = {
  _id: string;
  title: string;
  summary: string;
  content: string;
  cover: string;
  author: IAuthor;
  createdAt: string;
  updatedAt: string;
};

export const Home = () => {
  return (
    <div className="flex justify-evenly">
      {/* <Header /> */}
      {/* <Categories /> */}
      {/* <RecentBlogs /> */}
      {/* <div className="h-full bg-slate-400 min-w-[728px] max-w-[728px]">
        hello
      </div>
      <div className="h-full bg-slate-400 min-w-[368px] max-w-[368px]">
        side
      </div> */}
      <section className="h-full min-w-[728px] max-w-[728px]">
        <RecentBlogs />
      </section>
      <section className="h-full min-w-[368px] max-w-[368px] px-[24px]">
        <Categories />
      </section>
    </div>
  );
};
