"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import { extractFirstParagraph } from "@/lib/extractFirstParagraph";
import Link from "next/link";

import { fetchBlogs } from "@/config/https/blogs";
import PaginationComponent from "./Pagination";
interface NewsCardProps {
  category: string;
  attributes: any;
  id: string;
}

const NewsCardComponent = ({ category, attributes, id }: NewsCardProps) => {
  const imageUrl = `${process.env.NEXT_PUBLIC_STRAPI_API_URL}${attributes?.img?.data?.attributes?.url}`;
  const description = extractFirstParagraph(attributes);
  const truncatedBlogDesc =
    description && description.length > 80
      ? description.substring(0, 120) + "..."
      : description;

  return (
    <div className="w-full md:w-[22%]">
      <div className="flex flex-col items-center justify-between w-full h-full md:h-[40rem] mb-[3rem] md:mb-0 bg-white ">
        <Link
          href={`/${category.toLowerCase()}/${id}`}
          className="cursor-pointer transition-all duration-300 hover:brightness-75">
          <div className="w-full h-[15rem] overflow-hidden mb-4">
            <Image
              src={imageUrl}
              alt="image"
              objectFit="cover"
              width={300}
              height={300}
              className="w-full h-full object-cover rounded-lg "
            />
          </div>

          <div className="px-4">
            <div>
              <h1 className="text-2xl font-bold text-start text-black my-2 hover:underline">
                {attributes?.Title}
              </h1>
              <div className="flex w-full justify-start">
                <p className="text-xs">
                  {new Date(attributes?.publishedAt).toLocaleString()}
                </p>
              </div>
            </div>

            <div>
              <p className="text-lg text-start text-black mt-4">
                {truncatedBlogDesc}
              </p>
            </div>
          </div>
        </Link>
      </div>
    </div>
  );
};

// Pagination logic
type Blog = {
  attributes: {
    categories: {
      data: {
        attributes: {
          Title: string;
        };
      }[];
    };

    createdAt: string;
  };
};

const calculatePagination = (
  data: Blog[],

  category: string,

  limit: number,

  currentPage: number
): { filteredData: Blog[]; dataLength: number; totalPages: number } => {
  const filtered = data

    ?.filter((blog: Blog) => {
      return blog?.attributes?.categories?.data?.some(
        (item: any) => item?.attributes?.Title === category
      );
    })

    .sort((a: Blog, b: Blog) => {
      return (
        // @ts-ignore
        new Date(b.attributes.createdAt) - new Date(a.attributes.createdAt)
      );
    });

  const offset = (currentPage - 1) * limit;

  const filteredData = filtered && filtered.slice(offset, offset + limit);

  const dataLength = filtered ? filtered.length : 0;

  const totalPages = Math.ceil(dataLength / limit);

  return { filteredData, dataLength, totalPages };
};

export default function NewsCard({
  category,
  pagination,
  limit = 100,
  offset = 0,
}: {
  category?: string;
  pagination?: boolean;
  limit?: number;
  offset?: number;
}) {
  // Fetching data from strapi
  const [data, setData] = useState<any[] | null>(null);
  useEffect(() => {
    fetchBlogs("?&populate=*")
      .then((res) => {
        setData(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  // Pagination logic
  const [paginationState, setPaginationState] = useState({
    limit: limit,

    offset: offset,

    currentPage: 1,
  });

  const { filteredData, dataLength, totalPages } = calculatePagination(
    data || [],

    category || "",

    paginationState.limit,

    paginationState.currentPage
  );

  const handlePageChange = (page: number) => {
    setPaginationState((prevState) => ({
      ...prevState,

      currentPage: page,

      offset: (page - 1) * paginationState.limit,
    }));
  };
  return (
    <>
      <div className="flex flex-wrap gap-6 w-full justify-center">
        {filteredData?.map((news: any, index: number) => (
          <NewsCardComponent key={index} category={category} {...news} />
        ))}
        {pagination && (
          <>
            <PaginationComponent
              currentPage={paginationState.currentPage}
              totalPages={totalPages}
              onPageChange={handlePageChange}
            />
          </>
        )}
      </div>
    </>
  );
}
