import { Outlet } from "react-router-dom";
import { Sidebar } from "../organisms";

export const Profile = () => {
  return (
    <div>
      <div>
        <Sidebar />
      </div>
      <div>
        <Outlet />
      </div>
    </div>
  );
};
