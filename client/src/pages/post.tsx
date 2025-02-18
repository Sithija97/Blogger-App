import { RootState, useAppSelector } from "../store";

export const Post = () => {
  const { selectedPost } = useAppSelector((state: RootState) => state.posts);
  return (
    <>
      {selectedPost && (
        <div className="max-w-[680px] m-auto h-full overflow-y-auto">
          <h1 className="text-4xl font-bold mt-12 mb-8">
            {selectedPost.title}
          </h1>
          <img src={selectedPost.image} alt="image" className="w-full" />
          <p className="mt-10 text-slate-900 text-lg font-light">
            {selectedPost.content}
          </p>
        </div>
      )}
    </>
  );
};
