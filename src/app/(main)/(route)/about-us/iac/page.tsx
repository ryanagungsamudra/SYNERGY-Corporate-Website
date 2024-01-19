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
      title: "ASSOCIATE DIRECTOR",
      name: "Alvin Cheo",
      degree: "CWMP™, AFPCM, MFA",
      image: require("@/app/assets/page/about/alvin-cheo-square-8a262e575a218eff493ee01b0d995be55858f627.jpg"),
    },
    {
      title: "DIRECTOR, FINANCIAL ADVISORY",
      name: "Danny Lee",
      degree: "CFP®, IBFA, MFA",
      image: require("@/app/assets/page/about/danny-lee-square-ebcda40a870c09e8e9c8c62e3286db0e36b3ae0d (1).jpg"),
    },
    {
      title: "SENIOR RELATIONSHIP MANAGER",
      name: "Adeline Low",
      degree: "MFA",
      image: require("@/app/assets/page/about/adeline-low-square-d70b441412131ae6a5c716376d7c7ff1c803e84d.jpg"),
    },
    {
      title: "DEPUTY DIRECTOR",
      name: "Andy Seo",
      degree: "ChFC®, MFA, AEPP®",
      image: require("@/app/assets/page/about/andy-seo-square-9937a245cbb843d8db7aefa9cdb09b3f4b512ae8.jpg"),
    },
    {
      title: "DEPUTY DIRECTOR",
      name: "Harris Mak",
      degree: "CWMP™, MFA, AEPP®",
      image: require("@/app/assets/page/about/harris-mak-square-1cdb0ff882f761ede1f7675c5dd30cad4a8af00c.jpg"),
    },
    {
      title: "DIRECTOR",
      name: "Roy Lee",
      degree: "",
      image: require("@/app/assets/page/about/roy-lee-a147b7faa3049b6e7b00acc95efe5d678b3fc6cb.jpg"),
    },
    {
      title: "SENIOR RELATIONSHIP MANAGER",
      name: "Chim Keng Hoong",
      degree: "CA",
      image: require("@/app/assets/page/about/keng-hoong-square-43eb3ede6d9f078628aa102c29d1db3e7cdbef63.jpg"),
    },
  ];
  return (
    <div>
      <div className="relative w-full h-full mt-[-1.3rem]">
        <div className="relative bg-gradient-to-r from-[#7297CA] to-[#97C6CD]">
          <Image
            src={require("@/app/assets/page/about/boardroom.jpg")}
            alt="Careers"
            className="w-full h-[200px] object-cover object-top"
          />
          <div className="absolute inset-0 flex flex-wrap items-center justify-center text-white text-center py-8">
            <h1 className="text-3xl font-medium z-20">
              INVESTMENT ADVISORY COMMITTEE
            </h1>
          </div>
          <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
            <div className="h-[9.4rem]"></div>
          </div>
        </div>

        <div className="mx-[2rem] md:mx-[12rem] mt-6">
          <p>
            SYNERGY’s Investment Advisory Committee (“IAC”) consists of
            full-time investment and financial planning practitioners who
            dedicate their time and effort in developing the company’s
            investment philosophy. The committee meets regularly to provide
            their views pertaining to market conditions and various investment
            products.
            <br />
            <br />
            The committee conducts research based on numerous academic materials
            to formulate investment framework and methodology, which assists
            SYNERGY to achieve strategic objectives in terms of the investment
            business segment.
            <br />
            <br />
            Notably, the committee’s initiatives, such as our proprietary
            Synergy Total Asset Recommendation (“STAR”) system and Synergy Model
            Portfolios (“SMP”), has elevated the level of professionalism of our
            advisers in terms of investment and financial planning.
          </p>
        </div>

        <h1 className="text-4xl text-center mt-12">COMMITTEE MEMBERS</h1>
        <div className="flex flex-wrap gap-6 w-full justify-center mt-10">
          {people.map((person, index) => (
            <div key={index} className="w-[230px]">
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
