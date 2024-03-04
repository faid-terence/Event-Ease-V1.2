import React from "react";
import { useLocation } from "react-router-dom";
import { Header } from "../Header/Header";
import { Router } from "../../Routes/Router";
import { Footer } from "../Footer/Footer";
import { Navbar } from "../Header/Navbar";

export const Layout = () => {
  const location = useLocation();
  const isHeaderVisible =
    location.pathname === "/" || location.pathname === "/home";

  // Exclude header and navbar on /dashboard route
  const excludeHeaderAndNavbar =
    location.pathname === "/my-events" ||
    location.pathname === "/payments" ||
    location.pathname === "/verify-email";

  // Exclude footer on /dashboard route
  const excludeFooter =
    location.pathname === "/dashboard" ||
    location.pathname === "/payments" ||
    location.pathname === "/verify-email" ||
    location.pathname === "/my-events";

  return (
    <>
      {!excludeHeaderAndNavbar && (isHeaderVisible ? <Header /> : <Navbar />)}

      <main>
        <Router />
      </main>

      {!excludeFooter && <Footer />}
    </>
  );
};
