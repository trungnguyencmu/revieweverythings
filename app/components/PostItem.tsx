import { Post } from '@/types/Post';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';


const PostItem = ({ post }: { post: Post }) => {
  return (
    <div className="item-post-component">
      <Link
        href={`${post.slug}`}
      >
        <div className="mt-2 font-extrabold bg-gradient-to-r from-orange-400 via-red-500 to-purple-600 bg-clip-text text-transparent">
          {post.title}
        </div>
        <Image
          src={post.mainImage}
          alt={post.title}
          width={750}
          height={300}
          className="object-cover rounded-lg border"
        />
      </Link>
    </div>
  );
};
export default PostItem;
