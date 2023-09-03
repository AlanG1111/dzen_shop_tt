"use client";

import React from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { ROUTE } from "../utils/constants";
import "bootstrap/dist/css/bootstrap.css";

const navBarLinks = [
  { title: "Orders", href: "/orders" },
  { title: "Products", href: "/products" },
];

const NavigationMenu: React.FC = () => {
  const pathname = usePathname();
  const isActiveLink = (route: ROUTE) =>
    pathname !== route ? "text-dark" : "text-success";

  return (
    <div className='shadow navbar-nav h-100 py-2'>
      <nav className='nav flex-column container-fluid align-items-center text-uppercase fw-bold'>
        {navBarLinks.map(({ href, title }) => (
          <Link
            key={href}
            className={`nav-link ${isActiveLink(href as ROUTE)}`}
            href={href}
          >
            {title}
          </Link>
        ))}
      </nav>
    </div>
  );
};

export default NavigationMenu;
