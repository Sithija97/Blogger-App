import { Link } from "react-router-dom";

type IProps = {
  link: string;
  title: string;
  customStyles?: string;
};

export const RedirectLink = ({ link, title, customStyles }: IProps) => {
  return (
    <Link
      to={link}
      className={`bg-blue-600 hover:bg-blue-700 transition-all duration-300 px-4 py-2 rounded text-white ${customStyles}`}
    >
      {title}
    </Link>
  );
};
