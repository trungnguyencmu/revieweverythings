/** @format */

import Loading from '@/app/components/Loading';
import SearchPage from '@/app/components/pages/SearchPage';
import { Suspense } from 'react';
const Page = () => {
  return (
    <Suspense fallback={<Loading />}>
      <SearchPage />
    </Suspense>
  );
};
export default Page;
