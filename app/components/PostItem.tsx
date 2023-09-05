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
            {/* <time>March 5, 2023</time> */}
            <time>{String(new Date(post._createdAt).toLocaleDateString('en-US'))}</time>
            {/* <svg
              stroke="currentColor"
              fill="currentColor"
              stroke-width="0"
              viewBox="0 0 512 512"
              className="h-2 w-2"
              height="1em"
              width="1em"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8z"></path>
            </svg>
            126 views */}
          </div>
          <div className="group relative">
            <h3 className="mt-3 text-lg font-semibold leading-6 text-neutral-900 dark:text-white">
              {post.title}
            </h3>
            <div className="mt-5 line-clamp-3 text-sm leading-6 text-neutral-600 dark:text-neutral-400">
              {isShowDescription && <div>{post.description}</div>}
            </div>
          </div>
          {/* <div className="relative mt-8 flex items-center gap-x-4 border-t border-neutral-900/5 pt-6 dark:border-neutral-200/5">
            <Image
              src={post.mainImage}
              alt="mathias"
              loading="lazy"
              width="40"
              height="40"
              decoding="async"
              data-nimg="1"
              className="... h-10 w-10 rounded-full bg-gradient-to-r from-blue-500 to-cyan-500 object-cover shadow-2xl ring-2 ring-white"
              style={{ color: "transparent" }}
            />
            <div className="text-sm leading-6">
              <p className="font-semibold text-neutral-900 dark:text-white">
                <span className="absolute inset-0"></span>Mathias
              </p>
              <p className="text-neutral-600 dark:text-neutral-400">
                Software developer, instructor, and amateur photographer.
              </p>
            </div>
          </div> */}
        </div>
      </Link>
      {/* <Link href={`${post.slug}`} className={`${wrapClass}`}>
        <Image
          src={post.mainImage}
          alt={post.title}
          width={370}
          height={220}
          className="rounded-lg h-48"
          style={{ objectFit: "cover" }}
        />
        <div>
          <h2 className="my-2 font-extrabold bg-gradient-to-r ">{post.title}</h2>
          {isShowDescription && <div>{post.description}</div>}
        </div>
      </Link> */}
    </div>
  );
};
export default PostItem;
