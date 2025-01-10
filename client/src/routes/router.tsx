import { createBrowserRouter } from "react-router-dom";
import { CreatePost, Home, Login, Register, Profile } from "../organisms";
import { AuthTemplate, MainTemplate } from "../templates";

export const ROOT = "/";
export const LOGIN = "/login";
export const REGISTER = "/register";
export const CREATE = "/create";
export const PROFILE = "/profile";
export const POST = "/post/:id";

export const router = createBrowserRouter([
  {
    element: <AuthTemplate />,
    children: [
      {
        path: LOGIN,
        element: <Login />,
      },
      {
        path: REGISTER,
        element: <Register />,
      },
    ],
  },
  {
    path: ROOT,
    element: <MainTemplate />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: CREATE,
        element: <CreatePost />,
      },
      // {
      //   path: POST,
      //   element: <Post />,
      // },
      {
        path: PROFILE,
        element: <Profile />,
      },
    ],
  },
]);
