"use client";

import React, { useContext, useEffect } from "react";
import { usePathname } from "next/navigation";
import { SynergyContext } from "@/context";
import Image from "next/image";
import { Card } from "@/components/ui/card";

// Images
import discussion from "@/app/assets/page/services/discussion.jpg";
import bulb from "@/app/assets/page/services/bulb.jpg";

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
            src={discussion}
            alt="Careers"
            className="w-full h-[160px] object-cover object-top"
          />
          <div className="absolute inset-0 flex items-center justify-center text-white text-center">
            <h1 className="text-3xl font-medium z-20">CORPORATE SOLUTIONS</h1>
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
              src={bulb}
              alt="Insurance"
              className="w-full h-full object-cover object-top rounded-xl"
            />
          </div>
          <Card className="w-full md:w-[65%] p-[0.718rem] shadow-lg">
            <p>
              We provide the necessary coverage and welfare to keep the business
              operations running and your people covered.
              <br />
              <br />
              We also provide advice on coverage of a business throughout every
              stage of its development.
            </p>
            <h1 className="text-2xl font-bold mt-4">Group Insurance</h1>
            <p>
              Group Insurance is a popular choice for companies planning to look
              after the primary welfare of its employees. <br />
              <br />
              Depending on the size of the company, group insurance can come in
              ready “off-the-shelf” package or customized to the needs of the
              company. We also provide a one-stop voluntary employee benefit
              program to enhance the well-being of the employees.
            </p>
          </Card>
        </div>

        <div className="flex flex-wrap md:flex-nowrap gap-4">
          <div className="w-full md:w-1/3 p-4 mt-4">
            <h1 className="text-2xl font-bold mb-4">
              Business Keyman Protection
            </h1>
            <p>
              You may wish to protect the key executives or professionals
              responsible for the bottom line of your business. <br />
              <br />
              In the event of a sudden demise, disability or critical illness,
              you will have access to an emergency fund to keep the business
              operations running while you find your replacement.
            </p>
          </div>
          <div className="w-full md:w-1/3 p-4 mt-4">
            <h1 className="text-2xl font-bold mb-4">Golden Handcuff</h1>
            <p>
              We can help you retain your key assets by leveraging on insurance
              tools to accumulate a sizeable pension fund, while at the same
              time provide additional coverage on your key employees or their
              family members.
            </p>
          </div>
          <div className="w-full md:w-1/3 p-4 mt-4">
            <h1 className="text-2xl font-bold mb-4">
              Business Buy-Sell Funding
            </h1>
            <p>
              What will happen to your business if one of the major shareholders
              were to pass away suddenly? Will you be prepared to welcome the
              demised shareholder’s spouse as your new business partner? <br />
              <br />
              Will it be better if you can buy over his/her shares and keep the
              business running as per normal? Where will you get the funds to
              buy over the shares? We can help you prepare for such situations
              in a cost-effective manner.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
