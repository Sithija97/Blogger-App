import { Link } from "react-router-dom";
import { ADMIN } from "../routes/router";

export const AdminSidebar = () => {
  const sidelinks = [
    {
      name: "Admin",
      to: ADMIN,
    },
    // {
    //   name: "Add",
    //   to: ADD_POSTS,
    // },
    // {
    //   name: "Edit",
    //   to: ADMIN_EDIT_POSTS,
    // },
  ];
  return (
    <div className="w-fit h-[calc(100vh-57px)] border-r rounded flex flex-col gap-2 p-4">
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
