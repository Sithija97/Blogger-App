import { useEffect, useState } from "react";
import { IPost } from "./home";
import { useParams } from "react-router-dom";
import axios from "axios";
import { BASE_URL } from "../constants";
import { formatISO9075 } from "date-fns";

export const Post = () => {
  const [post, setPost] = useState<IPost | null>(null);
  const { id } = useParams();

  const fetchPost = async () => {
    const response = await axios.get(`${BASE_URL}/posts/post/${id}`);
    if (response.status === 200) setPost(response.data);
  };

  useEffect(() => {
    fetchPost();
  }, []);

  if (!post) return "";

  return (
    <div className="post-page">
      <h1>{post.title}</h1>
      <time>{formatISO9075(new Date(post.createdAt))}</time>
      <div className="author">by @{post.author.username}</div>
      <div className="image">
        <img src={`http://localhost:3000/${post.cover}`} alt="" />
      </div>
      <div
        className="content"
        dangerouslySetInnerHTML={{ __html: post.content }}
      />
    </div>
  );
};
