/** @format */
'use client';
import Image from 'next/image';
import { Suspense } from 'react';
import Loading from '../components/Loading';
import CategorySectionContainer from '../containers/CategorySectionContainer';

export default function Home() {
  return (
    <Suspense fallback={<Loading />}>
      <div>
        <div className="py-6 md:py-12">
          <div className="container px-4 mx-auto">
            <div className="text-center max-w-2xl mx-auto">
              <h1 className="text-3xl md:text-4xl font-medium mb-2 font-bold ">
                Khám Phá, So Sánh, Quyết Định
              </h1>
              <h2>Điểm Đến Đánh Giá Sản Phẩm Tối Ưu Của Bạn</h2>
              <div className="mt-6">
                <a
                  className="bg-indigo-600 text-white py-2 px-6 rounded-full text-xl "
                  href="#category-list"
                >
                  Bắt đầu nào
                </a>
              </div>

              <div className=""></div>
              <div className="mt-4 flex flex-row items-center justify-center">
                <Image
                  src="/images/review.png"
                  alt="review everything"
                  className="d-block max-w-full rounded shadow-md"
                  width={320}
                  height={400}
                />
              </div>
            </div>

            <div className="md:flex md:flex-wrap md:-mx-4 mt-6 md:mt-12">
              <div className="md:w-1/3 md:px-4 xl:px-6 mt-8 md:mt-0 text-center">
                <span className="w-20 border-t-2 border-solid border-indigo-200 inline-block mb-3"></span>
                <h5 className="text-xl font-medium uppercase mb-4">
                  Khám Phá Đánh Giá Toàn Diện
                </h5>
                <p className="text-gray-600">
                  Tại ReviewEverything.com, chúng tôi tổng hợp đánh giá chân thực về mọi
                  loại sản phẩm, giúp bạn định hình quyết định mua sắm thông minh.
                </p>
              </div>

              <div className="md:w-1/3 md:px-4 xl:px-6 mt-8 md:mt-0 text-center">
                <span className="w-20 border-t-2 border-solid border-indigo-200 inline-block mb-3"></span>
                <h5 className="text-xl font-medium uppercase mb-4">
                  Chất Lượng Chuyên Gia, Đáng Tin Cậy
                </h5>
                <p className="text-gray-600">
                  Chuyên gia của chúng tôi thực hiện kiểm tra kỹ lưỡng, giúp bạn có niềm
                  tin tuyệt đối trong việc lựa chọn sản phẩm dựa trên thông tin chính xác.
                </p>
              </div>

              <div className="md:w-1/3 md:px-4 xl:px-6 mt-8 md:mt-0 text-center">
                <span className="w-20 border-t-2 border-solid border-indigo-200 inline-block mb-3"></span>
                <h5 className="text-xl font-medium uppercase mb-4">
                  Tự Tin Với Sự Lựa Chọn Thông Minh
                </h5>
                <p className="text-gray-600">
                  Tận dụng thông tin đánh giá chi tiết để đưa ra quyết định mua sắm tự
                  tin, mang lại sự thỏa mãn cho cuộc sống hàng ngày của bạn.
                </p>
              </div>
            </div>
          </div>
        </div>
        <hr />
        <div id="category-list">
          <CategorySectionContainer />
        </div>
      </div>
    </Suspense>
  );
}
