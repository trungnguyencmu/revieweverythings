/** @format */

import { Post } from '@/types/Post';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const PostItem = ({
  post,
  isShowDescription = false,
  wrapClass = 'flex-col',
}: {
  post: Post;
  isShowDescription?: boolean;
  wrapClass?: string;
}) => {
  return (
    <div className="item-post-component">
      <Link
        className={`flex items-start justify-between hover:opacity-80 gap-8 ${wrapClass}`}
        href={`/${post.slug}`}
      >
        <div className="relative w-full">
          <Image
            src={post.mainImage}
            alt={post.title}
            width="640"
            height="360"
            decoding="async"
            data-nimg="1"
            className="aspect-[16/9] w-full rounded-3xl bg-neutral-100 object-cover sm:aspect-[2/1] lg:aspect-[3/2]"
            style={{ color: 'transparent' }}
          />
          <div className="absolute inset-0 rounded-3xl ring-1 ring-inset ring-neutral-900/10"></div>
        </div>
        <div className="max-w-xl">
          <div className="flex items-center gap-x-4 text-xs text-neutral-500 dark:text-neutral-400">
            <time>{String(new Date(post._createdAt).toLocaleDateString('en-US'))}</time>
          </div>
          <div className="group relative">
            <h3 className="mt-3 text-lg font-semibold leading-6 text-neutral-900 dark:text-white">
              {post.title}
            </h3>
            <div className="md:mt-3 mt-2 line-clamp-3 text-sm leading-6 text-neutral-600 dark:text-neutral-400">
              {isShowDescription && <div>{post.description}</div>}
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
};
export default PostItem;
