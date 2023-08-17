/** @format */
"use client";

import { getPages } from "@/sanity/sanity-utils";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
import "../globals.css";

import { Page } from "@/types/Page";
import { config } from "@fortawesome/fontawesome-svg-core";
import "@fortawesome/fontawesome-svg-core/styles.css";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

config.autoAddCss = false;

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const pathName = usePathname()
  const [activeNav, setActiveNav] = useState(false);
  const [pages, setPages] = useState<Page[]>([]);
  const [activePage, setActivePage] = useState<string>(pathName || "");

  useEffect(() => {
    const fetchData = () => {
      getPages()
        .then((tmpPages) => {
          console.log("tmpPages", tmpPages);
          setPages(tmpPages);
        })
        .catch(console.error);
    };
    fetchData();
  }, []);

  const isActivePage = (slug: string): boolean => {
    return activePage === slug;
  };

  const handleChangePage = (slug: string) => {
    console.log("tmpSlug", slug);
    setActivePage(slug);
  };
  const handleActiveNav = () => {
    setActiveNav(!activeNav);
  };
  return (
    <html lang="en">
      <body className="body">
        <div className="header-2">
          <nav className="bg-white py-2 md:py-4">
            <div className="container px-4 mx-auto md:flex md:items-center">
              <div className="flex justify-between items-center">
                <Link
                  href="/"
                  className="font-bold text-xl bg-gradient-to-r from-orange-400
                  via-red-500 to-purple-600 bg-clip-text text-transparent flex gap-2 items-center"
                >
                  <div>Review Everythings</div>
                  <FontAwesomeIcon icon={faSearch} style={{ color: "blue" }} size="xs" />
                </Link>

                <button
                  className="border border-solid border-gray-600 px-3 py-1 rounded text-gray-600 opacity-50 hover:opacity-75 md:hidden"
                  onClick={handleActiveNav}
                >
                  <svg
                    className="fill-current h-3 w-3"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <title>Menu</title>
                    <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
                  </svg>
                </button>
              </div>

              <div
                className="hidden md:flex flex-col md:flex-row md:ml-auto mt-3 md:mt-0"
                id="navbar-collapse"
              >
                <a
                  href="/"
                  className="p-2 lg:px-4 md:mx-2 text-white rounded bg-indigo-600"
                >
                  Home
                </a>
                {pages &&
                  pages.map((page) => (
                    <Link
                      onClick={() => handleChangePage(`/${page.slug}`)}
                      key={page._id}
                      href={`/${page.slug}`}
                      className={`p-2 lg:px-4 md:mx-2 text-gray-600 rounded hover:bg-gray-200 hover:text-gray-700 transition-colors duration-300 ${
                        isActivePage(`/${page.slug}`) && "underline"
                      }`}
                    >
                      {page.title}
                    </Link>
                  ))}
              </div>
              {activeNav && (
                <div className="w-full block md:hidden lg:hidden flex-grow lg:flex lg:items-center lg:w-auto">
                  <div className="text-sm lg:flex-grow">
                    {pages &&
                      pages.map((page) => (
                        <Link
                          onClick={() => handleChangePage(`/${page.slug}`)}
                          key={page._id}
                          href={`/${page.slug}`}
                          className={`block mt-4 lg:inline-block lg:mt-0 text-gray-600 hover:text-gray-700 mr-4 ${
                            isActivePage(`/${page.slug}`) && "underline"
                          }`}
                        >
                          {page.title}
                        </Link>
                      ))}
                  </div>
                </div>
              )}
            </div>
          </nav>
        </div>
        <main className="bg-slate-50">
          <div className="container px-4 mx-auto md:flex md:items-center ">
            {children}
          </div>
        </main>
      </body>
    </html>
  );
}
