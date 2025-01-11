import { useLocation } from "react-router-dom";
import { ALL_BLOGS } from "../routes/router";

type IProps = {
  img: string;
  title: string;
  description: string;
};

export const Post = ({ img, title, description }: IProps) => {
  const location = useLocation();
  return (
    <>
      <div className="w-full lg:w-4/6 max-h-40 border-b border-[#F2F2F2]">
        <h1 className="text-lg font-extrabold">{title}</h1>
        <p className="pt-2 mb-4 text-sm text-slate-700">
          {description.slice(0, 200)}...
        </p>
      </div>
      <div
        className={`w-full lg:w-2/6 ml-[56px] ${
          location.pathname === ALL_BLOGS ? "h-36" : "h-28"
        }`}
      >
        <img src={img} alt="" className="rounded object-cover h-full w-full" />
      </div>
    </>
  );
};
