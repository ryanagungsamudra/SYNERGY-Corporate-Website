"use client";

import React, { useContext, useEffect } from "react";
import { usePathname } from "next/navigation";
import { SynergyContext } from "@/context";
import Image from "next/image";
import { Card } from "@/components/ui/card";

// Icons
import { FaPeopleGroup } from "react-icons/fa6";
import { FaRegHandshake } from "react-icons/fa";
import { GiProgression } from "react-icons/gi";
import { FaEye } from "react-icons/fa6";
import { GoGoal } from "react-icons/go";
import { FaStar } from "react-icons/fa";

interface CardProps {
  icon: JSX.Element;
  title: string;
  description: string | JSX.Element;
}
const CustomCard = ({ icon, title, description }: CardProps) => {
  return (
    <div className="shadow-lg p-4 rounded-xl flex flex-wrap w-full mx-12 md:mx-0 md:w-[32%] justify-center items-center md:items-start">
      <div className="flex items-center justify-center w-[7rem] h-[7rem] rounded-full bg-[#06367E]">
        {icon}
      </div>
      <h1 className="text-xl md:text-2xl mt-4 text-[#0C3557] text-center w-full">
        {title}
      </h1>
      <p className="text-base md:text-base mt-4 text-center">{description}</p>
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

  const cards = [
    {
      id: 1,
      icon: <FaPeopleGroup className="text-white text-6xl" />,
      title: "PEOPLE",
      description: (
        <>
          Our Client Advisers are our greatest asset. Our advisers work with us
          on a trusted partnership helping to enhance knowledge and practices,
          and client experiences.
          <br />
          <br />
          We recruit and retain the best in the field and make a commitment
          towards developing their potential even further, as an employer of
          choice.
        </>
      ),
    },
    {
      id: 2,
      icon: <FaRegHandshake className="text-white text-6xl" />,
      title: "PROFESSIONALISM",
      description: (
        <>
          Our advisers are professional in that they behave with integrity,
          trust, and competency providing personalized advice successfully.
          <br />
          <br />
          We keep our advisers on their toes, with high standards of performance
          expected of them.
        </>
      ),
    },
    {
      id: 3,
      icon: <GiProgression className="text-white text-6xl" />,
      title: "PROGRESS",
      description: (
        <>
          We have achieved progress and sustainable growth over the past years
          due to our engaged leaders, teams, and advisers.
          <br />
          <br />
          Progress and growth are the foundation of a future where the company
          is kept moving in a positive and productive direction. The more we
          grow, the better we serve our clients.
        </>
      ),
    },
    {
      id: 4,
      icon: <FaEye className="text-white text-6xl" />,
      title: "OUR VISION",
      description: "To be the most admired Financial Advisory firm in Asia",
    },
    {
      id: 5,
      icon: <GoGoal className="text-white text-6xl" />,
      title: "OUR MISSION",
      description:
        "Working together to achieve financial freedom by harnessing technology and innovation",
    },
    {
      id: 6,
      icon: <FaStar className="text-white text-6xl" />,
      title: "OUR VALUES",
      description: "People, Professionalism and Progress",
    },
  ];
  return (
    <div>
      <div className="relative w-full h-full mt-[-1.3rem]">
        <div className="relative bg-gradient-to-r from-[#7297CA] to-[#97C6CD]">
          <Image
            src={require("@/app/assets/page/services/discussion.jpg")}
            alt="Careers"
            className="w-full h-[160px] object-cover object-top"
          />
          <div className="absolute inset-0 flex items-center justify-center text-white text-center">
            <h1 className="text-3xl font-medium z-20">COMPANY PROFILE</h1>
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
              src={require("@/app/assets/page/services/bulb.jpg")}
              alt="Insurance"
              className="w-full h-full object-cover object-top rounded-xl"
            />
          </div>
          <Card className="w-full md:w-[65%] p-[0.718rem] shadow-lg">
            <h1 className="text-2xl font-bold mt-4">What does Synergy do?</h1>
            <p>
              Synergy is a financial advisory firm known to be proactive,
              progressive and reliable. We strive to be the new standard in
              financial guidance, creating significant value for our clients.
              Challenge the status quo with us. <br />
              <br />
              We care for the people who care for you. Our pursuit of
              technological updates, training roadmaps, support platforms and
              initiatives are thoughtfully designed to develop our people’s
              competency. It empowers and motivates them to grow and develop,
              thereby customizing unique solutions towards financial success for
              you, exceeding expectations every time.
              <br />
              <br />
              At Synergy, we grow collectively as one. Unity and trust provides
              greater growth and excellence. The strong internal bond between
              management, advisers and support staff in Synergy testifies to
              that. We “never have a dull moment”. Be inspired by our passion,
              experience the Synergy way.
            </p>
          </Card>
        </div>

        <div className="w-full mt-8">
          <div className="flex flex-wrap gap-4 w-full h-full justify-around items-center">
            <div className="w-[30%] md:w-[15%]">
              <Image
                alt="sponsorship"
                src={require("@/app/assets/sponsorship/sme500-2023.png")}
                layout="responsive"
                width={120}
                height={120}
                className="object-cover w-[30%]"
              />
            </div>
            <div className="w-[30%] md:w-[15%]">
              <Image
                alt="sponsorship"
                src={require("@/app/assets/sponsorship/skillsfuture.png")}
                layout="responsive"
                width={120}
                height={120}
                className="object-cover w-[30%]"
              />
            </div>
            <div className="w-[30%] md:w-[15%]">
              <Image
                alt="sponsorship"
                src={require("@/app/assets/sponsorship/data-trustmark.png")}
                layout="responsive"
                width={120}
                height={120}
                className="object-cover w-[30%]"
              />
            </div>
            <div className="w-[30%] md:w-[15%]">
              <Image
                alt="sponsorship"
                src={require("@/app/assets/sponsorship/sqc_star.png")}
                layout="responsive"
                width={120}
                height={120}
                className="object-cover w-[30%]"
              />
            </div>
            <div className="w-[30%] md:w-[15%]">
              <Image
                alt="sponsorship"
                src={require("@/app/assets/sponsorship/spba2021-logo.png")}
                layout="responsive"
                width={120}
                height={120}
                className="object-cover w-[30%]"
              />
            </div>
            <div className="w-[30%] md:w-[15%] flex gap-4 justify-center">
              <div className="w-[50%]">
                <Image
                  alt="sponsorship"
                  src={require("@/app/assets/sponsorship/iso_27001.png")}
                  layout="responsive"
                  width={120}
                  height={120}
                  className="object-cover w-[50%]"
                />
              </div>
              <div className="w-[50%]">
                <Image
                  alt="sponsorship"
                  src={require("@/app/assets/sponsorship/iso_9001.png")}
                  layout="responsive"
                  width={120}
                  height={120}
                  className="object-cover w-[50%]"
                />
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-wrap md:flex-nowrap gap-4 mt-4">
          <div className="w-full p-[0.718rem]">
            <h1 className="text-2xl font-bold mt-4">
              WHAT MAKES SYNERGY DIFFERENT?
            </h1>
            <p>
              Synergy is a financial advisory firm known to be proactive,
              progressive and reliable. We strive to be the new standard in
              financial guidance, creating significant value for our clients.
              Challenge the status quo with us. <br />
              <br />
              We care for the people who care for you. Our pursuit of
              technological updates, training roadmaps, support platforms and
              initiatives are thoughtfully designed to develop our people’s
              competency. It empowers and motivates them to grow and develop,
              thereby customizing unique solutions towards financial success for
              you, exceeding expectations every time.
              <br />
              <br />
              At Synergy, we grow collectively as one. Unity and trust provides
              greater growth and excellence. The strong internal bond between
              management, advisers and support staff in Synergy testifies to
              that. We “never have a dull moment”. Be inspired by our passion,
              experience the Synergy way.
            </p>
          </div>
        </div>

        <div className="my-[2rem]">
          <div className="flex flex-wrap gap-4 w-full justify-center">
            {cards.map((card) => (
              <CustomCard
                key={card.id}
                icon={card.icon}
                title={card.title}
                description={card.description}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
