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
      {categories.map((category) => (
        <div key={category._id} >
          <CategoryComponent category={category} />
          <PostItemsContainer category={category} />
        </div>
      ))}
    </>
  );
};
export default CategorySectionContainer;
