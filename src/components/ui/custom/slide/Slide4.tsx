"use client";

import Image from "next/image";
import React from "react";
import { Card, CardContent } from "../../card";
import { Button } from "../../button";

// Images
import skyline from "@/app/assets/landing/skyline.jpg";
import dataTrustmark from "@/app/assets/landing/data-trustmark.png";
import sqcStar from "@/app/assets/landing/sqc_star.png";
import iso9001 from "@/app/assets/landing/iso_9001.png";
import iso27001 from "@/app/assets/landing/iso_27001.png";

export default function Slide4() {
  return (
    <div className="h-[682px]">
      <div className="relative max-w-full h-[100vh] mx-auto">
        <Image
          alt="slide2"
          src={skyline}
          width={400}
          height={400}
          className="w-full h-full mt-[-1.5rem]"
        />
        <div className="absolute inset-0 bg-black bg-opacity-40"></div>
      </div>

      <div className="p-8 pl-[3rem] md:pl-[6rem]">
        <div className="absolute top-[11rem]">
          <h1 className="text-white font-medium text-2xl md:text-4xl text-start">
            Finding the{" "}
            <span className="text-4xl md:text-6xl">Right Solutions</span> <br />
            for your <span className="text-4xl md:text-6xl">Right Needs</span>
          </h1>
        </div>

        <div className="flex gap-6 absolute bottom-[14.5rem] md:bottom-[17rem]">
          <Button className="bg-[#06367E] hover:bg-white hover:text-black w-[200px] md:w-[300px]">
            Discover Synergy
          </Button>
          <Button className="bg-white text-black hover:bg-[#06367E] hover:text-white w-[200px] md:w-[300px]">
            Get A Quote
          </Button>
        </div>

        <Card className="bg-white w-[430px] h-[120px] md:w-[700px] md:h-[150px] absolute bottom-[5.5rem] md:bottom-[6rem]">
          <CardContent className="flex w-full h-full justify-around items-center">
            <div className="w-[30%]">
              <Image alt="logo" src={dataTrustmark} />
            </div>
            <div className="w-[30%]">
              <Image alt="logo" src={sqcStar} />
            </div>
            <div className="w-[80px] h-[80px]">
              <Image alt="logo" src={iso9001} />
            </div>
            <div className="w-[80px] h-[80px]">
              <Image alt="logo" src={iso27001} />
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
