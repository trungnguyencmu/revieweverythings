"use client"

import PostItemsContainer from '@/app/containers/PostItemsContainer';
import { getCategory } from '@/sanity/sanity-utils';
import { Category } from '@/types/Category';
import React, { useEffect, useState } from 'react';

const CategoryPostListPage = ({slug}: {slug: string}) => {
  const [category, setCategory] = useState<Category>()
  useEffect(() => {
    const fetchData = async () => {
      const tmpCategory = await getCategory(slug)
      setCategory(tmpCategory)
    }
    fetchData()
  },[])
  return (
    <div>
      <h1 className="text-3xl md:text-4xl font-medium mb-2 font-bold py-8 underline">
        {category?.title}
      </h1>
      <PostItemsContainer
        slug={slug}
        wrapClass="flex flex-column"
        itemClass="full-width"
        postItemClass='flex flex-row'
      />
    </div>
  );
};
export default CategoryPostListPage;
