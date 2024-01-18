"use client";

import { fetchBlogs } from "@/config/https/blogs";
import { formatDescription } from "@/lib/formatDescription";
import Image from "next/image";
import React, { useEffect, useState } from "react";

import { FaBackward } from "react-icons/fa";

export default function Page({ params }: any) {
  const [data, setData] = useState<any | null>(null);
  const [imageUrl, setImageUrl] = useState<string | null>(null);

  useEffect(() => {
    window.scrollTo(0, 0);
    fetchBlogs(`/${params.newsId}?&populate=*`)
      .then((res) => {
        setData(res.data);
        setImageUrl(res.data?.attributes?.img?.data?.attributes?.url || null);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [params.newsId]);

  const newsData = data?.attributes;

  // Ensure that newsData is not null before accessing its properties
  const description = newsData
    ? formatDescription(newsData?.Description)
    : null;

  return (
    <div className="px-6 md:px-[14rem] py-[2rem]">
      <div className="flex flex-wrap w-full justify-start">
        <div className="w-full">
          <h1 className="text-3xl font-semibold text-[#1D1D1D]">
            {newsData?.Title}
          </h1>
          <p className="mt-1">
            {new Date(newsData?.updatedAt).toLocaleString()}
          </p>
        </div>

        {imageUrl && (
          <div className="w-full mt-4">
            <div className="flex justify-center w-full h-full bg-gradient-to-r from-white to-gray-300 rounded-2xl">
              <Image
                src={`${process.env.NEXT_PUBLIC_STRAPI_API_URL}${imageUrl}`}
                alt="image"
                width={300}
                height={300}
                className="w-full h-[800px] rounded-lg object-contain"
              />
            </div>
          </div>
        )}

        <div className="w-full mt-8">
          <p className="text-lg text-[#1D1D1D]">{description}</p>
        </div>

        <div className="w-full mt-[6rem]">
          <a href="/news" className="flex items-center">
            <FaBackward className="mr-2" />
            <span className="text-base">Back to news</span>
          </a>
        </div>
      </div>
    </div>
  );
}
