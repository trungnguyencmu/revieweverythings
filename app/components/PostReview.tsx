/** @format */

import React, { Suspense } from 'react';

import { getPost } from '@/sanity/sanity-utils';
import { PortableText } from '@portabletext/react';
import Image from 'next/image';
import Link from 'next/link';
import Loading from './Loading';
import TableContent from './TableContent';

type Props = {
  params: { slug: string };
};

const PostReview = async ({ params }: Props) => {
  const page = await getPost(params.slug);

  const customBlockComponents = {
    block: ({ node, children }: any) => {
      const style = node.style || 'normal';
      if (style === 'h1') {
        return (
          <h1
            id={node._key}
            className="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900 section-heading"
          >
            {children}
          </h1>
        );
      }
      if (style === 'h2') {
        return (
          <h2
            id={node._key}
            className="text-2xl font-medium text-gray-900 title-font mb-2 section-heading"
          >
            {children}
          </h2>
        );
      }
      if (style === 'h3') {
        return (
          <h3
            id={node._key}
            className="title-font font-medium text-gray-900 section-heading"
          >
            {children}
          </h3>
        );
      }

      if (/^h\d/.test(style)) {
        const level = style.replace(/[^\d]/g, '');
        return React.createElement(`h${level}`, {}, children);
      }

      return style === 'blockquote' ? (
        <blockquote className="p-4 my-4 border-l-4 border-gray-300 bg-gray-50 dark:border-gray-500 dark:bg-gray-800">
          <p className="text-xl italic font-medium leading-relaxed text-gray-900 dark:text-white">
            {children}
          </p>
        </blockquote>
      ) : (
        <p className="leading-relaxed mb-4">{children}</p>
      );
    },
    marks: {
      internalLink: ({ children, value }: any) => {
        return (
          <Link
            passHref
            href={value.href}
            className="font-medium text-blue-600 dark:text-blue-500 hover:underline"
          >
            {children}
          </Link>
        );
      },
      link: ({ children, value }: any) => {
        return (
          <a
            target="_blank"
            rel="noopener"
            href={value.href}
            className="font-medium text-blue-600 dark:text-blue-500 hover:underline"
          >
            {children}
          </a>
        );
      },
    },
    types: {
      image: ({ value }: any) => {
        return (
          <Image
            src={value?.asset?.url}
            className="mt-4 h-auto"
            alt={value?.alt}
            width={500}
            height={500}
          />
        );
      },
    },
  };
  return (
    <Suspense fallback={<Loading />}>
      <div>
        <h1 className="text-5xl drop-shadow font-extrabold">{page?.title}</h1>
        <TableContent body={page?.body} />

        {page?.body && (
          <div className="text-lg text-gray-700 mt-10">
            <PortableText value={page?.body} components={customBlockComponents} />
          </div>
        )}
      </div>

      {/* <div>{page.body?.product}</div> */}
    </Suspense>
  );
};
export default PostReview;
