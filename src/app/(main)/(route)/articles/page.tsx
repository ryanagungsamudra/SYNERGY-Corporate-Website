"use client";

import NewsCard from "@/components/ui/custom/card/NewsCard";
import { SynergyContext } from "@/context";
import Image from "next/image";
import { usePathname } from "next/navigation";
import React, { useContext, useEffect } from "react";

// Images
import bgNews from "@/app/assets/bg-news.jpg";

export default function Page() {
  const path = usePathname();
  const menuName = path.split("/")[1];
  const { changeMenu } = useContext(SynergyContext);

  useEffect(() => {
    changeMenu(menuName);
  }, []);

  return (
    <>
      <div className="mt-[-1.5rem] relative">
        <Image
          src={bgNews}
          alt="image"
          width={300}
          height={300}
          className="w-full h-[150px] object-cover"
        />
        <div className="absolute inset-0 flex items-center justify-center md:justify-center">
          <h1 className="text-4xl font-bold text-white underline underline-offset-4">
            Articles
          </h1>
        </div>
      </div>

      <div className="p-[2rem] px-[4rem]">
        <NewsCard category="Articles" pagination={true} limit={2} offset={0} />
      </div>
    </>
  );
}
