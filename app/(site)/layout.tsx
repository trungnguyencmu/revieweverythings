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
import Head from "next/head";
import Image from "next/image";

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
    setActivePage(slug);
  };
  const handleActiveNav = () => {
    setActiveNav(!activeNav);
  };
  return (
    <html lang="en">
      <Head>
        <title>Review Everythings</title>
        <meta
          key="desc"
          name="description"
          content="Khám phá những bài đánh giá chân thành về mọi thứ: sản phẩm, dịch vụ, sách, phim và nhiều hơn nữa. Xem nhận xét chi tiết và đánh giá chất lượng để giúp bạn đưa ra quyết định thông thái. Đọc ngay để có cái nhìn toàn diện về những gì bạn quan tâm."
        />

        <meta
          property="og:title"
          content="Đánh Giá Mọi Thứ - Xem Nhận Xét Chân Thành về Sản Phẩm, Dịch Vụ và Nhiều Hơn Nữa"
        />

        <meta
          property="og:description"
          content="And a social description for our cool page"
        />
        <meta
          property="og:description"
          content="Khám phá những bài đánh giá chân thành về mọi thứ: sản phẩm, dịch vụ, sách, phim và nhiều hơn nữa. Xem nhận xét chi tiết và đánh giá chất lượng để giúp bạn đưa ra quyết định thông thái. Đọc ngay để có cái nhìn toàn diện về những gì bạn quan tâm."
        />
      </Head>
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
          <div className="container px-4 mx-auto md:flex md:items-center py-8">
            {children}
          </div>
        </main>
        {/* container px-4 mx-auto md:flex md:items-center */}
        <footer className="bg-white shadow dark:bg-gray-900 ">
          <div className="container px-4 mx-auto md:py-8 py-4">
            <div className="sm:flex sm:items-center sm:justify-between">
              <Link href="/" className="flex items-center mb-4 sm:mb-0">
                <Image
                  src="/logo.png"
                  className="h-8 mr-3"
                  alt="Review Everythings Logo"
                  width={32}
                  height={32}
                />
                <span className="font-bold text-xl bg-gradient-to-r from-orange-400 via-red-500 to-purple-600 bg-clip-text text-transparent">
                  Review Everythings
                </span>
              </Link>
              <div className="flex flex-wrap gap-4 items-center sm:mb-0 h-4">
                <div>
                  <Link href="#" className="mr-4 hover:underline md:mr-6 ">
                    <svg
                      className="w-6 text-blue-600 fill-current"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                    >
                      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                    </svg>
                  </Link>
                </div>
                <div>
                  <Link href="#" className="mr-4 hover:underline md:mr-6">
                    <svg
                      className="w-6 text-blue-300 fill-current"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                    >
                      <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
                    </svg>
                  </Link>
                </div>
              </div>
            </div>
            <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
            <span className="block text-sm text-gray-500 sm:text-center dark:text-gray-400">
              © 2023{" "}
              <a href="https://revieweverythings.com/" className="hover:underline">
                Review Everythings
              </a>
              . All Rights Reserved.
            </span>
          </div>
        </footer>
      </body>
    </html>
  );
}
