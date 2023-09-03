import React from "react";
import Link from "next/link";
import Image from "next/image";
import TopMenu from "./TopMenu";

const Header: React.FC = () => {
  return (
    <header className='shadow flex-shrink-0'>
      <div className='container d-flex h-100 align-items-center justify-content-between p-2'>
        <Link
          href='/'
          className='d-flex align-items-center font-weight-bold gap-2 text-primary text-decoration-none text-uppercase text-dark'
        >
          <Image
            src='/images/main_logo.png'
            width={35}
            height={35}
            alt='logo'
          />
          Inventory
        </Link>
        <input
          className='form-control me-2 w-25'
          type='search'
          placeholder='Search'
        />
        <TopMenu />
      </div>
    </header>
  );
};

export default Header;
