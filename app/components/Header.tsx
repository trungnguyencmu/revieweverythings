/** @format */

'use client';

import '@fortawesome/fontawesome-svg-core/styles.css';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Link from 'next/link';
import React from 'react';
import SearchBar from './SearchBar';

const Header: React.FC = () => {
  return (
    <div className="header-2">
      <nav className="bg-white py-2 md:py-4">
        <div className="container px-4 mx-auto md:flex md:items-center">
          <div className="flex justify-center md:justify-between items-center ">
            <Link
              href="/"
              className="font-bold text-xl bg-gradient-to-r from-orange-400
                  via-red-500 to-purple-600 bg-clip-text text-transparent flex gap-2 items-center"
            >
              <h1>Review Everythings</h1>
              <FontAwesomeIcon icon={faSearch} style={{ color: 'blue' }} size="xs" />
            </Link>
          </div>

          {/* <div className="md:hidden mt-3">
            <SearchBar />
          </div>
          <div
            className="hidden md:flex flex-col md:flex-row md:ml-auto mt-3 md:mt-0"
            id="navbar-collapse"
          >
            <SearchBar />
          </div> */}
        </div>
      </nav>
    </div>
  );
};
export default Header;
