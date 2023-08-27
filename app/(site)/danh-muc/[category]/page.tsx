/** @format */

import React from "react";
import CategoryPostListPage from "../CategoryPostListPage";

type Props = {
  params: { category: string };
};

export default async function Page({ params }: Props) {
  return <CategoryPostListPage slug={params.category} />;
}
