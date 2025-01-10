import { Link } from "react-router-dom";
import { LOGIN, PROFILE, ROOT } from "../routes/router";
import { useState } from "react";

import { IoClose, IoReorderThree } from "react-icons/io5";

const LinksContainer = ({ customStyles }: { customStyles?: string }) => {
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
    <>
      {links.map((link, index) => (
        <Link
          className={`hover:text-blue-600 transition-all duration-300 ${customStyles}`}
          key={index}
          to={link.to}
        >
          {link.name}
        </Link>
      ))}
    </>
  );
};

export const Navbar = () => {
  const [mobileNav, setMobileNav] = useState<boolean>(false);

  const handleMobileNav = () => setMobileNav(!mobileNav);

  return (
    <header>
      <nav className="flex items-center justify-between py-4">
        <div className="w-2/6 site-name">
          <Link to={ROOT} className="text-xl font-semibold text-slate-800">
            Blogger
          </Link>
        </div>
        <div className="w-3/6 lg:w-2/6 hidden lg:flex items-center justify-end">
          <LinksContainer customStyles="ms-4" />
        </div>
        <div className="w-3/6 flex lg:hidden items-center justify-end">
          <button className="text-3xl" onClick={handleMobileNav}>
            <IoReorderThree />
          </button>
        </div>
        <div
          className={`fixed top-0 left-0 nav-bg h-screen w-full p-8 ${
            mobileNav
              ? "flex flex-col translate-y-[0%] backdrop-blur-sm"
              : "translate-y-[-100%]"
          } transition-all duration-500`}
        >
          <div className="w-full flex justify-end">
            <button className="text-3xl" onClick={handleMobileNav}>
              <IoClose />
            </button>
          </div>
          <div className="h-full flex flex-col items-center justify-center">
            <LinksContainer customStyles="mb-8 text-3xl" />
          </div>
        </div>
      </nav>
    </header>
  );
};
