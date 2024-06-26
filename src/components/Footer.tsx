"use client";

import React from "react";
import { Card, CardContent } from "./ui/card";
import Image from "next/image";
import Link from "next/link";

// Icons
import { FaFacebookSquare, FaLinkedin, FaInstagram } from "react-icons/fa";

// Images
import sme500 from "@/app/assets/sponsorship/sme500-2023.png";
import skillsfuture from "@/app/assets/sponsorship/skillsfuture.png";
import datatrustmark from "@/app/assets/sponsorship/data-trustmark.png";
import sqcstar from "@/app/assets/sponsorship/sqc_star.png";
import spba2021 from "@/app/assets/sponsorship/spba2021-logo.png";
import iso27001 from "@/app/assets/sponsorship/iso_27001.png";
import iso9001 from "@/app/assets/sponsorship/iso_9001.png";

export default function Footer() {
  return (
    <Card className="flex flex-wrap p-8 mt-[-3.1rem] relative bottom-0">
      <div className="md:w-[25%]">
        <h1 className="text-xl font-medium underline underline-offset-4 text-[#0C3557]">
          Synergy Financial Advisers Ltd
        </h1>
        <p className="mt-[2rem] text-[#0C3557]">
          229 Mountbatten Road <br />
          #03-30 Mountbatten Square <br />
          Singapore 398007 <br />
          Main Line: +65 6654 1888
          <br />
          Fax: +65 6654 1887 <br />
          UEN: 201217738K <br />
          FA Licence No. FA100050
        </p>
        <div className="flex">
          <Link
            href={
              "https://www.facebook.com/SynergyFinancialAdvisers/?utm_source=website"
            }
            target="_blank">
            <FaFacebookSquare className="text-[#06367E] text-3xl mt-8 mr-2" />
          </Link>
          <Link
            href={
              "https://www.linkedin.com/company/synergyifa/?utm_source=website"
            }
            target="_blank">
            <FaLinkedin className="text-[#06367E] text-3xl mt-8 mr-2" />
          </Link>
          <Link
            href={"https://www.instagram.com/synergyfa_sg/?utm_source=website"}
            target="_blank">
            <FaInstagram className="text-[#06367E] text-3xl mt-8 mr-2" />
          </Link>
        </div>
      </div>

      <div className="md:w-[25%] my-10 md:my-0">
        <h1 className="text-xl font-medium underline underline-offset-4 text-[#0C3557]">
          Links
        </h1>
        <div className="mt-[2rem]">
          <div>
            <Link
              href="/"
              className="text-[#0C3557] font-medium relative group">
              Contact Us
              <span className="absolute bottom-0 left-0 w-full h-0.5 bg-[#0C3557] transform origin-left scale-x-0 transition-transform duration-700 group-hover:scale-x-100"></span>
            </Link>
          </div>
          <div>
            <Link
              href="/"
              className="text-[#0C3557] font-medium relative group">
              Travel Insurance
              <span className="absolute bottom-0 left-0 w-full h-0.5 bg-[#0C3557] transform origin-left scale-x-0 transition-transform duration-700 group-hover:scale-x-100"></span>
            </Link>
          </div>
          <div>
            <Link
              href="/"
              className="text-[#0C3557] font-medium relative group">
              Motor Insurance
              <span className="absolute bottom-0 left-0 w-full h-0.5 bg-[#0C3557] transform origin-left scale-x-0 transition-transform duration-700 group-hover:scale-x-100"></span>
            </Link>
          </div>
          <div>
            <Link
              href="/"
              className="text-[#0C3557] font-medium relative group">
              Our Quality Policy (Fair Dealing Commitment)
              <span className="absolute bottom-0 left-0 w-full h-0.5 bg-[#0C3557] transform origin-left scale-x-0 transition-transform duration-700 group-hover:scale-x-100"></span>
            </Link>
          </div>
          <div>
            <Link
              href="/"
              className="text-[#0C3557] font-medium relative group">
              Personal Data Protection Policy (PDPA)
              <span className="absolute bottom-0 left-0 w-full h-0.5 bg-[#0C3557] transform origin-left scale-x-0 transition-transform duration-700 group-hover:scale-x-100"></span>
            </Link>
          </div>
          <div>
            <Link
              href="/"
              className="text-[#0C3557] font-medium relative group">
              Complaints Handling and Resolution
              <span className="absolute bottom-0 left-0 w-full h-0.5 bg-[#0C3557] transform origin-left scale-x-0 transition-transform duration-700 group-hover:scale-x-100"></span>
            </Link>
          </div>
          <div>
            <Link
              href="/"
              className="text-[#0C3557] font-medium relative group">
              Careers
              <span className="absolute bottom-0 left-0 w-full h-0.5 bg-[#0C3557] transform origin-left scale-x-0 transition-transform duration-700 group-hover:scale-x-100"></span>
            </Link>
          </div>
          <div className="mt-8">
            <Link
              href="/"
              className="text-[#0C3557] font-medium relative group">
              OneSynergy Login
              <span className="absolute bottom-0 left-0 w-full h-0.5 bg-[#0C3557] transform origin-left scale-x-0 transition-transform duration-700 group-hover:scale-x-100"></span>
            </Link>
          </div>
        </div>
      </div>

      <div className="md:w-[50%]">
        <div className="flex flex-wrap gap-4 w-full h-full justify-around items-center">
          <div className="w-[30%]">
            <Image
              alt="sponsorship"
              src={sme500}
              layout="responsive"
              width={120}
              height={120}
              className="object-cover w-[30%]"
            />
          </div>
          <div className="w-[30%]">
            <Image
              alt="sponsorship"
              src={skillsfuture}
              layout="responsive"
              width={120}
              height={120}
              className="object-cover w-[30%]"
            />
          </div>
          <div className="w-[30%]">
            <Image
              alt="sponsorship"
              src={datatrustmark}
              layout="responsive"
              width={120}
              height={120}
              className="object-cover w-[30%]"
            />
          </div>
          <div className="w-[30%]">
            <Image
              alt="sponsorship"
              src={sqcstar}
              layout="responsive"
              width={120}
              height={120}
              className="object-cover w-[30%]"
            />
          </div>
          <div className="w-[30%]">
            <Image
              alt="sponsorship"
              src={spba2021}
              layout="responsive"
              width={120}
              height={120}
              className="object-cover w-[30%]"
            />
          </div>
          <div className="w-[30%] flex gap-4 justify-center">
            <div className="w-[50%]">
              <Image
                alt="sponsorship"
                src={iso27001}
                layout="responsive"
                width={120}
                height={120}
                className="object-cover w-[50%]"
              />
            </div>
            <div className="w-[50%]">
              <Image
                alt="sponsorship"
                src={iso9001}
                layout="responsive"
                width={120}
                height={120}
                className="object-cover w-[50%]"
              />
            </div>
          </div>
        </div>
      </div>
    </Card>
  );
}
