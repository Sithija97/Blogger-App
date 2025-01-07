import axios from "axios";
import { useState } from "react";
import { Editor } from "../components";
import { useNavigate } from "react-router-dom";
import { BASE_URL } from "../constants";
import { ROOT } from "../routes/router";

export const CreatePost = () => {
  const navigate = useNavigate();

  const [title, setTitle] = useState("");
  const [summary, setSummary] = useState("");
  const [content, setContent] = useState("");
  const [files, setFiles] = useState<any>("");

  const handleCreatePost = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const data = new FormData();

    data.set("title", title);
    data.set("summary", summary);
    data.set("content", content);
    data.set("file", files[0]);

    // for (const [key, value] of data.entries()) {
    //   console.log(`${key}: ${value}`);
    // }

    const response = await axios.post(`${BASE_URL}/posts`, data, {
      withCredentials: true,
    });
    if (response.status === 201) {
      navigate(ROOT);
    }
  };

  return (
    <form onSubmit={handleCreatePost}>
      <input
        type="title"
        placeholder="Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <input
        type="summary"
        placeholder="Summary"
        value={summary}
        onChange={(e) => setSummary(e.target.value)}
      />
      <input type="file" onChange={(e) => setFiles(e.target.files)} />
      <Editor value={content} onChange={(value: string) => setContent(value)} />
      <button type="submit" style={{ marginTop: "5px" }}>
        Create post
      </button>
    </form>
  );
};
