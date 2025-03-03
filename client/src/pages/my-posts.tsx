import { PostItem } from "../molecules";
import { RootState, useAppDispatch, useAppSelector } from "../store";
import { SectionTemplate } from "../templates";
import { LoadingStates } from "../enums";
import { Loader } from "../attoms";
import { useEffect } from "react";
import {
  deleteMyPost,
  getPostsByUser,
  setSelectedPostToEdit,
} from "../store/post.slice";
import { IPost } from "../models";
import { useNavigate } from "react-router-dom";

export const MyPosts = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const { getPostByUserStatus, postsByUser } = useAppSelector(
    (state: RootState) => state.posts
  );

  const loadData = () => dispatch(getPostsByUser());

  useEffect(() => {
    loadData();
  }, []);

  const handleDeletePost = async (postId: string) => {
    if (window.confirm("Are you sure you want to proceed?")) {
      await dispatch(deleteMyPost(postId));
      loadData();
    }
  };

  const handleEditPost = (post: IPost) => {
    dispatch(setSelectedPostToEdit(post));
    navigate(`/edit-blog/${post._id}`);
  };

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
              <PostItem
                post={item}
                handleDeletePost={() => handleDeletePost(item._id)}
                handleEditPost={() => handleEditPost(item)}
              />
            </div>
          ))
        )}
      </div>
    </SectionTemplate>
  );
};
