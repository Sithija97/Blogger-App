import { Link } from "react-router-dom";
import { LIKED_BLOGS, PROFILE } from "../routes/router";

export const Sidebar = () => {
  const sidelinks = [
    {
      name: "Dashboard",
      to: PROFILE,
    },
    {
      name: "Favourites",
      to: PROFILE,
    },
    {
      name: "Liked Blogs",
      to: LIKED_BLOGS,
    },
  ];
  return (
    <div className="w-fit h-screen border-r rounded flex flex-col gap-2 p-4">
      {sidelinks.map((item, index) => (
        <button className="bg-slate-100 p-1 rounded">
          <Link key={index} to={item.to}>
            <p className="text-sm font-medium">{item.name}</p>
          </Link>
        </button>
      ))}
    </div>
  );
};
