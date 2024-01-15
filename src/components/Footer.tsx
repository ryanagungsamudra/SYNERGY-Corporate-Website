import React from "react";
import { Card, CardContent } from "./ui/card";
import Image from "next/image";
import Link from "next/link";

// Icons
import { FaFacebookSquare, FaLinkedin, FaInstagram } from "react-icons/fa";

export default function Footer() {
  return (
    <Card className="flex flex-wrap p-8 m-4">
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
              className="text-[#06367E] font-medium hover:underline duration-150">
              Contact Us
            </Link>
          </div>
          <div>
            <Link
              href="/"
              className="text-[#06367E] font-medium hover:underline duration-150">
              Travel Insurance
            </Link>
          </div>
          <div>
            <Link
              href="/"
              className="text-[#06367E] font-medium hover:underline duration-150">
              Motor Insurance
            </Link>
          </div>
          <div>
            <Link
              href="/"
              className="text-[#06367E] font-medium hover:underline duration-150">
              Our Quality Policy (Fair Dealing Commitment)
            </Link>
          </div>
          <div>
            <Link
              href="/"
              className="text-[#06367E] font-medium hover:underline duration-150">
              Personal Data Protection Policy (PDPA)
            </Link>
          </div>
          <div>
            <Link
              href="/"
              className="text-[#06367E] font-medium hover:underline duration-150">
              Complaints Handling and Resolution
            </Link>
          </div>
          <div>
            <Link
              href="/"
              className="text-[#06367E] font-medium hover:underline duration-150">
              Careers
            </Link>
          </div>
          <div className="mt-8">
            <Link
              href="/"
              className="text-[#06367E] font-medium hover:underline duration-150">
              OneSynergy Login
            </Link>
          </div>
        </div>
      </div>

      <div className="md:w-[50%]">
        <div className="flex flex-wrap gap-4 w-full h-full justify-around items-center">
          <div className="w-[30%]">
            <Image
              alt="sponsorship"
              src={require("@/app/assets/sponsorship/sme500-2023.png")}
              layout="responsive"
              width={120}
              height={120}
              className="object-cover w-[30%]"
            />
          </div>
          <div className="w-[30%]">
            <Image
              alt="sponsorship"
              src={require("@/app/assets/sponsorship/skillsfuture.png")}
              layout="responsive"
              width={120}
              height={120}
              className="object-cover w-[30%]"
            />
          </div>
          <div className="w-[30%]">
            <Image
              alt="sponsorship"
              src={require("@/app/assets/sponsorship/data-trustmark.png")}
              layout="responsive"
              width={120}
              height={120}
              className="object-cover w-[30%]"
            />
          </div>
          <div className="w-[30%]">
            <Image
              alt="sponsorship"
              src={require("@/app/assets/sponsorship/sqc_star.png")}
              layout="responsive"
              width={120}
              height={120}
              className="object-cover w-[30%]"
            />
          </div>
          <div className="w-[30%]">
            <Image
              alt="sponsorship"
              src={require("@/app/assets/sponsorship/spba2021-logo.png")}
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
    </Card>
  );
}
