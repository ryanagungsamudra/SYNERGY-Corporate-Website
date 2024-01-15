import Image from "next/image";
import React from "react";
import { Card, CardContent } from "../ui/card";

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
      <Card className="bg-white w-[400px] h-[60px] md:w-[900px] md:h-[80px] absolute bottom-[23rem] md:bottom-5 left-1/2 transform -translate-x-1/2 hidden md:flex items-center justify-center">
        <CardContent>
          <h1 className="text-center mt-4 text-sm md:text-2xl">
            <span className="text-[#06367F]">Synergy</span> Receives{" "}
            <span className="text-[#06367F]">SkillsFuture Employer Award</span>{" "}
            on 10 December 2021
          </h1>
        </CardContent>
      </Card>

      {/* Mobile */}
      <div className="flex md:hidden w-full h-full items-center justify-center bg-slate-600">
        <div className="w-full">
          <Image
            alt="slide2"
            src={require("@/app/assets/landing/sfa-skillsfuture.jpg")}
            width={400}
            height={400}
            className="w-full h-full mt-[-1.5rem]"
          />
          <Card className="bg-white w-[400px] h-[60px] absolute bottom-[8rem] md:bottom-5 left-1/2 transform -translate-x-1/2 flex items-center justify-center">
            <CardContent>
              <h1 className="text-center mt-4 text-sm md:text-2xl">
                <span className="text-[#06367F]">Synergy</span> Receives{" "}
                <span className="text-[#06367F]">
                  SkillsFuture Employer Award
                </span>{" "}
                on 10 December 2021
              </h1>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
