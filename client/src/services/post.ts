import axios from "axios";

const createPost = async (formData: FormData) => {
  const response = await axios.post(
    `${import.meta.env.VITE_BASE_URL}/post`,
    formData,
    {
      withCredentials: true,
    }
  );
  return response.data;
};

const updatePost = async (postId: string, formData: FormData) => {
  const response = await axios.put(
    `${import.meta.env.VITE_BASE_URL}/post/${postId}`,
    formData,
    {
      withCredentials: true,
    }
  );
  return response.data;
};

const getPosts = async () => {
  const response = await axios.get(`${import.meta.env.VITE_BASE_URL}/post`);
  return response.data;
};

const getPostsByUser = async () => {
  const response = await axios.get(
    `${import.meta.env.VITE_BASE_URL}/post/by-user`,
    {
      withCredentials: true,
    }
  );
  return response.data;
};

const deletePost = async (postId: string) => {
  const response = await axios.delete(
    `${import.meta.env.VITE_BASE_URL}/post/${postId}`,
    {
      withCredentials: true,
    }
  );
  return response.data;
};

const postService = {
  createPost,
  updatePost,
  getPosts,
  getPostsByUser,
  deletePost,
};

export default postService;
