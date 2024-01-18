"use client";

import Image from "next/image";
import React from "react";

export default function Slide2() {
  return (
    <div className="h-[682px]">
      <div className="hidden md:block max-w-full max-h-full mx-auto">
        <Image
          alt="slide2"
          src={require("@/app/assets/landing/sfa-skillsfuture.jpg")}
          width={400}
          height={400}
          className="w-full h-full mt-[-1.5rem]"
        />
      </div>
      <div className="w-[400px] h-[60px] md:w-full md:h-[80px] absolute bottom-[23rem] md:bottom-5 left-1/2 transform -translate-x-1/2 hidden md:flex items-center justify-center">
        <div>
          <h1 className="text-center mt-4 text-sm md:text-3xl text-white">
            <span className="text-gradient-blue-white font-bold">Synergy</span>{" "}
            Receives{" "}
            <span className="text-gradient-blue-white font-bold">
              SkillsFuture Employer Award
            </span>{" "}
            on 10 December 2021
          </h1>
        </div>
      </div>

      {/* Mobile */}
      <div className="flex md:hidden w-full h-full items-center justify-center bg-gradient-three-colors">
        <div className="w-full">
          <Image
            alt="slide2"
            src={require("@/app/assets/landing/sfa-skillsfuture.jpg")}
            width={400}
            height={400}
            className="w-full h-full mt-[-1.5rem]"
          />
          <div className="w-full h-[60px] absolute bottom-[14rem] md:bottom-5 left-1/2 transform -translate-x-1/2 flex items-center justify-center">
            <div>
              <h1 className="text-center mt-4 text-sm md:text-2xl text-white">
                <span className="text-gradient-blue-white font-bold">
                  Synergy
                </span>{" "}
                Receives{" "}
                <span className="text-gradient-blue-white font-bold">
                  SkillsFuture Employer Award
                </span>{" "}
                on 10 December 2021
              </h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
