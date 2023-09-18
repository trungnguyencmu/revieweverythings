// import getAllCategories from "@/lib/getAllCategories";
import { allSlugsQuery, getCategories } from '@/sanity/sanity-utils';

export default async function sitemap() {
  const baseUrl = "https://revieweverythings.com";

  // Get All Posts from CMS
  const posts = await allSlugsQuery();
  const postsUrls =
    posts?.map((post) => {
      return {
        url: `${baseUrl}/${post}`,
        lastModified: new Date(),
      };
    }) ?? [];

  // Get All Categories from CMS
  const categories = await getCategories();
  const categoriesUrls =
    categories?.map((category) => {
      return {
        url: `${baseUrl}/danh-muc/${category.slug}`,
        lastModified: new Date(),
      };
    }) ?? [];

  return [
    {
      url: baseUrl,
      lastModified: new Date(),
    },
    {
      url: `${baseUrl}/tim-kiem`,
      lastModified: new Date(),
    },
    ...postsUrls,
    ...categoriesUrls,
  ];
}
