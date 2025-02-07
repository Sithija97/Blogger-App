import { Outlet } from "react-router-dom";
import { Sidebar } from "../organisms";

export const Profile = () => {
  return (
    <div className="flex w-full calc(h-screen-[57px])">
      <div>
        <Sidebar />
      </div>
      <div className="w-full h-full">
        <Outlet />
      </div>
    </div>
  );
};
