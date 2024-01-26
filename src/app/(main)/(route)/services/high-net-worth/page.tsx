"use client";

import React, { useContext, useEffect } from "react";
import { usePathname } from "next/navigation";
import { SynergyContext } from "@/context";
import Image from "next/image";
import { Card } from "@/components/ui/card";

// Images
import timepiece from "@/app/assets/page/services/timepiece.jpg";
import clock from "@/app/assets/page/services/clock.jpg";

export default function Page() {
  const path = usePathname();
  const menuName = path.split("/")[2];
  const { changeMenu } = useContext(SynergyContext);

  useEffect(() => {
    changeMenu(menuName);
  }, []);
  return (
    <div>
      <div className="relative w-full h-full mt-[-1.3rem]">
        <div className="relative bg-gradient-to-r from-[#7297CA] to-[#97C6CD]">
          <Image
            src={timepiece}
            alt="Careers"
            className="w-full h-[160px] object-cover object-top"
          />
          <div className="absolute inset-0 flex items-center justify-center text-white text-center">
            <h1 className="text-3xl font-medium z-20">HIGH NET WORTH</h1>
          </div>
          <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
            <div className="h-[9.4rem]"></div>
          </div>
        </div>
      </div>

      <div className="mx-[2rem] md:mx-[12rem]">
        <div className="flex flex-wrap md:flex-nowrap gap-4 mt-6 h-full items-center">
          <div className="w-full md:w-[50%]">
            <Image
              src={clock}
              alt="Insurance"
              className="w-full h-full object-cover object-top rounded-xl"
            />
          </div>
          <Card className="w-full md:w-[65%] p-[0.718rem] shadow-lg">
            <p>
              Singapore is a key financial hub for the region, well known for
              its stable political structure, strong financial infrastructure
              and pro-investment tax framework. At Synergy, we understand the
              needs of accredited investors – be it high net worth individuals
              or families, and have developed an exclusive platform of
              sophisticated products to enhance your wealth potential. This
              enables sound financial health management, and the freedom to lead
              lifestyles simply the way you deem fit.
              <br />
              <br />
              Accredited investors will come under the care of Synergy
              Solitaire, where these highly-valued clients are serviced by
              carefully chosen and trained advisers in Synergy. We have also
              designed an annual client program where such investors are invited
              to privileged events such as new product launches and appreciation
              nights, celebrating your growth and successes, each step of the
              way.
            </p>
          </Card>
        </div>
      </div>
    </div>
  );
}
