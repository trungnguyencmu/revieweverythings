/** @format */

import PostItemsContainer from "@/app/containers/PostItemsContainer";
import { getCategory } from "@/sanity/sanity-utils";

const CategoryPostListPage = async ({ slug }: { slug: string }) => {
  const category = await getCategory(slug);
  return (
    <div>
      <h1 className="text-3xl font-bold tracking-tight text-neutral-900 dark:text-white sm:text-4xl py-8">
        {category?.title}
      </h1>
      <PostItemsContainer
        slug={slug}
        wrapClass="flex flex-col gap-8"
        itemClass="w-full"
        postItemClass="flex flex-row"
      />
    </div>
  );
};
export default CategoryPostListPage;
