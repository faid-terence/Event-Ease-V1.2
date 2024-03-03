import React, { useEffect, useRef, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { BiMenu } from "react-icons/bi";
import userImage from "../../assets/terence 1.png";
import { BiSolidDashboard, BiLogOutCircle } from "react-icons/bi";

const navLinks = [
  {
    path: "/home",
    display: "Home",
  },
  {
    path: "/events",
    display: "Events",
  },
  {
    path: "/tickets",
    display: "My Tickets",
  },
  {
    path: "/contact",
    display: "Contact Us",
  },
];

function getUser() {
  const token = localStorage.getItem("token");
  if (token) {
    try {
      const decodedToken = JSON.parse(atob(token.split(".")[1]));
      const userName = decodedToken.name;
      const profileImage = decodedToken.photo;

      return { userName, profileImage };
    } catch (error) {
      return null;
    }
  } else {
    return null;
  }
}

export const Navbar = () => {
  const [user, setUser] = useState(getUser());
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const handleLogout = () => {
    localStorage.removeItem("token");
    setUser(null);
  };

  // immediately logout user if token is expired
  useEffect(() => {
    if (user) {
      const token = localStorage.getItem("token");
      if (token === null) {
        handleLogout();
        return; // Exit early to avoid further processing
      }
      const tokenParts = token.split(".");
      if (tokenParts.length !== 3) {
        // Handle invalid token format
        handleLogout();
        return; // Exit early to avoid further processing
      }
      const decodedToken = JSON.parse(atob(tokenParts[1]));
      const tokenExpiration = decodedToken.exp;
      const currentTime = Math.floor(Date.now() / 1000);
      if (tokenExpiration < currentTime) {
        handleLogout();
      }
    }
  }, [user]);

  const headerRef = useRef(null);
  const menuRef = useRef(null);

  const handleStickyHeader = () => {
    if (
      document.body.scrollTop > 80 ||
      document.documentElement.scrollTop > 80
    ) {
      headerRef.current.classList.add("sticky-header");
    } else {
      headerRef.current.classList.remove("sticky-header");
    }
  };

  useEffect(() => {
    handleStickyHeader();

    const scrollListener = () => {
      handleStickyHeader();
    };

    window.addEventListener("scroll", scrollListener);

    return () => window.removeEventListener("scroll", scrollListener);
  }, []);

  const toggleMenu = () => menuRef.current.classList.toggle("show_menu");

  const toggleDropdown = () => setIsDropdownOpen(!isDropdownOpen);

  return (
    <>
      <div className="bg-[#EFEFEF] flex items-center justify-center h-10">
        <h4>Your Ultimate Solution For Online Tickets</h4>
      </div>
      <header className="nav flex items-center" ref={headerRef}>
        <div className="container">
          <div className="flex items-center justify-between">
            <div className="flex items-center justify-center mt-2">
              <h3 className="text-3xl text-white font-bold">TickNet</h3>
            </div>

            <div
              className="navigation"
              ref={menuRef}
              onClick={toggleMenu}
              onBlur={() => setIsDropdownOpen(false)}
            >
              <ul className="menu flex items-center gap-[2.7rem]">
                {navLinks.map((link, index) => (
                  <li key={index}>
                    <NavLink
                      to={link.path}
                      className="text-white text-[16px] leading-7 font-[500] hover:ease-out"
                    >
                      {link.display}
                    </NavLink>
                  </li>
                ))}
              </ul>
            </div>
            <div className="flex items-center gap-4">
              {user ? (
                <div
                  className="relative"
                  onBlur={() => setIsDropdownOpen(false)}
                >
                  <img
                    src={user.profileImage}
                    alt=""
                    className="w-8 h-8 rounded-full cursor-pointer"
                    onClick={toggleDropdown}
                  />
                  {isDropdownOpen && (
                    <div className="absolute left-[-60px] mt-2 w-40 rounded bg-white shadow-md">
                      <Link
                        to="/my-events"
                        className="flex items-center px-4 py-2 text-gray-800 hover:bg-gray-200 transition duration-300"
                      >
                        <BiSolidDashboard className="mr-2" /> Dashboard
                      </Link>
                      <Link
                        to="/auth/signin"
                        className="flex items-center px-4 py-2 text-gray-800 hover:bg-gray-200 transition duration-300"
                        onClick={handleLogout}
                      >
                        <BiLogOutCircle className="mr-2" /> Logout
                      </Link>
                    </div>
                  )}
                </div>
              ) : (
                <Link to="/auth/signin">
                  <button className="bg-white py-2 px-6 text-black font-semibold h-10 flex items-center justify-center rounded-full hover:bg-gray-100 transition duration-300">
                    LOGIN
                  </button>
                </Link>
              )}

              <span className="md:hidden" onClick={toggleMenu}>
                <BiMenu className="w-6 h-6 cursor-pointer text-white" />
              </span>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};
