import { Post, PostItem } from "../molecules";
import { RootState, useAppDispatch, useAppSelector } from "../store";
import { SectionTemplate } from "../templates";
import { LoadingStates } from "../enums";
import { Loader } from "../attoms";
import { useEffect } from "react";
import { getPostsByUser } from "../store/post.slice";
import { data } from "../organisms";

export const MyPosts = () => {
  const dispatch = useAppDispatch();

  const { getPostByUserStatus, postsByUser } = useAppSelector(
    (state: RootState) => state.posts
  );

  useEffect(() => {
    dispatch(getPostsByUser());
  }, []);

  return (
    <SectionTemplate title="My Posts" customStyles="ml-4">
      <div className="flex flex-col gap-8 lg:gap-4 px-20 h-[calc(100vh-140px)] overflow-y-auto">
        {getPostByUserStatus === LoadingStates.LOADING ? (
          <Loader />
        ) : (
          postsByUser.map((item, index) => (
            <div
              key={index}
              className="flex flex-col lg:flex-row gap-2 lg:gap-4"
            >
              <PostItem post={item} />
            </div>
          ))
        )}
      </div>
    </SectionTemplate>
  );
};
