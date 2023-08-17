import { getPostsWithCategoryName } from '@/sanity/sanity-utils';
import React, { useEffect, useState } from 'react';
import PostItem from '../components/PostItem';
import { Category } from '@/types/Category';
import { Post } from '@/types/Post';
const PostItemsContainer = ({category}: {category: Category}) => {
  const [posts, setPosts] = useState<Post[]>([]);
  useEffect(() => {
    const fetchData = () => {
      getPostsWithCategoryName(category)
        .then((tmpPosts) => {
          setPosts(tmpPosts);
        })
        .catch(console.error);
    };
    fetchData();
  }, [category.title]);
  return (
    <div className="md:flex md:flex-wrap mt-1">
      {posts.map((post) => (
        <div className="md:w-1/4 md:mt-0">
          <PostItem post={post} key={post._id} />
        </div>
      ))}
    </div>
  );
};
export default PostItemsContainer;
