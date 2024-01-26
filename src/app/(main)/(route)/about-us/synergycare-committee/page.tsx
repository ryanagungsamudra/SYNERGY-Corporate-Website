"use client";

import React, { useContext, useEffect } from "react";
import { usePathname } from "next/navigation";
import { SynergyContext } from "@/context";
import Image, { ImageProps } from "next/image";

// Images
import clouds from "@/app/assets/clouds.jpg";

interface PersonCardProps {
  name: string;
  title: string;
  degree: string;
  image: ImageProps["src"];
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
      title: "SENIOR RELATIONSHIP MANAGER",
      name: "Joleen Peh",
      degree: "",
      image: require("@/app/assets/page/about/joleen-square-95e770f545b53e9bdfdfc4bc43e78287c64fd915.jpg"),
    },
    {
      title: "SENIOR RELATIONSHIP MANAGER",
      name: "Siah Zhen Quan",
      degree: "CFP®, IBFA, MFA",
      image: require("@/app/assets/page/about/zhen-quan-square-d215530241607f199201fe520f6ce60b8ca6b0b1.jpg"),
    },
    {
      title: "ASSOCIATE DIRECTOR",
      name: "Vivian Peh",
      degree: "AFPCM",
      image: require("@/app/assets/page/about/vivian-square-0a6f6051abae257987c94f2d4b99bf0fc3ddb448.jpg"),
    },
    {
      title: "ASSOCIATE DIRECTOR",
      name: "Ronnie Choy",
      degree: "AFPCM",
      image: require("@/app/assets/page/about/ronnie-choy-square-580cce09a01b4cd84ecb63df39f7b0ea33d22688.jpg"),
    },
    {
      title: "RELATIONSHIP MANAGER",
      name: "Eugene Kuan",
      degree: "ARIA, AWPCM, MFA",
      image: require("@/app/assets/page/about/eugene-kuan-square-e00fefee34d83ac139fce16080388af9f37fd26d.jpg"),
    },
    {
      title: "ASSOCIATE DIRECTOR",
      name: "Marvin Lai",
      degree: "AEPP®, AWPCM, Cert.ASFB",
      image: require("@/app/assets/page/about/marvin-lai-fe64da41476a3b078e15c7c696dd08ca596adf43.jpg"),
    },
    {
      title: "SENIOR RELATIONSHIP MANAGER",
      name: "Nika Pineda",
      degree: "",
      image: require("@/app/assets/page/about/nika-pineda-square-b5a671d1433c4633fb5b6bf0971a6523594890db.jpg"),
    },
    {
      title: "DEPUTY DIRECTOR",
      name: "Gidman Wee",
      degree: "",
      image: require("@/app/assets/page/about/gidman-wee-square-3ae39397d2f6ee738a5a013060ff932fd46eb8a4.jpg"),
    },
    {
      title: "SYNERGYCARE TEAM MEMBER",
      name: "Kan Ling Siong",
      degree: "",
      image: require("@/app/assets/page/about/kan-ling-siong-square-dba76217068b07f3eab0e7748e9baa84c01aa68a.jpg"),
    },
  ];
  return (
    <div>
      <div className="relative w-full h-full mt-[-1.3rem]">
        <div className="relative bg-gradient-to-r from-[#7297CA] to-[#97C6CD]">
          <Image
            src={clouds}
            alt="Careers"
            className="w-full h-[180px] object-cover object-top"
          />
          <div className="absolute inset-0 flex flex-wrap items-center justify-center text-white text-center py-8">
            <h1 className="text-3xl font-medium z-20">SYNERGYCARE COMMITTEE</h1>
          </div>
          <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
            <div className="h-[9.4rem]"></div>
          </div>
        </div>

        <div className="mx-[2rem] md:mx-[12rem] mt-6">
          <p>
            SynergyCare is a committee made up of volunteers from the sales
            representatives with the tagline - Advisers with a Heart. Not only
            do we participate in Corporate Social Responsibility Activities to
            raise fund for Charities, we also organize activities for our fellow
            Synergizers, as we believe “Kindness should start from Synergy Home”
          </p>
          <div className="text-center mt-8">
            <p>Some of the activities organized are:</p>

            <p className="mt-4">Blood Donation Drives since 2013</p>
            <p>
              Charity Walks/Runs such as SingTel’s Race Against Cancer
              2012/2013/2014
            </p>
            <p>Singapore Heart Foundation’s Pledge Your Heart 2016</p>
            <p>Metta Welfare Association’s Metta Charity Run 2018</p>
            <p>Synergy Dinner and Dance 2016</p>
            <p>Synergy CPR/AED Courses 2018</p>
            <p>Synergy LPA/Will Writing 2018</p>
            <p>Synergy Admin Appreciation Day 2018</p>
            <p>Race Against Cancer 2019</p>
            <p>Plan For Hope 2020</p>
            <p>Recycling Shoes, Daughters of Tomorrow 2021</p>
            <p>Thong Teck Home for Senior Citizens 2022</p>
            <p>Synergy CPR/AED Course 2022</p>
          </div>
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
