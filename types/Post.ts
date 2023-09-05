/** @format */

import { PortableTextBlock } from "sanity";
import { Category } from './Category';

export type Post = {
  _id: string;
  _createdAt: Date;
  title: string;
  description: string;
  slug: string;
  mainImage: string;
  body: PortableTextBlock[];
  categories: Category[],
  estimatedReadingTime: number
};
