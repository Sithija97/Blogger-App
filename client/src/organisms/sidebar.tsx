import { Link } from "react-router-dom";
import { FAVOURITES, LIKED_BLOGS, PROFILE } from "../routes/router";

export const Sidebar = () => {
  const sidelinks = [
    {
      name: "My Profile",
      to: PROFILE,
    },
    {
      name: "Favourites",
      to: FAVOURITES,
    },
    {
      name: "Liked",
      to: LIKED_BLOGS,
    },
  ];
  return (
    <div className="w-fit h-[calc(100vh-57px)] border-r rounded flex flex-col gap-2 p-4">
      {sidelinks.map((item, index) => (
        <button key={index} className="bg-slate-100 p-1 rounded">
          <Link key={index} to={item.to}>
            <p className="text-sm font-medium">{item.name}</p>
          </Link>
        </button>
      ))}
    </div>
  );
};
