import { RedirectLink } from "../attoms";
import { ROOT } from "../routes/router";

type IProps = {
  img: string;
  title: string;
  description: string;
};

export const Post = ({ img, title, description }: IProps) => {
  return (
    <>
      <div className="w-full lg:w-2/6">
        <img src={img} alt="" className="rounded object-cover" />
      </div>
      <div className="w-full lg:w-4/6">
        <h1 className="text-2xl font-semibold">{title}</h1>
        <p className="mb-4">{description.slice(0, 400)}...</p>
        <RedirectLink link={ROOT} title="Read Blog" />
      </div>
    </>
  );
};
