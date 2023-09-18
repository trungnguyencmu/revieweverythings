/** @format */
'use client';
import { useSearchContext } from '@/app/(site)/context/SearchContext';
import { findPost } from '@/sanity/sanity-utils';
import React, { useEffect, useState } from 'react';
import PostItem from '../PostItem';
import { Post } from '@/types/Post';
const SearchPage: React.FC = () => {
  const { search } = useSearchContext();
  const [posts, setPosts] = useState<Post[]>([]);
  useEffect(() => {
    const fetchPosts = async () => {
      console.log('search', search);
      try {
        const tmpPosts = await findPost(search);
        setPosts(tmpPosts);
      } catch (error) {
        console.error('Error fetching posts:', error);
      }
    };

    fetchPosts();
  }, [search]);

  return (
    <div className={'flex flex-col gap-8'}>
      {posts.map((post) => (
        <div className={'w-full'} key={post._id}>
          <PostItem
            post={post}
            isShowDescription={true}
            wrapClass={
              'flex items-start justify-between hover:opacity-80 gap-8 flex md:flex-row flex-col'
            }
            imageClass={'rounded-3xl bg-neutral-100 object-cover sm:aspect-[2/1]'}
          />
        </div>
      ))}
    </div>
  );
};
export default SearchPage;
