import { Outlet } from "react-router-dom";
import { AdminSidebar } from "../organisms";

export const Admin = () => {
  return (
    <div className="flex w-full calc(h-screen-[57px])">
      <div>
        <AdminSidebar />
      </div>
      <div className="w-full h-full">
        <Outlet />
      </div>
    </div>
  );
};
