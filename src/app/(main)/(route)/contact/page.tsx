import Map from "@/components/ui/custom/map";
import Link from "next/link";
import React from "react";

import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";

export default function page() {
  return (
    <>
      <Map />
      <div className="flex flex-wrap mx-[1rem] md:mx-[10rem] mt-6">
        <div className="w-full md:w-1/2">
          <h1 className="text-2xl md:text-4xl font-normal">Contact Us</h1>

          <p className="text-[#585C5E] mt-4">
            Note: We might have a specific page for your enquiry.
          </p>

          <p className="text-[#585C5E] my-4">
            If you&apos;re looking for Motor or Travel insurance, please{" "}
            <Link
              className="text-[#06367E] hover:underline"
              href={"https://synergy.com.sg/quotations/new"}>
              get a General <br />
              Insurance Quote
            </Link>{" "}
            or simply fill up this form!
          </p>

          <p className="text-[#585C5E]">
            Seeking a career with us? We have a page for you to{" "}
            <Link
              className="text-[#06367E] hover:underline"
              href={"https://synergy.com.sg/careers"}>
              submit your
              <br />
              application.
            </Link>
          </p>
        </div>

        <div className="w-full md:w-1/2 mt-6 md:mt-0">
          <h1 className="text-2xl md:text-4xl font-normal">Visit Us</h1>

          <p className="font-medium mt-4">Synergy Financial Advisers Ltd</p>

          <p className="text-[#585C5E] my-4">
            229 Mountbatten Road <br />
            #03-30 Mountbatten Square <br />
            Singapore 398007
          </p>

          <p className="text-[#585C5E]">
            Main Line:{" "}
            <Link
              href={"tel:+6566541887"}
              className="text-[#06367E] hover:underline">
              +65 6654 1888
            </Link>
          </p>
          <p className="text-[#585C5E]">
            Fax:{" "}
            <Link
              href={"tel:+6566541887"}
              className="text-[#06367E] hover:underline">
              +65 6654 1887
            </Link>
          </p>
        </div>

        <div className="w-full mt-10">
          <div className="grid w-full items-center gap-1.5">
            <Label htmlFor="email" className="mb-1">
              Your Name *
            </Label>
            <Input type="text" id="name" placeholder="" />
          </div>
          <div className="grid w-full items-center gap-1.5 mt-6">
            <Label htmlFor="email" className="mb-1">
              Your Contact Number
            </Label>
            <Input type="number" id="number" placeholder="" />
          </div>
          <div className="grid w-full items-center gap-1.5 mt-6">
            <Label htmlFor="email" className="mb-1">
              Your Email Address *
            </Label>
            <Input type="email" id="email" placeholder="" />
          </div>
          <div className="grid w-full items-center gap-1.5 mt-6">
            <Label htmlFor="email" className="mb-1">
              Enquiry Type *
            </Label>
            <Input type="email" id="email" placeholder="" />
          </div>

          <div className="mt-6">
            <Select>
              <Label htmlFor="email">Enquiry Type *</Label>
              <SelectTrigger className="w-full mt-1">
                <SelectValue placeholder="" />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  <SelectItem value="art">Our Services</SelectItem>
                  <SelectItem value="bot">Feedback</SelectItem>
                  <SelectItem value="brt">Complaint</SelectItem>
                </SelectGroup>
              </SelectContent>
            </Select>
          </div>

          <div className="mt-6">
            <Label htmlFor="email" className="mb-1">
              Your Message *
            </Label>
            <Textarea placeholder="" />
          </div>
        </div>

        <div className="mt-[4rem]">
          <h1 className="font-semibold">Please verify that you are human</h1>
          <p>
            By submitting this form, you agree to give us consent to collect,
            use and disclose the data you provided for the purpose of contacting
            you to follow-up with you on your message. If incomplete or
            inaccurate personal data is being provided, we will not be able to
            provide our response to your submission or to process your request
            or instruction. To learn more about our data protection policy,
            please click here.
          </p>
          <button className="h-[35px] flex justify-center items-center mt-6 w-full rounded-lg border-2 border-dashed border-black bg-white px-4 py-4 font-semibold uppercase text-black transition-all duration-300 hover:translate-x-[-4px] hover:translate-y-[-4px] hover:rounded-md hover:shadow-[4px_4px_0px_black] active:translate-x-[0px] active:translate-y-[0px] active:rounded-2xl active:shadow-none">
            Submit
          </button>
        </div>
      </div>
    </>
  );
}
