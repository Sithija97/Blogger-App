import { useEffect } from "react";
import { Post } from "../components/post";
import axios from "axios";

export const Home = () => {
  const getProfile = async () => {
    const response = await axios.get("http://localhost:3000/api/auth/profile", {
      withCredentials: true,
    });
    console.log(response);
  };

  useEffect(() => {
    getProfile();
  }, []);

  const tempPosts = 3;
  return (
    <div>
      {Array.from({ length: tempPosts }).map((_, index) => (
        <Post key={index} index={index} />
      ))}
    </div>
  );
};
