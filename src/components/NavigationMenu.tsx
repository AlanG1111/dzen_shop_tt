"use client";

import React from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { ROUTE, CATEGORY } from "../utils/constants";
import "bootstrap/dist/css/bootstrap.css";

const NavigationMenu: React.FC = () => {
  const pathname = usePathname();
  const isActiveLink = (route: ROUTE) =>
    pathname === route && "navigationMenu__link--active";

  return (
    <nav className='nav flex-column container-fluid'>
      <Link
        className={`nav-link active ${isActiveLink(ROUTE.ORDERS)}`}
        href={ROUTE.ORDERS}
      >
        {CATEGORY.ORDERS}
      </Link>
      <Link
        className={`nav-link ${isActiveLink(ROUTE.PRODUCTS)}`}
        href={ROUTE.PRODUCTS}
      >
        {CATEGORY.PRODUCTS}
      </Link>
    </nav>
  );
};

export default NavigationMenu;
