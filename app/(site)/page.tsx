/** @format */
"use client"
import CategorySectionContainer from "../containers/CategorySectionContainer";

export default function Home() {
  
  return (
    <div>
      <div className="py-6 md:py-12">
        <div className="container px-4 mx-auto">
          <div className="text-center max-w-2xl mx-auto">
            <h1 className="text-3xl md:text-4xl font-medium mb-2 font-bold ">
              Khám Phá, So Sánh, Quyết Định
            </h1>
            <h2>Điểm Đến Đánh Giá Sản Phẩm Tối Ưu Của Bạn</h2>
            <button className="bg-indigo-600 text-white py-2 px-6 rounded-full text-xl mt-6">
              Bắt đầu nào
            </button>
            <div className="mt-4">
              <img
                src="//via.placeholder.com/1000x785/fff?text=iMac+Mockup"
                alt="mockup"
                className="d-block max-w-full rounded shadow-md"
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
                Chuyên gia của chúng tôi thực hiện kiểm tra kỹ lưỡng, giúp bạn có niềm tin
                tuyệt đối trong việc lựa chọn sản phẩm dựa trên thông tin chính xác.
              </p>
            </div>

            <div className="md:w-1/3 md:px-4 xl:px-6 mt-8 md:mt-0 text-center">
              <span className="w-20 border-t-2 border-solid border-indigo-200 inline-block mb-3"></span>
              <h5 className="text-xl font-medium uppercase mb-4">
                Tự Tin Với Sự Lựa Chọn Thông Minh
              </h5>
              <p className="text-gray-600">
                Tận dụng thông tin đánh giá chi tiết để đưa ra quyết định mua sắm tự tin,
                mang lại sự thỏa mãn cho cuộc sống hàng ngày của bạn.
              </p>
            </div>
          </div>
        </div>
      </div>
      <CategorySectionContainer />
      {/* <h1 className="text-7xl font-extrabold">
        Hello I&apos;m
        <span className="bg-gradient-to-r from-orange-400 via-red-500 to-purple-600 bg-clip-text text-transparent">
          {" "}
          Kapehe!
        </span>
      </h1>
      <p className="mt-3 text-xl text-gray-600">Aloha everyone! Check out my projects!</p>
      <h2 className="mt-24 font-bold text-gray-700 text-3xl">My Projects</h2>

      <div className="mt-5 grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project) => (
          <Link
            href={`/projects/${project.slug}`}
            key={project._id}
            className="border-2 border-gray-500 rounded-lg p-1 hover:scale-105 hover:border-blue-500 transition"
          >
            {project.image && (
              <Image
                src={project.image}
                alt={project.title}
                width={750}
                height={300}
                className="object-cover rounded-lg border border-gray-500"
              />
            )}
            <div className="mt-2 font-extrabold bg-gradient-to-r from-orange-400 via-red-500 to-purple-600 bg-clip-text text-transparent">
              {project.title}
            </div>
          </Link>
        ))}
      </div> */}
    </div>
  );
}
