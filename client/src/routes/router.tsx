import { createBrowserRouter } from "react-router-dom";
import { CreatePost, Home, Layout, Login, Post, Register } from "../pages";

export const ROOT = "/";
export const LOGIN = "/login";
export const REGISTER = "/register";
export const CREATE = "/create";
export const POST = "/post/:id";

export const router = createBrowserRouter(
  [
    {
      path: ROOT,
      element: <Layout />,
      children: [
        {
          index: true,
          element: <Home />,
        },
        {
          path: LOGIN,
          element: <Login />,
        },
        {
          path: REGISTER,
          element: <Register />,
        },
        {
          path: CREATE,
          element: <CreatePost />,
        },
        {
          path: POST,
          element: <Post />,
        },
      ],
    },
  ],
  {
    future: {
      v7_relativeSplatPath: true,
    },
  }
);
