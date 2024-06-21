import React from "react";
import {
  AiFillYoutube,
  AiFillGithub,
  AiOutlineInstagram,
} from "react-icons/ai";
import { RiLinkedinFill } from "react-icons/ri";
import { Link } from "react-router-dom";

const socialLinks = [
  {
    path: "https://youtube.com",
    icon: <AiFillYoutube className="group-hover:text-white w-6 h-6" />,
  },
  {
    path: "https://github.com",
    icon: <AiFillGithub className="group-hover:text-white w-6 h-6" />,
  },
  {
    path: "https://instagram.com",
    icon: <AiOutlineInstagram className="group-hover:text-white w-6 h-6" />,
  },
  {
    path: "https://linkedin.com",
    icon: <RiLinkedinFill className="group-hover:text-white w-6 h-6" />,
  },
];

const quickLinks01 = [
  {
    path: "/home",
    display: "Home",
  },
  {
    path: "/events",
    display: "Find Events",
  },
  {
    path: "/tickets",
    display: "Buy and Sell Tickets",
  },
  {
    path: "/contact",
    display: "Contact Us",
  },
];

const quickLinks02 = [
  {
    path: "/faq",
    display: "FAQ",
  },
  {
    path: "/terms",
    display: "Terms of Service",
  },
  {
    path: "/privacy",
    display: "Privacy Policy",
  },
  {
    path: "/refund",
    display: "Refund Policy",
  },
];

export const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-primaryColor text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h2 className="text-3xl font-bold mb-4">TickNet</h2>
            <p className="text-white mb-4">
              Copyright &copy; {year} developed by Terence Faid JABO. All rights
              reserved.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((link, index) => (
                <Link
                  key={index}
                  to={link.path}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white hover:text-gray-300 transition-colors duration-300"
                >
                  {link.icon}
                </Link>
              ))}
            </div>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {quickLinks01.map((item, index) => (
                <li key={index}>
                  <Link
                    to={item.path}
                    className="text-white hover:text-gray-300 transition-colors duration-300"
                  >
                    {item.display}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-4">I want to:</h3>
            <ul className="space-y-2">
              {quickLinks01.map((item, index) => (
                <li key={index}>
                  <Link
                    to={item.path}
                    className="text-white hover:text-gray-300 transition-colors duration-300"
                  >
                    {item.display}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-4">Support</h3>
            <ul className="space-y-2">
              {quickLinks02.map((item, index) => (
                <li key={index}>
                  <Link
                    to={item.path}
                    className="text-white hover:text-gray-300 transition-colors duration-300"
                  >
                    {item.display}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
       
      </div>
    </footer>
  );
};
