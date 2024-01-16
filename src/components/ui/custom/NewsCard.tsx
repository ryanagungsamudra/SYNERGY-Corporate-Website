import React from "react";
import Image from "next/image";
import { extractFirstParagraph } from "@/lib/extractFirstParagraph";
import { fetchBlogs } from "@/config/https/blogs";
import Link from "next/link";

interface NewsCardProps {
  attributes: any;
  id: string;
}

const NewsCardComponent = ({ attributes, id }: NewsCardProps) => {
  const imageUrl = `${process.env.NEXT_PUBLIC_STRAPI_API_URL}${attributes?.img?.data?.attributes?.url}`;
  const description = extractFirstParagraph(attributes);
  const truncatedBlogDesc =
    description && description.length > 80
      ? description.substring(0, 120) + "..."
      : description;

  return (
    <div className="w-full md:w-[20%]">
      <div className="flex flex-col items-center justify-between w-full h-full md:h-[40rem] mb-[3rem] md:mb-0 bg-white ">
        <Link href={`/news/${id}`} className="cursor-pointer">
          <div className="w-full h-[15rem] overflow-hidden mb-4">
            <Image
              src={imageUrl}
              alt="image"
              objectFit="cover"
              width={300}
              height={300}
              className="w-full h-full object-cover rounded-lg"
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

export default async function NewsCard({ category }: { category?: string }) {
  const blogs = await fetchBlogs();

  const filteredBlog = blogs?.data?.filter((blog: any) => {
    return blog?.attributes?.categories?.data?.some(
      (item: any) => item?.attributes?.Title === category
    );
  });

  return (
    <div className="flex flex-wrap gap-6 w-full justify-center">
      {filteredBlog?.map((news: any, index: number) => (
        <NewsCardComponent key={index} {...news} />
      ))}
    </div>
  );
}
