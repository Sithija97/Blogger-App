import { Link, useNavigate } from "react-router-dom";
import { CREATE, LOGIN, REGISTER, ROOT } from "../routes/router";
import { useContext, useEffect } from "react";
import axios from "axios";
import { BASE_URL } from "../constants";
import { userContext } from "../context/user.context";

export const Header = () => {
  const navigate = useNavigate();
  const { userInfo, setUserInfo } = useContext(userContext);

  console.log(userInfo);

  const getProfile = async () => {
    const response = await axios.get(`${BASE_URL}/auth/profile`, {
      withCredentials: true,
    });
    setUserInfo(response.data);
  };

  const logout = async () => {
    const response = await axios.get(`${BASE_URL}/auth/logout`, {
      withCredentials: true,
    });
    if (response.status === 200) {
      setUserInfo("");
      navigate(LOGIN);
    }
  };

  useEffect(() => {
    getProfile();
  }, []);

  return (
    <header>
      <Link to={ROOT} className="logo">
        Blogger
      </Link>
      <nav>
        {userInfo ? (
          <>
            <Link to={CREATE}>Create new post</Link>
            <a onClick={logout}>Logout</a>
          </>
        ) : (
          <>
            <Link to={LOGIN}>Login</Link>
            <Link to={REGISTER}>Register</Link>
          </>
        )}
      </nav>
    </header>
  );
};
