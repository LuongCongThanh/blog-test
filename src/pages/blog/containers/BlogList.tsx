import React, { useEffect, useState } from "react";
import APIService from "../../../shared/services/api.service";

const BlogList = () => {
  const retrieveTutorials = () => {
    APIService.getAllBlogsList()
      .then((response) => {
        console.log(response.data);
      })
      .catch((e) => {
        console.log(e);
      });
  };
  useEffect(() => {
    retrieveTutorials();
  }, []);

  return (
    <div className="bg-white py-6 sm:py-8 lg:py-12">
      <div className="mx-auto max-w-screen-xl px-4 md:px-8">
        <div className="mb-10 md:mb-16">
          <h2 className="mb-4 text-center text-2xl font-bold text-gray-800 md:mb-6 lg:text-3xl">Blog</h2>
          <p className="mx-auto max-w-screen-md text-center text-gray-500 md:text-lg">
            Đừng bao giờ từ bỏ. Hôm nay khó khăn, ngày mai sẽ trở nên tồi tệ. Nhưng ngày mốt sẽ có nắng
          </p>
        </div>
        <div className="flex flex-wrap">
          <div className="my-4 flex flex-col items-center overflow-hidden rounded-lg border md:flex-row">
            <div className="group relative block h-48 w-full shrink-0 self-start overflow-hidden bg-gray-100 md:h-full md:w-32 lg:w-48">
              <img
                src="https://images.unsplash.com/photo-1665412019489-1928d5afa5cc?ixlib=rb-1.2.1&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=crop&amp;w=765&amp;q=80"
                loading="lazy"
                alt="Mọi công việc thành đạt đều nhờ sự kiên trì và lòng say mê."
                className="absolute inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110"
              />
            </div>
            <div className="flex flex-col gap-2 p-4 lg:p-6">
              <span className="text-sm text-gray-400">2022-10-13T11:32</span>
              <h2 className="text-xl font-bold text-gray-800">
                Mọi công việc thành đạt đều nhờ sự kiên trì và lòng say mê.
              </h2>
              <p className="text-gray-500">
                Nghịch cảnh là một phần của cuộc sống. Nó không thể bị kiểm soát. Cái có thể kiểm soát chính là cách
                chúng ta phản ứng trước nghịch cảnh.
              </p>
              <div>
                <div className="inline-flex rounded-md shadow-sm" role="group">
                  <button
                    type="button"
                    className="rounded-l-lg border border-gray-200 bg-white py-2 px-4 text-sm font-medium text-gray-900 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:text-blue-700 focus:ring-2 focus:ring-blue-700"
                  >
                    Edit
                  </button>
                  <button
                    type="button"
                    className="rounded-r-lg border-t border-b border-r border-gray-200 bg-white py-2 px-4 text-sm font-medium text-gray-900 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:text-blue-700 focus:ring-2 focus:ring-blue-700"
                  >
                    Delete
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="my-4 flex flex-col items-center overflow-hidden rounded-lg border md:flex-row">
            <div className="group relative block h-48 w-full shrink-0 self-start overflow-hidden bg-gray-100 md:h-full md:w-32 lg:w-48">
              <img
                src="https://images.unsplash.com/photo-1656333422687-6830f720c38f?ixlib=rb-1.2.1&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=crop&amp;w=764&amp;q=80"
                loading="lazy"
                alt="Muốn thành công thì khao khát thành công phải lớn hơn nỗi sợ bị thất bại."
                className="absolute inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110"
              />
            </div>
            <div className="flex flex-col gap-2 p-4 lg:p-6">
              <span className="text-sm text-gray-400">2022-10-14T11:33</span>
              <h2 className="text-xl font-bold text-gray-800">
                Muốn thành công thì khao khát thành công phải lớn hơn nỗi sợ bị thất bại.
              </h2>
              <p className="text-gray-500">
                Bạn chớ nên bỏ cuộc khi bạn vẫn còn điều gì đó để cho đi. Không có gì là hoàn toàn bế tắc, sự việc chỉ
                thật sự trở nên bế tắc khi bạn thôi không cố gắng nữa.
              </p>
              <div>
                <div className="inline-flex rounded-md shadow-sm" role="group">
                  <button
                    type="button"
                    className="rounded-l-lg border border-gray-200 bg-white py-2 px-4 text-sm font-medium text-gray-900 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:text-blue-700 focus:ring-2 focus:ring-blue-700"
                  >
                    Edit
                  </button>
                  <button
                    type="button"
                    className="rounded-r-lg border-t border-b border-r border-gray-200 bg-white py-2 px-4 text-sm font-medium text-gray-900 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:text-blue-700 focus:ring-2 focus:ring-blue-700"
                  >
                    Delete
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="my-4 flex w-full flex-col items-center overflow-hidden rounded-lg border md:flex-row">
            <div className="group relative block h-48 w-full shrink-0 self-start overflow-hidden bg-gray-100 md:h-full md:w-32 lg:w-48">
              <img
                src="https://images.unsplash.com/photo-1656105544318-1cca8c4d9878?ixlib=rb-1.2.1&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=crop&amp;w=687&amp;q=80"
                loading="lazy"
                alt="Mất niềm tin vào bản thân, cũng như bạn đánh mất thành công đang đợi mình"
                className="absolute inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110"
              />
            </div>
            <div className="flex flex-col gap-2 p-4 lg:p-6">
              <span className="text-sm text-gray-400">2022-10-15T11:33</span>
              <h2 className="text-xl font-bold text-gray-800">
                Mất niềm tin vào bản thân, cũng như bạn đánh mất thành công đang đợi mình
              </h2>
              <p className="text-gray-500">
                Ai cũng nói tương lai chúng ta luôn rộng mở, nhưng nếu không nắm bắt được hiện tại thì tương lai sẽ
                chẳng có gì.
              </p>
              <div>
                <div className="inline-flex rounded-md shadow-sm" role="group">
                  <button
                    type="button"
                    className="rounded-l-lg border border-gray-200 bg-white py-2 px-4 text-sm font-medium text-gray-900 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:text-blue-700 focus:ring-2 focus:ring-blue-700"
                  >
                    Edit
                  </button>
                  <button
                    type="button"
                    className="rounded-r-lg border-t border-b border-r border-gray-200 bg-white py-2 px-4 text-sm font-medium text-gray-900 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:text-blue-700 focus:ring-2 focus:ring-blue-700"
                  >
                    Delete
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="flex w-full flex-col items-center overflow-hidden rounded-lg border md:flex-row">
            <div className="group relative block h-48 w-full shrink-0 self-start overflow-hidden bg-gray-100 md:h-full md:w-32 lg:w-48">
              <img
                src="https://images.unsplash.com/photo-1648184217069-34f0a57791bc?ixlib=rb-1.2.1&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=crop&amp;w=1471&amp;q=80"
                loading="lazy"
                alt="Nơi nào có ý chí, nơi đó có con đường."
                className="absolute inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110"
              />
            </div>
            <div className="flex flex-col gap-2 p-4 lg:p-6">
              <span className="text-sm text-gray-400">2022-10-16T11:35</span>
              <h2 className="text-xl font-bold text-gray-800">Nơi nào có ý chí, nơi đó có con đường.</h2>
              <p className="text-gray-500">
                Tôi có thể chấp nhận thất bại, mọi người đều thất bại ở một việc gì đó. Nhưng tôi không chấp nhận việc
                không cố gắng.
              </p>
              <div>
                <div className="inline-flex rounded-md shadow-sm" role="group">
                  <button
                    type="button"
                    className="rounded-l-lg border border-gray-200 bg-white py-2 px-4 text-sm font-medium text-gray-900 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:text-blue-700 focus:ring-2 focus:ring-blue-700"
                  >
                    Edit
                  </button>
                  <button
                    type="button"
                    className="rounded-r-lg border-t border-b border-r border-gray-200 bg-white py-2 px-4 text-sm font-medium text-gray-900 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:text-blue-700 focus:ring-2 focus:ring-blue-700"
                  >
                    Delete
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogList;
