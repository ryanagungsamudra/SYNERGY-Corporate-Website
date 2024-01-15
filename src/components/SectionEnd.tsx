import Image from "next/image";
import React from "react";
import { Button } from "./ui/button";

export default function SectionEnd() {
  return (
    <div className="mt-[-3rem] md:mt-0">
      <div className="relative">
        <Image
          alt="backgeound"
          src={require("@/app/assets/landing/corp-image.jpg")}
        />
      </div>
      <div className="relative bottom-[16.5rem] md:bottom-20 px-[2rem] flex gap-4">
        <Button className="bg-[#06367E] hover:bg-white hover:text-black w-1/2 h-[30px] md:h-full">
          Careers with Synergy
        </Button>
        <Button className="bg-white text-black hover:bg-[#06367E] hover:text-white w-1/2 h-[30px] md:h-full">
          Get A Quote
        </Button>
      </div>
    </div>
  );
}
