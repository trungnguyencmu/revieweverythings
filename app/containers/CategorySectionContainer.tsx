import { getCategories } from '@/sanity/sanity-utils';
import { Category } from '@/types/Category';
import React, { useEffect, useState } from 'react';
import CategoryComponent from '../components/Category';
import PostItemsContainer from './PostItemsContainer';
const CategorySectionContainer = () => {
  
  const [categories, setCategories] = useState<Category[]>([]);
  useEffect(() => {
    const fetchData = () => {
      getCategories()
        .then((tmpCategories) => {
          setCategories(tmpCategories);
        })
        .catch(console.error);
    };
    fetchData();
  }, []);

  return (
    <>
      {categories.map((category, index) => (
        <div key={category._id} className="py-6">
          <CategoryComponent category={category} />
          <PostItemsContainer slug={category.slug} />
          {index + 1 !== categories.length && (
            <div className="flex flex-row justify-center">
              <div className="w-20 border-t-2 border-solid border-indigo-200 inline-block mb-3 my-6"></div>
            </div>
          )}
        </div>
      ))}
    </>
  );
};
export default CategorySectionContainer;
