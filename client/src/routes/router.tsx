import { createBrowserRouter } from "react-router-dom";
import { CreatePost, Home, Layout, Login, Register } from "../pages";

export const ROOT = "/";
export const LOGIN = "/login";
export const REGISTER = "/register";
export const CREATE = "/create";

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
      ],
    },
  ],
  {
    future: {
      v7_relativeSplatPath: true,
    },
  }
);
