import { Outlet } from "react-router-dom";
import { Navbar } from "../molecules";

export const MainTemplate = () => {
  return (
    <main className="px-12 md:px-32 lg:px-64">
      <Navbar />
      <div className="my-4">
        <Outlet />
      </div>
    </main>
  );
};
