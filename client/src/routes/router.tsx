import { createBrowserRouter } from "react-router-dom";
import { Home, Layout, Login, Register } from "../pages";

export const ROOT = "/";
export const LOGIN = "/login";
export const REGISTER = "/register";

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
      ],
    },
  ],
  {
    future: {
      v7_relativeSplatPath: true,
    },
  }
);
