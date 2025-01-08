import { Outlet } from "react-router-dom";
import { Navbar } from "../molecules";

export const MainTemplate = () => {
  return (
    <main className="px-64">
      <Navbar />
      <div className="my-4">
        <Outlet />
      </div>
    </main>
  );
};
