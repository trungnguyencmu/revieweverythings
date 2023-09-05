/**
 * eslint-disable @next/next/no-img-element
 *
 * @format
 */
import getRelativeDate from '@/app/lib/getRelativeDate';
import { getPost } from '@/sanity/sanity-utils';
import { ImageResponse } from 'next/server';
export const size = {
  width: 1200,
  height: 630,
};
export const alt = 'ReviewEverything | Đánh giá';
export const contentType = 'image/png';

export default async function og({ params }: { params: { slug: string } }) {
  const slug = params.slug;
  const post = await getPost(slug);
  return new ImageResponse(
    (
      <div tw="relative flex w-full h-full flex items-center justify-center px-4">
        {/* Background */}
        <div tw="absolute flex inset-0">
          <img tw="flex flex-1" src={post?.mainImage} alt={post?.title!!} />
          {/* Overlay */}
          <div tw="absolute flex inset-0 bg-black bg-opacity-50" />
        </div>
        <div tw="flex flex-col text-neutral-50">
          {/* Title */}
          <div tw="text-7xl font-bold">{post?.title}</div>
          {/* Tags */}
          <div tw="flex mt-6 flex-wrap items-center text-4xl text-neutral-200">
            <div tw="font-medium text-emerald-600">{post?.categories[0].title}</div>
            <div tw="w-4 h-4 mx-6 rounded-full bg-neutral-300 " />
            <div>Admin</div>
            <div tw="w-4 h-4 mx-6 rounded-full bg-neutral-300" />
            <div>{`Thời gian đọc: ${post?.estimatedReadingTime} phút`}</div>
            <div tw="w-4 h-4 mx-6 rounded-full bg-neutral-300" />
            <div>{getRelativeDate(String(post?._createdAt!!))}</div>
          </div>
        </div>
      </div>
    ),
    size
  );
}
