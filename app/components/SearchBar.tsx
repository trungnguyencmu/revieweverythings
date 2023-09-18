/** @format */
'use client';
import React, { useRef, useState } from 'react';
// import { useRouter } from 'next/router';

import { useSearchContext } from '../(site)/context/SearchContext';
import { useRouter } from 'next/navigation';

const SearchBar: React.FC = () => {
  const router = useRouter();
  const [searchType, setSearchType] = useState('');
  const { search, setSearch } = useSearchContext();

  const clickPoint = useRef<HTMLDivElement>(null);

  const handleFocus = () => {
    if (clickPoint.current) {
      clickPoint.current.style.display = 'none';
    }
  };

  const handleBlur = () => {
    if (clickPoint.current) {
      clickPoint.current.style.display = 'block';
    }
  };

  const handleChangeValue = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchType(e.target.value);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSearch(searchType);
    router.push('/tim-kiem');
  };

  return (
    <div className="items-center px-4 flex justify-center">
      <div className="relative mr-3">
        <div className="absolute top-3 left-3 items-center" ref={clickPoint}>
          <svg
            className="w-5 h-5 text-gray-500"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
              clipRule="evenodd"
            ></path>
          </svg>
        </div>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            className="block p-2 pl-10 w-70 text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:pl-3"
            placeholder="Search Here..."
            onFocus={handleFocus}
            onBlur={handleBlur}
            onChange={handleChangeValue}
          />
        </form>
      </div>
    </div>
  );
};

export default SearchBar;
