import { createBrowserRouter } from "react-router-dom";
import {
  Admin,
  AddPosts,
  AdminDashboard,
  AdminEditPosts,
  AdminSignIn,
  AllPosts,
  Categories,
  Dashboard,
  MyPosts,
  Home,
  LikedPosts,
  Post,
  Profile,
  SignIn,
  SignUp,
} from "../pages";
import { AuthTemplate, MainTemplate } from "../templates";

export const ROOT = "/";
export const LOGIN = "/sign-in";
export const REGISTER = "/sign-up";
export const CREATE = "/create";
export const PROFILE = "/profile";
export const MYPOSTS = "/profile/my-posts";
export const LIKED_BLOGS = "/profile/liked-posts";
export const POST = "/post/:id";
export const ALL_BLOGS = "/all-posts";
export const CATEGORY = "/categories/:category";
export const ADMIN = "/admin";
export const ADMIN_LOGIN = "/admin/sign-in";
export const ADD_POSTS = "/add-blogs";
export const ADMIN_EDIT_POSTS = "/admin/edit-blogs";

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
      {
        path: ADMIN_LOGIN,
        element: <AdminSignIn />,
      },
      { path: ADD_POSTS, element: <AddPosts /> },
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
        element: <AllPosts />,
      },
      {
        path: POST,
        element: <Post />,
      },
      {
        path: CATEGORY,
        element: <Categories />,
      },
      {
        path: PROFILE,
        element: <Profile />,
        children: [
          { index: true, element: <Dashboard /> },
          { path: MYPOSTS, element: <MyPosts /> },
          { path: LIKED_BLOGS, element: <LikedPosts /> },
        ],
      },
      {
        path: ADMIN,
        element: <Admin />,
        children: [
          { index: true, element: <AdminDashboard /> },
          { path: ADMIN_EDIT_POSTS, element: <AdminEditPosts /> },
        ],
      },
    ],
  },
]);
