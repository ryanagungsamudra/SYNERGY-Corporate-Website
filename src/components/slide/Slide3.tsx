"use client";

import Image from "next/image";
import React from "react";
import { Button } from "../ui/button";

export default function Slide3() {
  return (
    <div className="relative h-[682px] flex items-start justify-center">
      <div className="relative w-full h-[682px] hidden md:block">
        <Image
          alt="background"
          src={require("@/app/assets/landing/dptm-bg.png")}
        />
      </div>

      <div className="absolute top-[2rem] hidden md:flex gap-[6rem]">
        <div className="flex h-full items-center">
          <div className="relative w-full h-full">
            <div className="w-[250px] mb-6 md:mb-0 md:w-[330px] md:h-[330px] rounded-md">
              <Image
                alt="overlay"
                src={require("@/app/assets/landing/dptm-white.png")}
                className="rounded-md"
              />
            </div>
          </div>

          <div className="relative w-full h-full">
            <div className="bg-white w-[450px] h-[450px] md:w-[1050px] md:h-[600px] flex items-center md:pl-[2.5rem] rounded-lg">
              <div className="w-1/2">
                <div className="w-[400px] h-[400px] md:w-[520px] md:h-[520px] rounded-md">
                  <Image
                    alt="overlay"
                    src={require("@/app/assets/landing/dptm-square.png")}
                    width={400}
                    height={400}
                    className="rounded-lg"
                  />
                </div>
              </div>
              <div className="w-1/2 px-[4rem] hidden md:block">
                <div className="text-[2rem] font-semibold">
                  <p className="text-[#2D2D2D]">
                    <span className="text-[#06367E]">Synergy</span> has been
                    <br />
                    awarded the{" "}
                    <span className="text-[#06367E]">
                      Data <br />
                      Protection Trustmark
                      <br />
                    </span>{" "}
                    on 7 April 2021
                  </p>
                </div>

                <Button className="bg-[#06367F] hover:bg-white hover:text-black hover:border-2 w-full mt-8">
                  Find Out More
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile */}
      <div className="flex md:hidden w-full h-full items-center justify-center bg-[#FCFCE5]">
        <div className="w-full">
          <Image
            alt="overlay"
            src={require("@/app/assets/landing/dptm-square.png")}
            width={300}
            height={300}
            className="rounded-lg"
          />

          <Button className="bg-[#06367F] hover:bg-white hover:text-black hover:border-2 w-full mt-8">
            Find Out More
          </Button>
        </div>
      </div>
    </div>
  );
}
