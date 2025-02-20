import { Link, useLocation } from "react-router-dom";
import { RiEdit2Fill, RiDeleteBin6Fill } from "@remixicon/react";
import { ALL_BLOGS } from "../routes/router";
import { IPost } from "../models";
import { useAppDispatch } from "../store";
import { setSelectedPost } from "../store/post.slice";

type IProps = {
  post: IPost;
};

type IPostItemProps = {
  post: IPost;
};

export const Post = ({ post }: IProps) => {
  const dispatch = useAppDispatch();
  const location = useLocation();
  const { _id, title, content, image } = post;

  const handleSetSelectedPost = () => {
    dispatch(setSelectedPost(post));
  };
  return (
    <>
      <div className="w-full lg:w-4/6 max-h-40 border-b border-[#F2F2F2]">
        <Link to={`/post/${_id}`} onClick={handleSetSelectedPost}>
          <h1 className="text-lg font-extrabold">{title}</h1>
        </Link>
        <p className="pt-2 mb-4 text-sm text-slate-700">
          {content.slice(0, 200)}...
        </p>
      </div>
      <div
        className={`w-full lg:w-2/6 ml-[56px] ${
          location.pathname === ALL_BLOGS ? "h-36" : "h-28"
        }`}
      >
        <img
          src={image}
          alt=""
          className="rounded object-cover h-full w-full"
        />
      </div>
    </>
  );
};

export const PostItem = ({ post }: IPostItemProps) => {
  const dispatch = useAppDispatch();
  const location = useLocation();
  const { _id, title, content, image } = post;

  const handleSetSelectedPost = () => {
    dispatch(setSelectedPost(post));
  };
  return (
    <>
      <div className="flex">
        <div className="w-full lg:w-4/6 max-h-40 border-b border-[#F2F2F2]">
          <Link to={`/post/${_id}`} onClick={handleSetSelectedPost}>
            <h1 className="text-lg font-extrabold">{title}</h1>
          </Link>
          <p className="pt-2 mb-4 text-sm text-slate-700">
            {content.slice(0, 200)}...
          </p>
        </div>
        <div
          className={`w-full lg:w-2/6 ml-[56px] ${
            location.pathname === ALL_BLOGS ? "h-36" : "h-28"
          }`}
        >
          <img
            src={image}
            alt=""
            className="rounded object-cover h-full w-full"
          />
        </div>
      </div>
      <div>
        <button>
          <RiEdit2Fill
            size={20}
            className="text-slate-300 hover:text-blue-600"
          />
        </button>
        <button>
          <RiDeleteBin6Fill
            size={20}
            className="text-slate-300 hover:text-red-600"
          />
        </button>
      </div>
    </>
  );
};
