import { Link, useNavigate } from "react-router-dom";
import { useAppDispatch, useAppSelector, RootState } from "../store";
import { LOGIN } from "../routes/router";
import { logoutUser } from "../store/auth.slice";

type IProps = {
  styles?: string;
};

export const AuthButtonToggle = ({ styles }: IProps) => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const isAuthenticated = useAppSelector(
    (state: RootState) => state.authentication.isAuthenticated
  );

  const logout = () => {
    dispatch(logoutUser());
    navigate(LOGIN);
  };

  return (
    <>
      {isAuthenticated ? (
        <button
          className={`text-slate-400 hover:text-slate-900 transition-all duration-300 ${styles}`}
          onClick={logout}
        >
          Logout
        </button>
      ) : (
        <Link
          className={`hover:text-slate-600 transition-all duration-300 ${styles}`}
          to={LOGIN}
        >
          Sign in
        </Link>
      )}
    </>
  );
};
