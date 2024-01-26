"use client";

import Image from "next/image";
import React from "react";

// Images
import background1 from "@/app/assets/landing/background1.jpg";
import overlay1 from "@/app/assets/landing/2023-lfs.jpg";
import overlay2 from "@/app/assets/landing/2023-journey.png";

export default function Slide1() {
  return (
    <div className="relative h-[682px] flex items-start justify-center">
      {/* Background Image */}
      <div className="relative w-full h-[682px]">
        <Image alt="background" src={background1} />
      </div>

      {/* Overlay Images */}
      <div className="absolute top-[2rem] md:top-[4rem] md:flex gap-[8rem]">
        <div className="relative w-full h-full">
          <div className="bg-white w-[290px] mb-6 md:mb-0 md:w-[550px] md:h-[550px] rounded-md">
            <Image
              alt="overlay"
              src={overlay1}
              width={400}
              height={400}
              className="rounded-md"
            />
          </div>
        </div>
        <div className="relative w-full h-full">
          <div className="bg-white w-[290px] md:w-[550px] md:h-[550px] rounded-md">
            <Image
              alt="overlay"
              src={overlay2}
              width={400}
              height={400}
              className="rounded-md"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
