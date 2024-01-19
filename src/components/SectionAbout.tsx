"use client";

import React, { useRef } from "react";
import Reveal from "./utils/Reveal";

// Framer Motion
import { motion, useTransform, useScroll } from "framer-motion";

// Icons
import { FaPeopleGroup } from "react-icons/fa6";
import { FaRegHandshake } from "react-icons/fa";
import { GiProgression } from "react-icons/gi";
import { FaEye } from "react-icons/fa6";
import { GoGoal } from "react-icons/go";
import { FaStar } from "react-icons/fa";

interface HorizontalScrollCarouselProps {
  children: JSX.Element;
}

const HorizontalScrollCarousel = ({
  children,
}: HorizontalScrollCarouselProps) => {
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
  });

  const x = useTransform(scrollYProgress, [0, 1], ["1%", "-49%"]);

  return (
    <section
      ref={targetRef}
      className="relative h-[300vh] bg-white hidden md:block">
      <div className="sticky top-0 flex h-screen items-center overflow-hidden">
        <motion.div style={{ x }} className="flex gap-4">
          {children}
        </motion.div>
      </div>
    </section>
  );
};

interface CardProps {
  icon: JSX.Element;
  title: string;
  description: string | JSX.Element;
}

const CustomCard = ({ icon, title, description }: CardProps) => {
  return (
    <div className="group relative h-[450px] w-[450px] overflow-hidden bg-white p-6 m-2 rounded-xl">
      <div className="flex flex-col items-center md:items-start md:mr-19 mt-8 md:mt-0">
        <div className="flex w-full justify-center">
          <div className="flex items-center justify-center w-[7rem] h-[7rem] rounded-full bg-[#06367E]">
            {icon}
          </div>
        </div>
        <div className="flex w-full justify-center">
          <h1 className="text-xl md:text-2xl font-semibold mt-4 text-[#0C3557]">
            {title}
          </h1>
        </div>
        <p className="text-lg md:text-base mt-4 text-center md:text-left">
          {description}
        </p>
      </div>
    </div>
  );
};

const CustomCardMobile = ({ icon, title, description }: CardProps) => {
  return (
    <div className="flex flex-col items-center md:items-start md:mr-16 mt-8 md:mt-0">
      <div className="flex items-center justify-center w-16 h-16 rounded-full bg-[#06367E]">
        {icon}
      </div>
      <h1 className="text-xl md:text-2xl mt-4 text-[#0C3557]">{title}</h1>
      <p className="text-lg md:text-xl mt-4 text-left">{description}</p>
    </div>
  );
};

export default function SectionAbout() {
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
      <div className="flex flex-wrap md:flex-nowrap md:mx-[5rem] md:gap-[1.5rem]">
        <div className="p-[2rem] px-[2rem] md:p-[3rem] md:px-[3rem] md:my-[6rem]">
          <Reveal>
            <h1 className="text-center text-3xl md:text-5xl text-[#0C3557]">
              WHAT DOES{" "}
              <span className="text-[#06367E] font-bold">SYNERGY</span> DO?
            </h1>
          </Reveal>
          <Reveal>
            <div className="mt-4">
              <p className="text-lg md:text-base">
                Synergy is a financial advisory firm known to be proactive,
                progressive and reliable. We strive to be the new standard in
                financial guidance, creating significant value for our clients.
                Challenge the status quo with us.
              </p>
            </div>
          </Reveal>
          <Reveal>
            <div className="mt-4">
              <p className="text-lg md:text-base">
                We care for the people who care for you. Our pursuit of
                technological updates, training roadmaps, support platforms and
                initiatives are thoughtfully designed to develop our people’s
                competency. It empowers and motivates them to grow and develop,
                thereby customizing unique solutions towards financial success
                for you, exceeding expectations every time.
              </p>
            </div>
          </Reveal>
          <Reveal>
            <div className="mt-4">
              <p className="text-lg md:text-base">
                At Synergy, we grow collectively as one. Unity and trust
                provides greater growth and excellence. The strong internal bond
                between management, advisers and support staff in Synergy
                testifies to that. We “never have a dull moment”. Be inspired by
                our passion, experience the Synergy way.
              </p>
            </div>
          </Reveal>
        </div>

        <div className="p-[2rem] px-[2rem] md:p-[3rem] md:px-[3rem] md:my-[6rem]">
          <Reveal>
            <h1 className="text-center text-3xl md:text-5xl text-[#0C3557]">
              WHAT MAKES{" "}
              <span className="text-[#06367E] font-bold">SYNERGY</span>{" "}
              DIFFERENT?
            </h1>
          </Reveal>
          <Reveal>
            <div className="mt-4">
              <p className="text-lg md:text-base">
                We are a passionate group of intelligent and forward-looking
                financial advisers with an eye on the markets and the future. We
                want to be known as a trusted financial advisory firm in the
                region that provides winning solutions for clients.
              </p>
            </div>
          </Reveal>
          <Reveal>
            <div className="mt-4">
              <p className="text-lg md:text-base">
                At Synergy, you will have the opportunity to offer your clients
                customized solutions crafted from our selected list of approved
                products from a number of major life insurance companies, as
                well as an extensive wealth of investment funds from our
                approved list of professional fund managers.
              </p>
            </div>
          </Reveal>
          <Reveal>
            <div className="mt-4">
              <p className="text-lg md:text-base">
                We diligently invest in our people, training and developing
                their competency, providing the best tools and platform, so that
                we can better serve our clients. Foundation Training to
                Skillsets Development, Business Specialization to Management
                Training, these are all the examples of training modules that
                Synergy is committed to developing our people, and to growing
                collectively as one team.
              </p>
            </div>
          </Reveal>
        </div>
      </div>

      <HorizontalScrollCarousel>
        <div className="flex flex-col md:flex-row justify-center items-center px-[4rem] ">
          {cards.map((card) => (
            <CustomCard key={card.id} {...card} />
          ))}
        </div>
      </HorizontalScrollCarousel>

      {/* Mobile */}
      <div className="flex md:hidden flex-row flex-wrap justify-center items-center mt-16 px-[3rem] my-[3rem]">
        {cards.map((card) => (
          <CustomCardMobile key={card.id} {...card} />
        ))}
      </div>
    </div>
  );
}
