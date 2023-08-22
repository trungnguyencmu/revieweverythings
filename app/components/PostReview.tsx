"use client";
import React, { Suspense } from 'react';

import { getPost } from "@/sanity/sanity-utils";
import { Post } from "@/types/Post";
import { PortableText } from "@portabletext/react";
import Link from "next/link";
import { useEffect, useState } from "react";
import Loading from './Loading';

type Props = {
  params: { slug: string };
};

const PostReview = ({params}: Props) => {

  const [page, setPage] = useState<Post | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      const fetchedPage = await getPost(params.slug);
      setPage(fetchedPage);
    };
    fetchData();
  }, [params.slug]);

  const customBlockComponents = {
    marks: {
      internalLink: ({ children, value }: any) => {
        console.log("value", value);
        return <Link href={value.href}>{children}</Link>;
      },
    },
    product: ({ children, value }: any) => {
      return <div>123123</div>;
    },
  };
return (
  <Suspense fallback={<Loading />}>
    <div>
      <h1 className="text-5xl drop-shadow font-extrabold">
        {page?.title}
      </h1>
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
