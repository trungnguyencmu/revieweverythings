/** @format */

import Link from 'next/link';
import '../globals.css';
import Image from 'next/image';
import Header from '../components/Header';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title:
    'Đánh Giá Mọi Thứ - Xem Nhận Xét Chân Thành về Sản Phẩm, Dịch Vụ và Nhiều Hơn Nữa',
  description:
    'Khám phá những bài đánh giá chân thành về mọi thứ: sản phẩm, dịch vụ, sách, phim và nhiều hơn nữa. Xem nhận xét chi tiết và đánh giá chất lượng để giúp bạn đưa ra quyết định thông thái. Đọc ngay để có cái nhìn toàn diện về những gì bạn quan tâm.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-neutral-100 scrollbar-hide dark:bg-neutral-900">
        <Header />
        <main className="bg-slate-50">
          <div className="container px-md-4 px-0 mx-auto md:flex md:items-center py-4 py-md-8">
            <div className="bg-white p-4 md:p-8">{children}</div>
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
              © 2023{' '}
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
