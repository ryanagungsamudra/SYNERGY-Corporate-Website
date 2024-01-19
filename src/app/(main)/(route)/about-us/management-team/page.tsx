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

  const people1 = [
    {
      title: "CHIEF EXECUTIVE OFFICER",
      name: "Adrian Peh",
      degree: "ChFC®, CLU®, CMFA, CIAM",
      image: require("@/app/assets/page/about/adrian-peh-square.jpg"),
    },
    {
      title: "EXECUTIVE DIRECTOR",
      name: "Jeff Lee",
      degree: "CFP®, IBFF",
      image: require("@/app/assets/page/about/jeff-lee-square.jpg"),
    },
    {
      title: "CHIEF DIGITAL OFFICER",
      name: "Kelvin Yeo",
      degree: "ChFC®",
      image: require("@/app/assets/page/about/kelvin-yeo-square.jpg"),
    },
    {
      title: "CHIEF OPERATING OFFICER",
      name: "Evon Lim",
      degree: "",
      image: require("@/app/assets/page/about/evon-lim-square.jpg"),
    },
    {
      title: "CHIEF WEALTH MANAGEMENT OFFICER",
      name: "Warwick Young",
      degree: "",
      image: require("@/app/assets/page/about/warwick-square.jpg"),
    },
    {
      title: "HEAD OF BUSINESS DEVELOPMENT",
      name: "Arthur Koo",
      degree: "",
      image: require("@/app/assets/page/about/arthur-koo-square.jpg"),
    },
    {
      title: "CHIEF INVESTMENT OFFICER",
      name: "Shreemati Varadarajan",
      degree: "",
      image: require("@/app/assets/page/about/shreemati-varadarajan.jpg"),
    },
    {
      title: "HEAD OF ADVISORY & TRAINING",
      name: "Jim Koh",
      degree: "CFP®, AFC®, IBFA",
      image: require("@/app/assets/page/about/jim-koh-square.jpg"),
    },
  ];
  const people2 = [
    {
      title: "ACCENDO BRANCH",
      name: "Andrew Lee",
      degree: "CWMP™",
      image: require("@/app/assets/page/about/andrew-lee-square-8a05d9fc5bb7e72ab1a0e3168b6a53b51e5a414f.jpg"),
    },
    {
      title: "ACES BRANCH",
      name: "Yvonne Seow",
      degree: "ChFC®, CWMP™, IBFA",
      image: require("@/app/assets/page/about/yvonne-seow-square-27097166c6db0b20025a40044406badeca02f9d8.jpg"),
    },
    {
      title: "FIRST BRANCH",
      name: "Edmund Wee",
      degree: "CFP®, CWMP™, IBFQ",
      image: require("@/app/assets/page/about/edmund-wee-square-3ecef6f533c096277736eb38666491f0980b563c.jpg"),
    },
    {
      title: "HIGHLIFE BRANCH",
      name: "Neo Ley Lee",
      degree: "",
      image: require("@/app/assets/page/about/neo-ley-lee-square-20d74ae79108b119c2c19877cb8a117eb348b334.jpg"),
    },
    {
      title: "SPIRE BRANCH",
      name: "David Tang",
      degree: "CFP®, CWMP™, IBFA, ASEP®",
      image: require("@/app/assets/page/about/david-tang-square-c816dc2baf17076570361c403d2172f490a663b9.jpg"),
    },
    {
      title: "SYNTHESIS BRANCH",
      name: "Eugene Low",
      degree: "",
      image: require("@/app/assets/page/about/eugene-low-square-d2f91018ab2a82c36f3a196fa460485e7764e093.jpg"),
    },
    {
      title: "TITAN BRANCH",
      name: "Tan Tiong Eng",
      degree: "CMFA, CIAM, IBFA, AEPP®, CWM",
      image: require("@/app/assets/page/about/tan-tiong-eng-square-e1415926924697908724975f731c6357dfa7bcf0.jpg"),
    },
    {
      title: "Danny Lee",
      name: "Eugene Low",
      degree: "CFP®, IBFA, MFA",
      image: require("@/app/assets/page/about/danny-lee-square-ebcda40a870c09e8e9c8c62e3286db0e36b3ae0d.jpg"),
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
            <h1 className="text-3xl font-medium z-20">MANAGEMENT TEAM</h1>
            <p className="text-[#DDDDDD] z-20 w-full text-xs md:text-base px-[2rem] md:px-[12rem]">
              Synergy Financial Advisers are led by an experienced team of
              practitioners and industry experts. With a singular vision in
              mind, the management team strives to work together to
              progressively develop their people and processes professionally,
              to help clients achieve financial freedom. The successes of
              Synergy within a decade is a testament to their commitment and
              capabilities.
            </p>
          </div>
          <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
            <div className="h-[9.4rem]"></div>
          </div>
        </div>
      </div>

      <h1 className="text-4xl text-center mt-6">Management Committee</h1>
      <div className="flex flex-wrap gap-6 w-full justify-center mt-10">
        {people1.map((person, index) => (
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

      <h1 className="text-4xl text-center mt-6">
        Directors, Financial Advisory
      </h1>
      <div className="flex flex-wrap gap-6 w-full justify-center mt-10">
        {people2.map((person, index) => (
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
  );
}
