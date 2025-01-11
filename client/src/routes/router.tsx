import { createBrowserRouter } from "react-router-dom";
import { AllBlogs, Home, Profile, SignIn, SignUp } from "../templates";
import { AuthTemplate, MainTemplate } from "../pages";

export const ROOT = "/";
export const LOGIN = "/sign-in";
export const REGISTER = "/sign-up";
export const CREATE = "/create";
export const PROFILE = "/profile";
export const FAVOURITES = "/profile/favourites";
export const LIKED_BLOGS = "/profile/liked-blogs";
export const POST = "/post/:id";
export const ALL_BLOGS = "/all-blogs";

export const router = createBrowserRouter([
  {
    element: <AuthTemplate />,
    children: [
      {
        path: LOGIN,
        element: <SignIn />,
      },
      {
        path: REGISTER,
        element: <SignUp />,
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
        path: ALL_BLOGS,
        element: <AllBlogs />,
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
