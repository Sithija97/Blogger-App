import { Post } from "../components/post";

export const Home = () => {
  const tempPosts = 3;
  return (
    <div>
      {Array.from({ length: tempPosts }).map((_, index) => (
        <Post key={index} index={index} />
      ))}
    </div>
  );
};
