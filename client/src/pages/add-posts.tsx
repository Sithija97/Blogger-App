import { useEffect, useRef, useState } from "react";
import { Navbar } from "../molecules";
import { RootState, useAppDispatch, useAppSelector } from "../store";
import { createPosts } from "../store/post.slice";
import { useNavigate } from "react-router-dom";
import { ROOT } from "../routes/router";

export const AddPosts = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const [title, setTitle] = useState<string>("");
  const [content, setContent] = useState<string>("");
  const [image, setImage] = useState<File | null>(null);
  const fileInputRef = useRef<HTMLInputElement | null>(null);

  const { loggedInUser } = useAppSelector(
    (state: RootState) => state.authentication
  );
  const { createPostSuccess } = useAppSelector(
    (state: RootState) => state.posts
  );

  useEffect(() => {
    if (createPostSuccess) {
      navigate(ROOT);
    }
  }, [createPostSuccess]);

  const handleImageClick = () => fileInputRef.current?.click();

  const handleImageUpload = (event: any) => {
    const file = event.target.files?.[0];
    if (file) {
      setImage(file);
    }
  };

  const publish = async () => {
    const form = new FormData();

    if (image && loggedInUser) {
      form.append("title", title);
      form.append("content", content);
      form.append("image", image);
      form.append("user", loggedInUser?._id);

      await dispatch(createPosts(form));
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
