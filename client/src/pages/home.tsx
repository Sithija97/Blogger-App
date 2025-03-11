import { useEffect } from "react";
import { Categories, RecentBlogs } from "../organisms";
import {
  getPosts,
  resetPostSuccess,
  resetUpdatePostSuccess,
} from "../store/post.slice";
import { RootState, useAppDispatch, useAppSelector } from "../store";
import { LoadingStates } from "../enums";
import { Loader } from "../attoms";
import { getCategories } from "../store/category.slice";

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
  const dispatch = useAppDispatch();
  const { getPostStatus } = useAppSelector((state: RootState) => state.posts);

  const loadData = () => {
    dispatch(getPosts());
    dispatch(getCategories());
  };

  useEffect(() => {
    dispatch(resetPostSuccess());
    dispatch(resetUpdatePostSuccess());
    loadData();
  }, []);

  return (
    <div className="flex justify-evenly h-full">
      {/* <Header /> */}
      {/* <Categories /> */}
      {/* <RecentBlogs /> */}
      {/* <div className="h-full bg-slate-400 min-w-[728px] max-w-[728px]">
        hello
      </div>
      <div className="h-full bg-slate-400 min-w-[368px] max-w-[368px]">
        side
      </div> */}
      <section className="h-full min-w-[728px] max-w-[728px] overflow-y-auto">
        {getPostStatus === LoadingStates.LOADING ? <Loader /> : <RecentBlogs />}
      </section>
      <section className="h-full min-w-[368px] max-w-[368px] px-[24px]">
        <Categories />
      </section>
    </div>
  );
};
