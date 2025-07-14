import React from "react";
import { Link, useLocation } from "react-router-dom";

const Navbar = () => {
  const location = useLocation();

  const linkClass = (path) =>
    `px-4 py-2 rounded-md transition-colors text-sm ${
      location.pathname === path
        ? "bg-blue-500 text-white"
        : "text-gray-700 hover:bg-blue-100"
    }`;

  return (
    <nav className="bg-white shadow px-6 py-4">
      <div className="flex justify-end gap-4">
        <Link to="/" className={linkClass("/")}>
          영상
        </Link>
        <Link to="/agent" className={linkClass("/agent")}>
          AI 상담
        </Link>
        <Link to="/blog" className={linkClass("/blog")}>
          블로그
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
