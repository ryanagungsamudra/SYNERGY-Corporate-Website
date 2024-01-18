import { fetchBlog } from "@/config/https/blogs";
import { formatDescription } from "@/lib/formatDescription";
import Image from "next/image";
import React from "react";

import { FaBackward } from "react-icons/fa";

export default async function page({ params }: any) {
  const blog = await fetchBlog(params.articlesId);
  const newsData = blog?.data?.attributes;

  const imageUrl = `${process.env.NEXT_PUBLIC_STRAPI_API_URL}${newsData?.img?.data?.attributes?.url}`;
  const description = formatDescription(newsData?.Description);

  return (
    <div className="px-[14rem] py-[2rem]">
      <div className="flex flex-wrap w-full justify-start">
        <div className="w-full">
          <h1 className="text-3xl font-semibold text-[#1D1D1D]">
            {newsData?.Title}
          </h1>
          <p className="mt-1">
            {new Date(newsData?.updatedAt).toLocaleString()}
          </p>
        </div>

        <div className="w-full mt-4">
          <div className="flex justify-center w-full h-full bg-gradient-to-r from-white to-gray-300 rounded-2xl">
            <Image
              src={imageUrl}
              alt="image"
              width={300}
              height={300}
              className="w-full h-[800px] rounded-lg object-contain "
            />
          </div>
        </div>

        <div className="w-full mt-8">
          <p className="text-lg text-[#1D1D1D]">{description}</p>
        </div>

        <div className="w-full mt-[6rem]">
          <a href="/articles" className="flex items-center">
            <FaBackward className="mr-2" />
            <span className="text-base">Back to articles</span>
          </a>
        </div>
      </div>
    </div>
  );
}
