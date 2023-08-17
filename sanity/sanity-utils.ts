/** @format */

import { Project } from "@/types/Project";
import { createClient, groq } from "next-sanity";
import clientConfig from "./config/client-config";
import { Page } from "@/types/Page";
import { Category } from "@/types/Category";
import { Post } from "@/types/Post";

export async function getProjects(): Promise<Project[]> {
  return createClient(clientConfig).fetch(
    groq`*[_type == "project"]{
      _id,
      _createdAt,
      title,
      "slug": slug.current,
      "image": image.asset->url,
      url,
      content
    }`
  );
}

export async function getProject(slug: string): Promise<Project> {
  return createClient(clientConfig).fetch(
    groq`*[_type == "project" && slug.current == $slug][0]{
      _id,
      _createdAt,
      title,
      "slug": slug.current,
      "image": image.asset->url,
      url,
      content
    }`,
    { slug }
  );
}

export async function getPages(): Promise<Page[]> {
  return createClient(clientConfig).fetch(
    groq`*[_type == "page"]{
      _id,
      _createdAt,
      title,
      "slug": slug.current
    }`
  );
}

export async function getPage(slug: string): Promise<Page> {
  return createClient(clientConfig).fetch(
    groq`*[_type == "page" && slug.current == $slug][0]{
      _id,
      _createdAt,
      title,
      "slug": slug.current,
      content,
    }`,
    { slug }
  );
}

export async function getCategories(): Promise<Category[]> {
  return createClient(clientConfig).fetch(
    groq`*[_type == "category"]{
        _id,
        _createdAt,
        title,
        "slug": slug.current,
      }`
  );
}

export async function getPostsWithCategoryName(category: Category): Promise<Post[]> {
  return createClient(clientConfig).fetch(
    groq`*[_type == "post" && $keyword in categories[]->slug.current]{
        _id,
        _createdAt,
        title,
        "mainImage": mainImage.asset->url,
        categories[] -> {
          title,
          slug
        }
      }`,
    { keyword: category.slug }
  );
}
