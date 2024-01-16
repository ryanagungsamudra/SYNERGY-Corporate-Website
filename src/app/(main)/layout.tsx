import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import React from "react";

export default function layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Navbar />
      <div className="my-[6rem]">{children}</div>
      <Footer />
    </>
  );
}
