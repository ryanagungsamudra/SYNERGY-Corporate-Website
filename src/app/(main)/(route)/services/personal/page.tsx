"use client";

import React, { useContext, useEffect } from "react";
import { usePathname } from "next/navigation";
import { SynergyContext } from "@/context";
import Image from "next/image";
import { Card } from "@/components/ui/card";

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
            src={require("@/app/assets/page/services/workdesk.jpg")}
            alt="Careers"
            className="w-full h-[160px] object-cover object-top"
          />
          <div className="absolute inset-0 flex items-center justify-center text-white text-center">
            <h1 className="text-3xl font-medium z-20">PERSONAL SOLUTIONS</h1>
          </div>
          <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
            <div className="h-[9.4rem]"></div>
          </div>
        </div>
      </div>

      <div className="mx-[2rem] md:mx-[12rem]">
        <div className="flex flex-wrap md:flex-nowrap gap-4 mt-6 h-full items-center">
          <div className="w-full md:w-[35%]">
            <Image
              src={require("@/app/assets/page/services/techgraph.jpg")}
              alt="Insurance"
              className="w-full h-full object-cover object-top rounded-xl"
            />
          </div>
          <Card className="w-full md:w-[65%] p-[0.718rem] shadow-lg">
            <p>
              We can help you navigate a complex array of products and advise
              you on which ones would suit your lifestyle and risk profile best.
              Our professional advisers are able to keep complex ideas simple
              and understandable, to help you choose the right set of products
              best suited for you. <br />
              <br />
              Our methods involve understanding you first, then your multiple
              needs. <br />
              <br />
              Research is conducted in-house by a product advisory team, to
              enable us to better identify great performing products that we
              recommend on to you. We know you need strong professional advisers
              who can offer highly personalized services – and we can do just
              that.
            </p>
          </Card>
        </div>

        <div className="flex flex-wrap md:flex-nowrap gap-4">
          <div className="w-full md:w-1/3 p-4 mt-4">
            <h1 className="text-2xl font-bold mb-4">
              Life Insurance Solutions
            </h1>
            <p>
              If you are no longer around, who will provide for your loved ones?
              You need adequate financial protection for your family. A good
              life insurance plan can go a long way in alleviating the financial
              burden for your loved ones who survive you.
            </p>
          </div>
          <div className="w-full md:w-1/3 p-4 mt-4">
            <h1 className="text-2xl font-bold mb-4">
              Health & Disability Solutions
            </h1>
            <p>
              Have you felt your lifestyle could affect your health in the long
              term? We all need to understand health and disability insurance,
              since health is not always a given, even to those who exercise and
              eat right. Our advisers can help you understand what you need to
              know under current policies and laws.
            </p>
          </div>
          <div className="w-full md:w-1/3 p-4 mt-4">
            <h1 className="text-2xl font-bold mb-4">Investment Solutions</h1>
            <p>
              Is your money working as hard as it should be? Investing smartly
              allows you to earn additional income streams depending upon your
              risk appetite for investment. We work with retail investors to
              accredited investors, using the right platforms and tools to
              support your wealth accumulation needs.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
