
import React from 'react';
import { Category } from "@/types/Category";
import Link from 'next/link';

const CategoryComponent = ({ category }: { category: Category }) => {
  return (
    <div className="flex-row flex items-center max-w-full justify-between mb-4">
      <Link href={`danh-muc/${category.slug}`} className="flex gap-2 items-center">
        <h1 className="text-2xl font-extrabold leading-none tracking-tight text-gray-900 md:text-3xl lg:text-5xl dark:text-white">
          {category.title}
        </h1>
      </Link>

      <Link href={`danh-muc/${category.slug}`} className="text-gray-600 underline">
        <div>Xem thêm</div>
      </Link>
    </div>
  );
};
export default CategoryComponent;
