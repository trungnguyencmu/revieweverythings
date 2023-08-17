import { Post } from '@/types/Post';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';


const PostItem = ({ post }: { post: Post }) => {
  return (
    <div className="item-post-component">
      <Link href={`${post.slug}`}>
        <Image
          src={post.mainImage}
          alt={post.title}
          width={750}
          height={300}
          className="object-cover rounded-lg border"
        />
        <h2 className="my-2 font-extrabold bg-gradient-to-r ">{post.title}</h2>
      </Link>
    </div>
  );
};
export default PostItem;
