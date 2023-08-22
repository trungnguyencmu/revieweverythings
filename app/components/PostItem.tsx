import { Post } from '@/types/Post';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';


const PostItem = ({
  post,
  isShowDescription = false,
  wrapClass=""
}: {
  post: Post;
  isShowDescription?: boolean,
  wrapClass?: string
}) => {
  return (
    <div className={`item-post-component`}>
      <Link href={`${post.slug}`} className={`${wrapClass}`}>
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
      </Link>
    </div>
  );
};
export default PostItem;
