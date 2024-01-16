"use client";

import Image from "next/image";
import React from "react";

export default function Slide1() {
  return (
    <div className="relative h-[682px] flex items-start justify-center">
      {/* Background Image */}
      <div className="relative w-full h-[682px]">
        <Image
          alt="background"
          src={require("@/app/assets/landing/background1.jpg")}
        />
      </div>

      {/* Overlay Images */}
      <div className="absolute top-[2rem] md:top-[4rem] md:flex gap-[8rem]">
        <div className="relative w-full h-full">
          <div className="bg-white w-[290px] mb-6 md:mb-0 md:w-[550px] md:h-[550px] rounded-md">
            <Image
              alt="overlay"
              src={require("@/app/assets/landing/2023-lfs.jpg")}
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
              src={require("@/app/assets/landing/2023-journey.png")}
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
