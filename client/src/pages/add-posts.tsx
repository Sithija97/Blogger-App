import { useEffect, useRef, useState } from "react";
import { Navbar } from "../molecules";
import { RootState, useAppDispatch, useAppSelector } from "../store";
import {
  clearSelectedPostToEdit,
  createPosts,
  updatePost,
} from "../store/post.slice";
import { useNavigate } from "react-router-dom";
import { ADD_POSTS, ROOT } from "../routes/router";

export const AddPosts = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const currentPath = location.pathname;
  const [title, setTitle] = useState<string>("");
  const [content, setContent] = useState<string>("");
  const [image, setImage] = useState<File | null>(null);
  const fileInputRef = useRef<HTMLInputElement | null>(null);

  const { loggedInUser } = useAppSelector(
    (state: RootState) => state.authentication
  );
  const { createPostSuccess, updatePostSuccess, selectedPostToEdit } =
    useAppSelector((state: RootState) => state.posts);

  const EDIT_POST_ROUTE = `/edit-blog/${selectedPostToEdit?._id}`;

  useEffect(() => {
    if (createPostSuccess || updatePostSuccess) {
      navigate(ROOT);
    }
  }, [createPostSuccess, updatePostSuccess]);

  useEffect(() => {
    if (selectedPostToEdit && currentPath !== ADD_POSTS) {
      setTitle(selectedPostToEdit.title);
      setContent(selectedPostToEdit.content);
    }
  }, []);

  const handleImageClick = () => fileInputRef.current?.click();

  const handleImageUpload = (event: any) => {
    const file = event.target.files?.[0];
    if (file) {
      setImage(file);
    }
  };

  const publish = async () => {
    console.log("clicked");
    const form = new FormData();

    if (loggedInUser) {
      form.append("title", title);
      form.append("content", content);

      // Check if a new image is uploaded, otherwise use the existing image
      if (image) {
        form.append("image", image);
      } else if (selectedPostToEdit?.image) {
        form.append("image", selectedPostToEdit.image);
      }

      form.append("user", loggedInUser?._id);

      if (selectedPostToEdit && currentPath === EDIT_POST_ROUTE) {
        await dispatch(updatePost({ _id: selectedPostToEdit._id, form }));
        dispatch(clearSelectedPostToEdit());
      } else {
        await dispatch(createPosts(form));
      }
    }
  };

  const handleTextAreaResize = (event: any) => {
    const textarea = event.target;
    textarea.style.height = "auto"; // Reset height to recompute
    textarea.style.height = `${textarea.scrollHeight}px`; // Set new height
  };

  return (
    <>
      <div className="max-w-[1032px] m-auto px-5">
        <Navbar publishPost={publish} />
        <div className="mt-10 px-28 flex flex-col gap-5 overflow-y-scroll">
          <input
            type="text"
            value={title}
            placeholder="Title"
            onChange={(e) => setTitle(e.target.value)}
            className="w-full focus:outline-none border border-slate-100 px-2 rounded-md"
          />
          {image ? (
            <img
              src={URL.createObjectURL(image)}
              alt="Profile"
              className=" h-80 mb-2 object-cover"
              onClick={handleImageClick}
            />
          ) : selectedPostToEdit && currentPath !== ADD_POSTS ? (
            <img
              src={selectedPostToEdit?.image}
              alt="Profile"
              className=" h-80 mb-2 object-cover"
              onClick={handleImageClick}
            />
          ) : (
            <div
              className="bg-slate-100 p-40 flex items-center justify-center cursor-pointer"
              onClick={handleImageClick}
            >
              <p className="text-sm text-slate-500">Upload Image</p>
            </div>
          )}

          <input
            type="file"
            accept="image/*"
            ref={fileInputRef}
            onChange={handleImageUpload}
            style={{ display: "none" }}
          />
          <textarea
            rows={6}
            value={content}
            placeholder="Tell your story..."
            className="w-full focus:outline-none border border-slate-100 px-2 rounded-md"
            style={{ resize: "none", overflowY: "hidden" }}
            onChange={(e) => setContent(e.target.value)}
            onInput={handleTextAreaResize}
          />
        </div>
      </div>
    </>
  );
};
