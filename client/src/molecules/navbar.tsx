import { Link, useNavigate } from "react-router-dom";
import { CREATE, LOGIN, PROFILE, REGISTER, ROOT } from "../routes/router";
import { useContext, useEffect } from "react";
import axios from "axios";
import { BASE_URL } from "../constants";
import { userContext } from "../context/user.context";

export const Navbar = () => {
  const navigate = useNavigate();
  const { userInfo, setUserInfo } = useContext(userContext);

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

  const links = [
    {
      name: "Home",
      to: ROOT,
    },
    {
      name: "Blogs",
      to: ROOT,
    },
    {
      name: "Profile",
      to: PROFILE,
    },
    {
      name: "Login",
      to: LOGIN,
    },
  ];

  return (
    <header>
      <nav className="flex items-center justify-between p-4">
        <div className="w-2/6 site-name">
          <Link to={ROOT} className="text-xl font-semibold text-slate-800">
            Blogger
          </Link>
        </div>
        <div className="w-2/6 hidden lg:flex items-center justify-end">
          {links.map((link, index) => (
            <Link
              className="ms-4 hover:text-blue-600 transition-all duration-300"
              key={index}
              to={link.to}
            >
              {link.name}
            </Link>
          ))}
        </div>
        <div className="w-2/6 block lg:hidden items-center justify-end"></div>
      </nav>
    </header>
  );
};
