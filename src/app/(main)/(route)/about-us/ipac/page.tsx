"use client";

import React, { useContext, useEffect } from "react";
import { usePathname } from "next/navigation";
import { SynergyContext } from "@/context";
import Image from "next/image";
import { Card } from "@/components/ui/card";

interface PersonCardProps {
  name: string;
  title: string;
  degree: string;
  image: string;
}
const PersonCard: React.FC<PersonCardProps> = ({
  title,
  name,
  degree,
  image,
}) => {
  return (
    <div className="flex flex-col w-full justify-center items-center gap-1">
      <Image
        src={image}
        alt={name}
        width={200}
        height={200}
        className="object-contain w-[200px] h-[200px] rounded-full"
      />

      <p className="text-base text-center">{title}</p>

      <p className="mt-1 text-lg font-bold text-center">{name}</p>

      <p className="text-base text-[#485056] text-center">{degree}</p>
    </div>
  );
};

export default function Page() {
  const path = usePathname();
  const menuName = path.split("/")[2];
  const { changeMenu } = useContext(SynergyContext);

  useEffect(() => {
    changeMenu(menuName);
  }, []);

  const people = [
    {
      title: "DEPUTY DIRECTOR",
      name: "Tynn Lim",
      degree: "ChFC®, CLU®, IBFA",
      image: require("@/app/assets/page/about/tynn-lim-square-56b98fcdf0faf2fd2dbadc4c8af1251a4c1245b3.jpg"),
    },
    {
      title: "ASSOCIATE DIRECTOR",
      name: "Joanna Tan",
      degree: "AEPP®, MFA, AWPCM",
      image: require("@/app/assets/page/about/joanna-tan-square-69a6876896ee3ffbafd730aad97bc3813aba60f3.jpg"),
    },
    {
      title: "ASSOCIATE DIRECTOR",
      name: "Tan Jun Qi",
      degree: "ChFC®, AEPP®, ARIA",
      image: require("@/app/assets/page/about/tan-jun-qi-c820fbadf224129f51dab2c6dad64cc504bf3c8c.jpg"),
    },
    {
      title: "DEPUTY DIRECTOR",
      name: "Linda Quah",
      degree: "ChFC®, CWMP™, AFC®, IBFA, AEPP®",
      image: require("@/app/assets/page/about/linda-quah-square-ddac75ddc1502d2a0e7bdbebd5c9ab85da02fe32.jpg"),
    },
    {
      title: "SENIOR RELATIONSHIP MANAGER",
      name: "Jason Zhu",
      degree: "MFA, CFP®, ARIA",
      image: require("@/app/assets/page/about/jason-zhu-b06620b2b6bbb13cc471245f0683c52b246d49e3.jpg"),
    },
    {
      title: "RELATIONSHIP MANAGER",
      name: "William Seah",
      degree: "CFP®, MFA",
      image: require("@/app/assets/page/about/william-seah-square-af50671199f0cc6078a4a35f264c20c6227c42e5.jpg"),
    },
  ];
  return (
    <div>
      <div className="relative w-full h-full mt-[-1.3rem]">
        <div className="relative bg-gradient-to-r from-[#7297CA] to-[#97C6CD]">
          <Image
            src={require("@/app/assets/taps.jpg")}
            alt="Careers"
            className="w-full h-[200px] object-cover object-top"
          />
          <div className="absolute inset-0 flex flex-wrap items-center justify-center text-white text-center py-8">
            <h1 className="text-3xl font-medium z-20">
              INSURANCE PRODUCT ADVISORY COMMITTEE
            </h1>
          </div>
          <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
            <div className="h-[9.4rem]"></div>
          </div>
        </div>

        <div className="mx-[2rem] md:mx-[12rem] mt-6">
          <p>
            SYNERGY’s Insurance Product Advisory Committee (“IPAC”) consists of
            full-time financial planning practitioners who dedicate their time
            and effort in developing the company’s insurance and financial
            planning methodology.
            <br />
            <br />
            Matching the right tailored solutions to each individual and
            organization’s needs is the committee’s forte. The committee meets
            regularly to review the latest market developments and insurance
            products as well as provide inputs pertaining to strategic product
            evaluation, analysis and research.
            <br />
            <br />
            The committee assists SYNERGY to achieve strategic objectives in
            terms of the insurance business segment by coming up with new
            initiatives and support for life insurance, general insurance as
            well as corporate solutions. Notably, our proprietary Synergy
            Product Evaluation Analysis & Research (“SPEAR”) which shows a
            comprehensive comparison and ranking (where applicable) of the plans
            in the respective life insurance product categories, has elevated
            the level of professionalism of our advisers in terms of insurance
            and financial planning.
          </p>
        </div>

        <h1 className="text-4xl text-center mt-12">COMMITTEE MEMBERS</h1>
        <div className="flex flex-wrap gap-6 w-full justify-center mt-10">
          {people.map((person, index) => (
            <div key={index} className="w-[220px]">
              <PersonCard
                name={person.name}
                title={person.title}
                degree={person.degree}
                image={person.image}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
