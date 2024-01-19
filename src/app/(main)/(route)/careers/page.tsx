"use client";

import React, { useContext, useEffect } from "react";
import { usePathname } from "next/navigation";
import { SynergyContext } from "@/context";

import { FaPeopleGroup } from "react-icons/fa6";
import { FaPuzzlePiece } from "react-icons/fa6";
import { FaHandshake } from "react-icons/fa";
import { FaLaptop } from "react-icons/fa";
import { PiBagFill } from "react-icons/pi";
import { FaTrophy } from "react-icons/fa6";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import Image from "next/image";

export default function Page() {
  const path = usePathname();
  const menuName = path.split("/")[1];
  const { changeMenu } = useContext(SynergyContext);

  useEffect(() => {
    changeMenu(menuName);
  }, []);
  return (
    <>
      <div className="relative w-full h-[20vh] mt-[-1.3rem]">
        <Image
          src={require("@/app/assets/vision.jpg")}
          alt="Careers"
          className="w-full h-full object-cover object-top"
        />
        <div className="absolute inset-0 flex items-center justify-center text-white text-center">
          <h1 className="text-3xl font-bold z-20">CAREERS WITH SYNERGY</h1>
        </div>
        <div className="absolute inset-0 bg-black bg-opacity-50 h-[9.4rem]"></div>
      </div>

      <div className="mx-[2rem] md:mx-[12rem]">
        <h1 className="text-3xl font-medium my-6">JOB OPPORTUNITIES</h1>

        <Accordion type="multiple" className="w-full">
          <AccordionItem value="item-1">
            <AccordionTrigger className="border px-4 bg-[#fff]">
              Synergy Intern
            </AccordionTrigger>
            <AccordionContent className=" px-4 pt-4">
              <h5 className="font-bold text-base">
                Fast Track your Career with Synergy Internship 4+2 Weeks
                Programme Today!
              </h5>
              <p className="mt-4 text-base">
                Synergy opens your door to new opportunities. <br />
                Unsure what kind of career you’ll embark on after your
                graduation?
                <br />
                <br />
                Fast track your career with us at Synergy as a Synergy Intern
                today!
              </p>
              <h5 className="font-bold my-4 text-base">About Synergy</h5>
              <p className="text-base">
                Synergy is a financial advisory firm known to be proactive,
                progressive, and reliable. We strive to be the new standard in
                financial guidance, creating significant value for our clients.
                Challenge the status quo with us. We care for the people who
                care for you. Our pursuit of technological updates, training
                roadmaps, support platforms, and initiatives are thoughtfully
                designed to develop our people’s competency. It empowers and
                motivates them to grow and develop, thereby customizing unique
                solutions towards financial success for you, exceeding
                expectations every time.
                <br />
                <br />
                At Synergy, we grow collectively as one. Unity and trust provide
                greater growth and excellence. The strong internal bond between
                management, advisers, and support staff in Synergy testifies to
                that. We “never have a dull moment”. Be inspired by our passion,
                experience the Synergy way.
              </p>
              <h5 className="font-bold my-4 text-base">
                What is it like being a Synergy Intern?
              </h5>
              <p className="text-base">
                As a Synergy Intern, you will learn from your mentors how they
                provide comprehensive, one-stop financial advisory services to
                their customers through the active marketing of our full range
                of wealth management products that include insurance, loans,
                investment products & estate planning services. With an emphasis
                on a consultative approach to meeting customers needs, you will
                learn from your mentors how to proactively build and manage
                long-term customer relationship. In addition, you will learn the
                skills to perform regular monitoring of the recommended
                solutions to your clients and arrange for regular financial
                reviews with them at various life stages of their life. <br />
                <br />
                To help you succeed in your role, you will participate in the
                4+2 weeks structured training program during your internship
                with us. Upon completion, only suitable candidates will be
                offered a Financial Adviser contract with us. <br />
                <br />
                As a successful Financial Adviser, you will have the option to
                fast forward your career by either pursuing our Management
                Route, on the path of becoming a Branch Manager one day; or the
                Specialist Route, growing into a Relationship Manager /
                Associate Director working with premier private clients. Plus,
                as a top performer, you will be invited to incentive trips,
                visiting great locations across the world from Paris, Iceland to
                New Zealand, and many more.
              </p>

              <h5 className="font-bold my-4 text-base">
                Who are we looking for?
              </h5>
              <ul className="list-disc list-inside text-base">
                <li className="mb-1">
                  At least 21 years old and above (based on MAS requirements).
                </li>
                <li className="mb-1">
                  Singapore Citizens / PR applicants only.
                </li>
                <li className="mb-1">
                  Undergraduate who’s currently pursuing a Degree program,
                  preferably in Business, Banking & Finance, or Engineering.
                </li>
                <li className="mb-1">
                  Passionate in Investment/Financial Planning.
                </li>
                <li className="mb-1">
                  Self-starter, hungry for growth who’s willing to learn.
                </li>
              </ul>

              <h5 className="font-bold my-4 text-base">How to apply?</h5>
              <p className="my-2 text-base">
                Submit your internship application below!
              </p>
              <p className="italic text-sm underline mb-1">Disclaimer</p>
              <p className="text-xs">
                The above job description does not cover the comprehensive list
                of activities, duties, or responsibilities that are required of
                a Synergy Intern. Duties, responsibilities, and activities may
                change or new ones may be assigned at any time according to the
                needs of the firm or the supervisor.
              </p>
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-2">
            <AccordionTrigger className="border px-4 bg-[#fff]">
              Financial Adviser
            </AccordionTrigger>
            <AccordionContent className=" px-4 pt-4">
              <h5 className="font-bold text-base">Financial Adviser</h5>
              <p className="mt-4 text-base">
                Synergy opens door to new opportunities.
                <br />
                <br />
                Start your career with us at Synergy as a Financial Adviser
                today!
              </p>
              <h5 className="font-bold my-4 text-base">About Synergy</h5>
              <p className="text-base">
                Synergy is a financial advisory firm known to be proactive,
                progressive, and reliable. We strive to be the new standard in
                financial guidance, creating significant value for our clients.
                Challenge the status quo with us. We care for the people who
                care for you. Our pursuit of technological updates, training
                roadmaps, support platforms, and initiatives are thoughtfully
                designed to develop our people’s competency. It empowers and
                motivates them to grow and develop, thereby customizing unique
                solutions towards financial success for you, exceeding
                expectations every time.
                <br />
                <br />
                At Synergy, we grow collectively as one. Unity and trust provide
                greater growth and excellence. The strong internal bond between
                management, advisers, and support staff in Synergy testifies to
                that. We “never have a dull moment”. Be inspired by our passion,
                experience the Synergy way.
              </p>
              <h5 className="font-bold my-4 text-base">
                What is it like being a Financial Adviser?
              </h5>
              <p className="text-base">
                As a Financial Adviser, you will provide comprehensive, one-stop
                financial advisory services to customers through the active
                promotion and cross-selling of our full range of wealth
                management products that include insurance, loans, unit trusts,
                and other investment products. With an emphasis on consultative
                selling to meet customers needs, you will also proactively build
                and manage long-term customer relationship and provide good
                after-sales service to them. <br />
                <br />
                To help you succeed in your role, you will join our structured
                training program during the first 3 months of your career with
                us. Thereafter, you will have training days every year to help
                you further develop your professional career and keep your
                skills sharp and up-to-date with the latest developments in the
                industry. <br />
                <br />
                As a successful Financial Adviser, you will have the option to
                fast forward your career by either pursuing our Management
                Route, on the path of becoming a Branch Manager one day; or the
                Specialist Route, growing into a Relationship Manager /
                Associate Director working with premier private clients. Plus,
                as a top performer, you will be invited to incentive trips,
                visiting great locations across the world from Paris, Iceland to
                New Zealand, and many more.
              </p>

              <h5 className="font-bold my-4 text-base">
                Who are we looking for?
              </h5>
              <ul className="list-disc list-inside text-base">
                <li className="mb-1">
                  At least 21 years old and above (based on MAS requirements).
                </li>
                <li className="mb-1">
                  Singapore Citizens / PR applicants only.
                </li>
                <li className="mb-1">
                  A Diploma/Degree, preferably in Business, Banking & Finance,
                  or Engineering
                </li>
                <li className="mb-1">
                  Passionate in Investment/Financial Planning.
                </li>
                <li className="mb-1">
                  Fresh graduates & candidates with less than 2 years of
                  relevant financial advisory experience are welcome.
                </li>
                <li className="mb-1">
                  Candidates with more than 2 years of relevant financial
                  advisory experience and proven track records may be considered
                  for more senior positions.
                </li>
                <li className="mb-1">
                  Self-starter, hungry for growth who’s willing to learn and
                  unlearn.
                </li>
              </ul>

              <h5 className="font-bold my-4 text-base">How to apply?</h5>
              <p className="my-2 text-base">
                Submit your internship application below!
              </p>
              <p className="italic text-sm underline mb-1">Disclaimer</p>
              <p className="text-xs">
                The above job description does not cover the comprehensive list
                of activities, duties, or responsibilities that are required of
                a Synergy Intern. Duties, responsibilities, and activities may
                change or new ones may be assigned at any time according to the
                needs of the firm or the supervisor.
              </p>
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-3">
            <AccordionTrigger className="border px-4 bg-[#fff]">
              Branch Manager
            </AccordionTrigger>
            <AccordionContent className=" px-4 pt-4">
              <h5 className="font-bold text-base">Branch Manager</h5>
              <p className="mt-4 text-base">
                Synergy opens door to new opportunities.
                <br />
                <br />
                Start your career with us at Synergy as a Branch Manager today!
              </p>
              <h5 className="font-bold my-4 text-base">About Synergy</h5>
              <p className="text-base">
                Synergy is a financial advisory firm known to be proactive,
                progressive, and reliable. We strive to be the new standard in
                financial guidance, creating significant value for our clients.
                Challenge the status quo with us. We care for the people who
                care for you. Our pursuit of technological updates, training
                roadmaps, support platforms, and initiatives are thoughtfully
                designed to develop our people’s competency. It empowers and
                motivates them to grow and develop, thereby customizing unique
                solutions towards financial success for you, exceeding
                expectations every time.
                <br />
                <br />
                At Synergy, we grow collectively as one. Unity and trust provide
                greater growth and excellence. The strong internal bond between
                management, advisers, and support staff in Synergy testifies to
                that. We “never have a dull moment”. Be inspired by our passion,
                experience the Synergy way.
              </p>
              <h5 className="font-bold my-4 text-base">
                What is it like being a Branch Manager?
              </h5>
              <p className="text-base">
                As a Branch Manager, you will be managing a team of client
                advisers. You will be in charge of providing coaching and
                motivating your team to achieve new sales milestones &
                achievements. Providing effective communications and feedback to
                and from your branch is part of your responsibilities as Synergy
                Branch Manager. <br />
                <br />
                To help you succeed in your role, you will join our
                pre-management orientation (PMO) training when you come on board
                with us. Thereafter, you will also have training days every year
                to help you further develop your professional career and keep
                your management skills sharp and product knowledge up-to-date
                with the latest developments in the industry.
                <br />
                <br />
                As a successful Branch Manager, you will have the option to take
                your career forward by pursuing further the Management Route, on
                the path of becoming a Branch Director one day.
              </p>

              <h5 className="font-bold my-4 text-base">
                Who are we looking for?
              </h5>
              <ul className="list-disc list-inside text-base">
                <li className="mb-1">
                  At least 5 years’ experience in the banking and financial
                  services industry with a strong track record in financial
                  product sales is preferred.
                </li>
                <li className="mb-1">
                  Singapore Citizens / PR applicants only.
                </li>
                <li className="mb-1">
                  A Diploma/Degree, preferably in Business, Banking & Finance,
                  or Engineering
                </li>
                <li className="mb-1">
                  Passionate in Investment/Financial Planning.
                </li>
                <li className="mb-1">
                  Candidates with more than 5 years of relevant financial
                  advisory experience and proven track records may be considered
                  for more senior positions.
                </li>
                <li className="mb-1">
                  Strong interpersonal and communication skills.
                </li>
                <li className="mb-1">
                  Effective management skills with strong leadership qualities.
                </li>
                <li className="mb-1">
                  Self-starter, drive, and ability to work independently as well
                  as in a team.
                </li>
              </ul>

              <h5 className="font-bold my-4 text-base">How to apply?</h5>
              <p className="my-2 text-base">
                Submit your internship application below!
              </p>
              <p className="italic text-sm underline mb-1">Disclaimer</p>
              <p className="text-xs">
                The above job description does not cover the comprehensive list
                of activities, duties, or responsibilities that are required of
                a Synergy Intern. Duties, responsibilities, and activities may
                change or new ones may be assigned at any time according to the
                needs of the firm or the supervisor.
              </p>
            </AccordionContent>
          </AccordionItem>
        </Accordion>

        <h1 className="text-3xl font-medium my-10">
          OUR SYSTEM OF SUPPORT INCLUDES
        </h1>

        <div className="flex flex-wrap gap-4 mx-2">
          <div className="flex w-full h-full items-center gap-3">
            <div className="w-[15%] h-[55px] md:w-[55px] md:h-[55px] bg-[#000] rounded-lg flex justify-center items-center">
              <FaPeopleGroup className="text-[2rem] text-white" />
            </div>
            <div className="w-[85%]">
              <h1 className="font-semibold md:font-medium text-base md:text-xl">
                Making it simple for you to carry out your work
              </h1>
              <p>with excellent operations and administrative support</p>
            </div>
          </div>

          <div className="flex w-full h-full items-center gap-3">
            <div className="w-[15%] h-[55px] md:w-[55px] md:h-[55px] bg-[#000] rounded-lg flex justify-center items-center">
              <FaPuzzlePiece className="text-[2rem] text-white" />
            </div>
            <div className="w-[85%]">
              <h1 className="font-semibold md:font-medium text-base md:text-xl">
                Matching solutions to needs
              </h1>
              <p>
                to help you recommend right products and solutions to your
                clients
              </p>
            </div>
          </div>

          <div className="flex w-full h-full items-center gap-3">
            <div className="w-[15%] h-[55px] md:w-[55px] md:h-[55px] bg-[#000] rounded-lg flex justify-center items-center">
              <FaHandshake className="text-[2rem] text-white" />
            </div>
            <div className="w-[85%]">
              <h1 className="font-semibold md:font-medium text-base md:text-xl">
                Helping you prospect
              </h1>
              <p>
                through referral systems and public seminars to get more
                exposure for you
              </p>
            </div>
          </div>

          <div className="flex w-full h-full items-center gap-3">
            <div className="w-[15%] h-[55px] md:w-[55px] md:h-[55px] bg-[#000] rounded-lg flex justify-center items-center">
              <FaLaptop className="text-[2rem] text-white" />
            </div>
            <div className="w-[85%]">
              <h1 className="font-semibold md:font-medium text-base md:text-xl">
                I.T. at your fingertips s
              </h1>
              <p>
                with our customised OneSynergy platform to reduce manual
                processes, making it simple for you
              </p>
            </div>
          </div>

          <div className="flex w-full h-full items-center gap-3">
            <div className="w-[15%] h-[55px] md:w-[55px] md:h-[55px] bg-[#000] rounded-lg flex justify-center items-center">
              <PiBagFill className="text-[2rem] text-white" />
            </div>
            <div className="w-[85%]">
              <h1 className="font-semibold md:font-medium text-base md:text-xl">
                Training you for your future
              </h1>
              <p>to increase competency and expertise</p>
            </div>
          </div>

          <div className="flex w-full h-full items-center gap-3">
            <div className="w-[15%] h-[55px] md:w-[55px] md:h-[55px] bg-[#000] rounded-lg flex justify-center items-center">
              <FaTrophy className="text-[2rem] text-white" />
            </div>
            <div className="w-[85%]">
              <h1 className="font-semibold md:font-medium text-base md:text-xl">
                Great company welfare and benefits
              </h1>
              <p>to reward outstanding performances and achievements</p>
            </div>
          </div>
        </div>

        <h1 className="text-3xl font-medium mt-10">
          Get in touch with our Career team
        </h1>

        <div className="flex flex-wrap">
          <div className="w-full mt-10">
            <div className="grid w-full items-center gap-1.5">
              <Label htmlFor="email" className="mb-1">
                Name *
              </Label>
              <Input type="text" id="name" placeholder="" />
            </div>
            <div className="grid w-full items-center gap-1.5 mt-6">
              <Label htmlFor="email" className="mb-1">
                Contact Number
              </Label>
              <Input type="number" id="number" placeholder="" />
            </div>
            <div className="grid w-full items-center gap-1.5 mt-6">
              <Label htmlFor="email" className="mb-1">
                Email Address *
              </Label>
              <Input type="email" id="email" placeholder="" />
            </div>
            <div className="grid w-full items-center gap-1.5 mt-6">
              <Label htmlFor="referal" className="mb-1">
                Referred by (if any){" "}
              </Label>
              <Input type="text" id="referal" placeholder="" />
            </div>
            <div className="grid w-full items-center gap-1.5 mt-6">
              <Label htmlFor="referal" className="mb-1">
                Unit / Branch (if any){" "}
              </Label>
              <Input type="text" id="referal" placeholder="" />
            </div>

            <div className="mt-6">
              <Select>
                <Label htmlFor="email">Position you are applying for *</Label>
                <SelectTrigger className="w-full mt-1">
                  <SelectValue placeholder="" />
                </SelectTrigger>
                <SelectContent>
                  <SelectGroup>
                    <SelectItem value="art">Synergy Intern</SelectItem>
                    <SelectItem value="bot">Financial Adviser</SelectItem>
                    <SelectItem value="brt">Branch Manager</SelectItem>
                  </SelectGroup>
                </SelectContent>
              </Select>
            </div>

            <div className="mt-6">
              <Label htmlFor="email" className="mb-1">
                Message *
              </Label>
              <Textarea placeholder="Tell us more about yourself!" />
            </div>
          </div>

          <div className="mt-[4rem]">
            <h1 className="font-semibold">Please verify that you are human</h1>
            <p>
              By submitting this form, you agree to give us consent to collect,
              use and disclose the data you provided for the purpose of
              contacting you to follow-up with you on your message. If
              incomplete or inaccurate personal data is being provided, we will
              not be able to provide our response to your submission or to
              process your request or instruction. To learn more about our data
              protection policy, please click here.
            </p>
            <button className="h-[35px] flex justify-center items-center mt-6 w-full rounded-lg border-2 border-dashed border-black bg-white px-4 py-4 font-semibold uppercase text-black transition-all duration-300 hover:translate-x-[-4px] hover:translate-y-[-4px] hover:rounded-md hover:shadow-[4px_4px_0px_black] active:translate-x-[0px] active:translate-y-[0px] active:rounded-2xl active:shadow-none">
              Submit
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
