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

interface CardProps {
  icon: JSX.Element;
  title: string;
  description: string | JSX.Element;
}
const CustomCard = ({ icon, title, description }: CardProps) => {
  return (
    <div className="shadow-lg p-4 rounded-xl flex flex-wrap w-full h-full mx-12 md:mx-0 md:w-[32%] justify-center items-start md:items-start ">
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
          We welcome and support people of all backgrounds and identities. We
          are against bullying, harassment and discrimination in any form –
          verbal, physical or visual.
          <br />
          <br />
          We are committed to maintain a healthy and safe workplace and to
          establish trusted relationships.
        </>
      ),
    },
    {
      id: 2,
      icon: <FaRegHandshake className="text-white text-6xl" />,
      title: "PROFESSIONALISM",
      description: (
        <>
          We conduct business with honesty, integrity and fairness and strive to
          serve people in a timely and competent manner. We exercise reasonable
          care to provide suitable advice while making full and adequate
          disclosure of all facts. We protect the confidentiality of our
          clients. We use SYNERGY’s resources, whether tangible or intangible,
          in a responsible and appropriate manner for work purposes. We comply
          with applicable laws and will not be involved in any criminal acts
          such as bribery, corruption, fraud and money laundering.
          <br />
          <br />
          We uphold the highest standards of conduct and behavior in and outside
          SYNERGY to safeguard SYNERGY’s reputation and interests.
        </>
      ),
    },
    {
      id: 3,
      icon: <GiProgression className="text-white text-6xl" />,
      title: "PROGRESS",
      description: (
        <>
          We strive to maintain and improve professional knowledge, skills and
          competence to better serve our clients. We continually seek to raise
          the standards of excellence. We are proud to contribute at our best to
          enable growth and progress of SYNERGY and ourselves.
        </>
      ),
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
            <h1 className="text-3xl font-medium z-20">OUR COMMITMENT</h1>
          </div>
          <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
            <div className="h-[9.4rem]"></div>
          </div>
        </div>
      </div>

      <div className="text-center my-[4rem] mx-[2rem] md:mx-[12rem]">
        <h1 className="text-2xl underline font-medium pb-2">
          Code of Professional Conduct
        </h1>
        <p>
          This Code of Conduct is to put our core values into practice. It is
          the standard we set for the way business should be conducted and the
          responsibilities of everyone in Synergy Financial Advisers (SYNERGY).
          This is our commitment to the people whom we care.
        </p>
      </div>

      <div>
        <div className="flex flex-wrap gap-4 mt-8 w-full justify-center">
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

      <div className="mx-[2rem] md:mx-[12rem]">
        <p className="italic text-sm mt-12 text-center">
          We work to live the vision of SYNERGY; to be the most admired
          Financial Advisory Firm in Asia. And to fulfil the mission of SYNERGY;
          working together to achieve financial freedom by harnessing technology
          and innovation.
        </p>

        <div>
          <h1 className="text-2xl text-center mt-[4rem]">
            Our Quality Policy (Fair Dealing Commitment)
          </h1>
          <p className="text-base my-2 mt-4">
            We are committed to dealing fairly with our clients and providing
            sound and quality financial advice and services.
          </p>
          <ul className="list-disc list-inside text-base pl-4">
            <li className="mb-1">
              Our Directors and Senior Management are committed to advocating a
              fair dealing culture within Synergy;
            </li>
            <li className="mb-1">Singapore Citizens / PR applicants only.</li>
            <li className="mb-1">
              The products and service recommended by Synergy are selected,
              reviewed and endorsed by Synergy to be suitable for your
              particular needs, financial objectives and situation;
            </li>
            <li className="mb-1">
              Our professional client advisers undergo continual training to be
              competent in providing sound advice and quality recommendations to
              you;
            </li>
            <li className="mb-1">
              Clear, relevant and timely information and updates are presented
              for you to make informed financial decisions;
            </li>
            <li className="mb-1">
              Every client will be assessed for knowledge of competency in the
              investment arena. Should the client require more assistance, we
              will provide the tools to help the client gain competency. In the
              interim, should the client wish to transact investment products,
              we will build in additional safeguards to ensure that the
              investments meet their needs; and
            </li>
            <li className="mb-1">
              We have a robust and independent process in listening to, and
              resolving, your concerns and feedback in a prompt manner.
            </li>
          </ul>
          <p>
            Having fair and professional practices is our focus. We welcome your
            feedback to service enhancements. Please click here to forward your
            feedback or call +65 6654 1888.
          </p>
        </div>

        <div>
          <h1 className="text-2xl text-center mt-[4rem]">
            Our Quality Policy (Fair Dealing Commitment)
          </h1>
          <p className="text-base my-2 mt-4">
            Our Personal Data Protection Policy set out how we will collect,
            use, disclose and retain your personal data with Synergy Financial
            Advisers Ltd. In line with the Personal Data Protection Act 2012, we
            want to ensure that our existing practices and policies are
            compliant in relation to the collection, use, disclosure, retention
            and security of your personal data. <br />
            <br />
            Synergy Financial Advisers Ltd views data protection seriously. When
            you apply for financial advisory services from us, update us of your
            new particulars or attend our events and seminars, we may need to
            collect your personal data. You may be required to complete a
            relevant application, update a consent form which contains the
            details of how we will process, collect, use and disclose your
            personal data. You should read this Policy carefully before
            providing any consent to us to process, collect, use, and disclose
            your personal data.
            <br />
            <br />
            We are committed to treat all personal data with due care and full
            confidentiality and in accordance with the relevant data protection
            laws of Singapore.
            <br />
            <br />
            To achieve this, we are continuously undertaking measures to comply
            with the Personal Data Protection Act 2012. The provision relating
            to the Do Not Call (DNC) Registry has come into force on 2 January
            2014 and the provision relating to personal data protection has come
            into force on 2 July 2014.
            <br />
            <br />
            If you have any queries as to this Personal Data Notice and Consent
            Policy or how Synergy processes, collects, uses and discloses your
            personal data, or to make any changes to your personal data or
            consent of use, please contact the Data Protection Officer through
            our contact form.
          </p>
        </div>
      </div>
    </div>
  );
}
