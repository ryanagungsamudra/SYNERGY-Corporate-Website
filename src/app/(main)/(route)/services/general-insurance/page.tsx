"use client";

import React, { useContext, useEffect } from "react";
import { usePathname } from "next/navigation";
import { SynergyContext } from "@/context";
import Image from "next/image";
import { Card, CardHeader } from "@/components/ui/card";

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

// Images
import rainbowumbrella from "@/app/assets/page/services/rainbowumbrella.jpg";

export default function Page() {
  const path = usePathname();
  const menuName = path.split("/")[2];
  const { changeMenu } = useContext(SynergyContext);

  useEffect(() => {
    changeMenu(menuName);
  }, []);
  return (
    <div>
      <div className="relative w-full h-full mt-[-1.3rem]">
        <div className="relative bg-gradient-to-r from-[#7297CA] to-[#97C6CD]">
          <Image
            src={rainbowumbrella}
            alt="Careers"
            className="w-full h-[160px] object-cover object-top"
          />
          <div className="absolute inset-0 flex flex-wrap items-center justify-center text-white text-center py-10">
            <h1 className="text-3xl font-medium z-20 w-full ">
              GENERAL INSURANCE
            </h1>
            <p className="text-[#DDDDDD] z-20 w-full">Request for Quotation</p>
          </div>
          <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
            <div className="h-[9.4rem]"></div>
          </div>
        </div>
      </div>

      <div className="mx-[2rem] md:mx-[12rem] mt-6">
        <div className="text-center px-12">
          <h1 className="text-2xl font-medium">
            We provide a wide range of policies to cover you from personal
            insurance to property and motor insurance.
          </h1>
          <p>
            Do you know that insurance can pay for your medical care and
            physical rehabilitation should you meet with an accident while at
            work?
            <br />
            <br />
            Do you know that we can protect your property against loss caused by
            a fire or lightning?
            <br />
            <br />
            To find out more, fill in the form below to get a quotation now!
          </p>
        </div>

        <Card className="mt-14 pb-8 rounded-lg border-[#06367E]">
          <div className="flex items-center pl-4 text-start bg-[#06367E] text-white h-[50px] rounded-tl-lg rounded-tr-lg">
            Basic Information
          </div>
          <div className="w-full mt-6 px-6">
            <div className="mt-6">
              <Select>
                <Label htmlFor="email">Type *</Label>
                <SelectTrigger className="w-full mt-1">
                  <SelectValue placeholder="" />
                </SelectTrigger>
                <SelectContent>
                  <SelectGroup>
                    <SelectItem value="art">Travel</SelectItem>
                    <SelectItem value="bot">Motor</SelectItem>
                  </SelectGroup>
                </SelectContent>
              </Select>
            </div>
            <div className="grid w-full items-center gap-1.5 mt-6">
              <Label htmlFor="title" className="mb-1">
                Title *
              </Label>
              <Input type="text" id="title" placeholder="" />
            </div>
            <div className="grid w-full items-center gap-1.5 mt-6">
              <Label htmlFor="name" className="mb-1">
                Name *
              </Label>
              <Input type="text" id="name" placeholder="" />
            </div>
            <div className="grid w-full items-center gap-1.5 mt-6">
              <Label htmlFor="contact" className="mb-1">
                Contact *
              </Label>
              <Input type="text" id="contact" placeholder="" />
            </div>
            <div className="grid w-full items-center gap-1.5 mt-6">
              <Label htmlFor="email" className="mb-1">
                Email Address *
              </Label>
              <Input type="email" id="email" placeholder="" />
            </div>
            <div className="grid w-full items-center gap-1.5 mt-6">
              <Label htmlFor="date" className="mb-1">
                Date of Birth *
              </Label>
              <Input type="date" id="date" placeholder="" />
            </div>
          </div>

          <div className="flex items-center pl-4 text-start bg-[#06367E] text-white h-[50px] mt-8">
            Additional Information
          </div>
          <div className="w-full mt-6 px-6">
            <div className="mt-6">
              <Label htmlFor="email" className="mb-1">
                Additional Notes (Optional)
              </Label>
              <Textarea placeholder="Tell us more about yourself!" />
            </div>
          </div>
        </Card>

        <div className="mt-[4rem]">
          <h1 className="font-semibold">Please verify that you are human</h1>
          <p>
            By submitting this form, you agree to give us consent to collect,
            use and disclose the data you provided for the sole purpose of
            contacting you to provide you quotation on the selected product
            type. To learn more about our data protection policy, please click
            here.
          </p>
          <button className="h-[35px] flex justify-center items-center mt-6 w-full rounded-lg border-2 border-dashed border-black bg-white px-4 py-4 font-semibold uppercase text-black transition-all duration-300 hover:translate-x-[-4px] hover:translate-y-[-4px] hover:rounded-md hover:shadow-[4px_4px_0px_black] active:translate-x-[0px] active:translate-y-[0px] active:rounded-2xl active:shadow-none">
            Request for quotation
          </button>
        </div>
      </div>
    </div>
  );
}
