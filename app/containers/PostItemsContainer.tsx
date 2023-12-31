/** @format */

import { getPostsWithCategoryName } from '@/sanity/sanity-utils';
import PostItem from '../components/PostItem';

export default async function PostItemsContainer({
  slug = '',
  wrapClass = 'md:flex md:flex-wrap mt-1 md:gap-4',
  itemClass = 'md:w-1/4 md:mt-0 mb-8 md:mb-0',
  postItemClass = '',
  imageClass
}: {
  slug?: string;
  wrapClass?: string;
  itemClass?: string;
  postItemClass?: string;
  imageClass?: string;
}) {
  const posts = await getPostsWithCategoryName(slug, 0, 5);
  return (
    <div className={wrapClass}>
      {posts.map((post) => (
        <div className={itemClass} key={post._id}>
          <PostItem post={post} isShowDescription={true} wrapClass={postItemClass} imageClass={imageClass}/>
        </div>
      ))}
    </div>
  );
}
