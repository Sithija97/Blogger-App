import axios from "axios";
import { Header, Post } from "../molecules";
import { BASE_URL } from "../constants";
import { useEffect, useState } from "react";

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
  const [posts, setPosts] = useState<IPost[]>([]);

  const fetchPosts = async () => {
    const response = await axios.get(`${BASE_URL}/posts`);
    if (response.status === 200) setPosts(response.data);
  };

  useEffect(() => {
    fetchPosts();
  }, []);

  return (
    <div>
      <Header />
    </div>
  );
};
