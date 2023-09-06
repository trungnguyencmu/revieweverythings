/** @format */
import CategoryComponent from '../components/Category';
import PostItemsContainer from './PostItemsContainer';
import { Suspense } from 'react';
import SkeletonPost from '../components/Skeleton/SkeletonPost';
import { CATEGORY_LIST } from '@/constant/category';
import { Category } from '@/types/Category';
function CategorySectionContainer() {
  const categories = CATEGORY_LIST as Category[];
  return (
    <>
      {categories.map((category, index) => (
        <div key={category._id} className="py-3">
          <CategoryComponent category={category} />

          <Suspense fallback={<SkeletonPost />}>
            <PostItemsContainer slug={category.slug} postItemClass="flex-col" />
          </Suspense>
          {index + 1 !== categories.length && (
            <div className="flex flex-row justify-center">
              <div className="w-20 border-t-2 border-solid border-indigo-200 inline-block mb-3 my-6"></div>
            </div>
          )}
        </div>
      ))}
    </>
  );
}
export default CategorySectionContainer;
