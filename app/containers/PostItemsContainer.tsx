"use client"
import { getPostsWithCategoryName } from '@/sanity/sanity-utils';
import React, { useEffect, useState } from 'react';
import PostItem from '../components/PostItem';
import { Post } from '@/types/Post';

const PostItemsContainer = ({
  slug,
  wrapClass = "md:flex md:flex-wrap mt-1 md:gap-4",
  itemClass = "md:w-1/4 md:mt-0",
  postItemClass = "",
}: {
  slug: string;
  wrapClass?: string;
  itemClass?: string;
  postItemClass?: string;
}) => {
  const [posts, setPosts] = useState<Post[]>([]);
  useEffect(() => {
    const fetchData = () => {
      getPostsWithCategoryName(slug, 0, 5)
        .then((tmpPosts) => {
          setPosts(tmpPosts);
        })
        .catch(console.error);
    };
    fetchData();
  }, [slug]);
  return (
    <div className={wrapClass}>
      {posts.map((post) => (
        <div className={itemClass} key={post._id}>
          <PostItem post={post} isShowDescription={true} wrapClass={postItemClass}/>
        </div>
      ))}
    </div>
  );
};
export default PostItemsContainer;
