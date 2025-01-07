import { Link } from "react-router-dom";
import { ORIGIN_URL } from "../constants";
import { IPost } from "../pages";
import { formatISO9075 } from "date-fns";

export const Post = ({
  _id,
  title,
  summary,
  cover,
  author,
  createdAt,
}: IPost) => {
  return (
    <div className="post">
      <div className="image">
        <Link to={`/post/${_id}`}>
          <img src={`${ORIGIN_URL}${cover}`} alt="" />
        </Link>
      </div>
      <div className="content">
        <Link to={`/post/${_id}`}>
          <h2>{title}</h2>
        </Link>
        <p className="info">
          <a href="" className="author">
            {author.username}
          </a>
          <time>{formatISO9075(createdAt)}</time>
        </p>
        <p className="summary">{summary}</p>
      </div>
    </div>
  );
};
