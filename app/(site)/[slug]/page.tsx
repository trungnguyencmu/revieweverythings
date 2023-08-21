/** @format */

import PostReview from "@/app/components/PostReview";
import { getPost } from "@/sanity/sanity-utils";
import type { Metadata } from "next";

type Props = {
  params: { slug: string };
  searchParams: { [key: string]: string | string[] | undefined };
};

export async function generateMetadata(
  { params }: Props,
): Promise<Metadata> {
  // read route params
  const slug = params.slug;

  // fetch data
  const product = await getPost(slug);

  return {
    title: product.title,
   
  };
}

export default function Page({ params }: Props) {
  return <PostReview params ={params} />;
}
