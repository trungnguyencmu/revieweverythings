/** @format */

import { Project } from "@/types/Project";
import { createClient, groq } from "next-sanity";
import clientConfig from "./config/client-config";
import { Page } from "@/types/Page";
import { Category } from "@/types/Category";
import { Post } from "@/types/Post";
import { resolve } from "path";

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

export async function getPostsFollowCategory(slug: string): Promise<Project[]> {
  return createClient(clientConfig).fetch(
    groq`*[_type == "post" && $keyword in categories[]->slug.current]{
          _id,
          _createdAt,
          title,
          "mainImage": mainImage.asset->url,
          categories[] -> {
            title,
            slug
          },
          "slug": slug.current,
        }`,
    { keyword: slug }
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

export async function getCategory(slug: string): Promise<Category> {
  return createClient(clientConfig).fetch(
    groq`*[_type == "category" && slug.current == $slug][0]{
      _id,
      _createdAt,
      title,
      "slug": slug.current,
    }`,
    { slug }
  );
}

export async function getPostsWithCategoryName(
  slug = "",
  from = 0,
  to = 10
): Promise<Post[]> {
  return createClient(clientConfig).fetch(
    groq`*[_type == "post" && isPublished && $keyword in categories[]->slug.current][${from}...${to}] | order(_createdAt asc){
        _id,
        _createdAt,
        title,
        description,
        "mainImage": mainImage.asset->url,
        categories[] -> {
          title,
          slug
        },
        "slug": slug.current,
      }`,
    { keyword: slug }
  );
}

export async function getPost(slug: string): Promise<Post> {
  const bodyField = `
  body[]{
    ...,
    // add your custom blocks here (we don't need to do that for images, because we will get the image url from the @sanity/image-url package)
    
    markDefs[]{ 
      // so here we make sure to enclude all other data points are included
      ..., 
      // then we define that if a child of the markDef array is of the type internalLink, we want to get the referenced doc value of slug and combine that with a / 
      _type == "internalLink" => { "href": "/"+ @.reference-> slug.current },
    },
    _type == "image" => {
      ...,
      asset->
    }
  }
`;

  return createClient(clientConfig).fetch(
    groq`*[_type == "post" && isPublished && slug.current == $slug][0]{
      _id,
      _createdAt,
      title,
      description,
      "slug": slug.current,
      content,
      categories[] -> {
        title,
        "slug": slug.current,
      },
      "mainImage": mainImage.asset->url,
      "estimatedReadingTime": round(length(pt::text(body)) / 5 / 180 ),
      ${bodyField}
    }`,
    { slug }
  );
}

// GROQ All Slugs
export async function allSlugsQuery(): Promise<string[]> {
  return createClient(clientConfig).fetch(
    groq`*[defined(slug.current)][].slug.current`
  );
}


export async function findPost(
  name = "",
  from = 0,
  to = 10
): Promise<Post[]> {
  return createClient(clientConfig).fetch(
    groq`*[_type == "post" && isPublished && title match keyword][${from}...${to}] | order(_createdAt asc){
        _id,
        _createdAt,
        title,
        description,
        "mainImage": mainImage.asset->url,
        categories[] -> {
          title,
          slug
        },
        "slug": slug.current,
      }`,
    { keyword: name }
  );
}
