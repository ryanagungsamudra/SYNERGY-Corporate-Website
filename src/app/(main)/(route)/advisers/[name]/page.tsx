"use client";

import { Card } from "@/components/ui/card";
import NewsCard from "@/components/ui/custom/card/NewsCard";
import { fetchAdvisers } from "@/config/https/testimonial";
import Image from "next/image";
import { usePathname } from "next/navigation";
import React, { useEffect, useState } from "react";

export default function Page({ params }: any) {
  console.log(params.name);

  interface adviser {
    name: string;
    job: string;
    img: {
      data: {
        attributes: {
          url: string;
        };
      };
    };
    clients: {
      data: [];
    };
  }

  const [dataAdviser, setDataAdviser] = useState<adviser | null>(null);
  const [imageUrl, setImageUrl] = useState<string | null>(null);

  useEffect(() => {
    fetchAdvisers(`/${params.name}?populate=*`)
      .then((res) => {
        setDataAdviser(res.data.attributes);
        setImageUrl(res.data?.attributes?.img?.data?.attributes?.url || null);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const name = dataAdviser?.name;
  const job = dataAdviser?.job;
  const client = dataAdviser?.clients?.data;

  interface ClientProps {
    attributes: {
      name: string;
      job: string;
      description: string;
    };
  }

  return (
    <>
      <div className="mt-[-1.5rem] relative">
        <Image
          src={require("@/app/assets/page/services/discussion.jpg")}
          alt="image"
          width={300}
          height={300}
          className="w-full h-[150px] object-cover"
        />
        <div className="absolute inset-0 flex flex-wrap items-center justify-center text-white text-center py-8">
          <h1 className="text-3xl font-medium z-20">Testimonial</h1>
          <p className="text-[#DDDDDD] z-20 w-full text-xs md:text-base px-[2rem] md:px-[12rem]">
            for {name}
          </p>
        </div>
        <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center"></div>
      </div>

      <div className="p-[2rem] px-[4rem]">
        {imageUrl && (
          <div className="flex w-full flex-wrap justify-center ">
            <Image
              src={`${process.env.NEXT_PUBLIC_STRAPI_API_URL}${imageUrl}`}
              alt="image"
              width={300}
              height={300}
            />
          </div>
        )}
        <div className="text-center text-3xl mt-4">
          <h1>{name}</h1>
        </div>
        <div className="text-center text-lg">
          <h1>{job}</h1>
        </div>
      </div>

      <div className="flex flex-wrap w-full justify-center gap-4">
        {client?.map((item: ClientProps, index: number) => (
          <Card key={index} className="p-4 rounded-xl w-3/4 md:w-[30%]">
            <div className="w-full h-[250px] rounded-2xl mb-6">
              <Image
                alt="image"
                width={300}
                height={300}
                className="w-full h-full rounded-2xl object-cover"
                src={require("@/app/assets/avatar-photo.jpg")}
              />
            </div>
            <h1 className="text-center text-2xl font-medium">
              {item.attributes.name}
            </h1>
            <h1 className="text-center">{item.attributes.job}</h1>
            <p className="italic mt-8">
              &quot;{item.attributes.description}&quot;
            </p>
          </Card>
        ))}
      </div>
    </>
  );
}
