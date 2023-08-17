import React from 'react';
import { Category } from "@/types/Category";
import Link from 'next/link';

const CategoryComponent = ({ category }: { category: Category }) => {
  return (
    <div className="flex-row flex items-center max-w-full justify-between">
      <Link
        href={`danh-muc/${category.slug}`}
        className="font-bold text-xl bg-gradient-to-r from-orange-400
                  via-red-500 to-purple-600 bg-clip-text text-transparent flex gap-2 items-center"
      >
        <div>{category.title}</div>
      </Link>

      <Link href={`danh-muc/${category.slug}`} className="text-gray-600 underline">
        <div>Xem thêm</div>
      </Link>
    </div>
  );
};
export default CategoryComponent;
