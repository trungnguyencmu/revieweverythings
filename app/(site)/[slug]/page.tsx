/** @format */
"use client"

import { getPost } from "@/sanity/sanity-utils";
import { Post } from "@/types/Post";
import { PortableText } from "@portabletext/react";
import Link from "next/link";
import { useEffect, useState } from "react";

type Props = {
  params: { slug: string };
};

type InternalLinkMark = {
  _type: "internalLink";
  href: string;
};

export default function Page({ params }: Props) {

  const [page, setPage] = useState<Post | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      const fetchedPage = await getPost(params.slug);
      setPage(fetchedPage);
    };
    fetchData();
  }, [params.slug]);


  // const page = await getPost(params.slug);
    console.log('page', page);
  const customBlockComponents = {
    marks: {
      internalLink: ({ children, value }: any) => {
        console.log('value', value);
        return <Link href={value.href}>{children}</Link>;
      },
    },
    product: ({ children, value }: any) => {
      return <div>123123</div>;
    },
  };

  if (!page) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1 className="bg-gradient-to-r from-orange-400 via-red-500 to-purple-600 bg-clip-text text-transparent text-5xl drop-shadow font-extrabold">
        {page.title}
      </h1>
      <div className="text-lg text-gray-700 mt-10">
        <PortableText value={page.body} components={customBlockComponents} />
      </div>
      {/* <div>{page.body?.product}</div> */}
    </div>
  );
}
