/** @format */

import { PortableTextBlock } from "sanity";

export type Post = {
  _id: string;
  _createdAt: Date;
  title: string;
  description: string;
  slug: string;
  mainImage: string;
  body: PortableTextBlock[];
};
