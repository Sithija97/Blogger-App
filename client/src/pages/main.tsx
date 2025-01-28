import { Outlet, useNavigate } from "react-router-dom";
import { Navbar } from "../molecules";
import { RootState, useAppSelector } from "../store";
import { useEffect } from "react";
import { LOGIN } from "../routes/router";

export const MainTemplate = () => {
  const navigate = useNavigate();
  const isAuthenticated = useAppSelector(
    (state: RootState) => state.authentication.isAuthenticated
  );

  const checkForAuthentication = () => {
    if (!isAuthenticated) navigate(LOGIN);
  };

  useEffect(() => {
    checkForAuthentication();
  }, []);

  if (!isAuthenticated) return null;

  return (
    <>
      <Navbar />
      {/* <main className="mx-12 md:mx-24 lg:mx-52">
        <div className="my-4">
          <Outlet />
        </div>
      </main> */}
      <main className="max-w-[1336px] h-[calc(100vh-57px)] overflow-hidden m-auto">
        <Outlet />
      </main>
    </>
  );
};
