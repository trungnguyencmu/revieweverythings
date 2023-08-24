/** @format */

"use client";

import PostItemsContainer from "@/app/containers/PostItemsContainer";
import { getCategory } from "@/sanity/sanity-utils";
import { Category } from "@/types/Category";
import React, { useEffect, useState } from "react";

const CategoryPostListPage = ({ slug }: { slug: string }) => {
  const [category, setCategory] = useState<Category>();
  useEffect(() => {
    const fetchData = async () => {
      const tmpCategory = await getCategory(slug);
      setCategory(tmpCategory);
    };
    fetchData();
  }, []);
  return (
    <div>
      <h1 className="text-3xl font-bold tracking-tight text-neutral-900 dark:text-white sm:text-4xl py-8">
        {category?.title}
      </h1>
      <PostItemsContainer
        slug={slug}
        wrapClass="flex flex-col gap-8"
        itemClass="w-full"
        postItemClass="flex flex-row"
      />
    </div>
  );
};
export default CategoryPostListPage;
