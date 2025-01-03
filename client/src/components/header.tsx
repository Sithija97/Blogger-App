import { Link } from "react-router-dom";
import { LOGIN, REGISTER, ROOT } from "../routes/router";

export const Header = () => {
  return (
    <header>
      <Link to={ROOT} className="logo">
        Blogger
      </Link>
      <nav>
        <Link to={LOGIN}>Login</Link>
        <Link to={REGISTER}>Register</Link>
      </nav>
    </header>
  );
};
