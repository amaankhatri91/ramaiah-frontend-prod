import Image from "next/image";
import React from "react";

export const Blogs = () => {
  const blogsData = [
    {
      id: 1,
      title: "Life After Valve Replacement",
      subtitle: "Challenges & Progress Towards Recovery",
      description:
        "Save when you shop the Best Buy Outlet for clearance, open-box, refurbished and pre-owned Save data.",
      BlogBgImage: "/assets/blogs-img.png",
      date: "01 Dec, 2023",
      author: "Meditest",
    },
    {
      id: 2,
      title: "Life After Valve Replacement",
      subtitle: "Challenges & Progress Towards Recovery",
      description:
        "Save when you shop the Best Buy Outlet for clearance, open-box, refurbished and pre-owned Save data.",
      BlogBgImage: "/assets/blogs-img.png",
      date: "01 Dec, 2023",
      author: "Meditest",
    },
  ];
  return (
    <div className="container mt-[100px]">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
        {blogsData.map((blog) => (
          <div key={blog.id} className="rounded-[32px] p-[12px]">
            {/* Image background section */}
            <div
              style={{
                backgroundImage: `url(${blog.BlogBgImage})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                height: 220,
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                color: "#fff",
                position: "relative",
                padding: 30,
                borderRadius: 24,
              }}
            >
              <div
                style={{ position: "relative", zIndex: 2 }}
                className="w-[180px]"
              >
                <h2 className="text-[24px] font-semibold text-[#FFFFFF]">
                  {blog.title}
                </h2>
                <hr className="border-b border-[#fff] my-2" />
                <div className="text-[16px] text-[#FFFFFF] font-medium">
                  {blog.subtitle}
                </div>
              </div>
            </div>
            {/* Content bottom section */}
            <div className="p-[12px] mt-[15px]">
              <div className="flex justify-between items-center">
                <div className="flex items-center gap-2">
                  <Image
                    src="/assets/celender.svg"
                    alt="calendar"
                    width={20}
                    height={20}
                  />
                  {blog.date}
                </div>
                <div>
                  By <span className="Text-color2">{blog.author}</span>
                </div>
              </div>
              <div className="text-[20px] font-semibold text-[#3D3D3D] mt-[12px]">
                {blog.title} : {blog.subtitle}
              </div>
              <div className="text-[16px] text-[#212121] font-medium mt-2">
                {blog.description}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
