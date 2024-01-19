import React from "react";
import NewsCard from "./ui/custom/card/NewsCard";

export default function SectionNews() {
  return (
    <div className="pt-[5rem] pb-[2rem]">
      <h1 className="text-4xl font-bold text-center text-[#06367F]">
        Latest News
      </h1>

      {/* News card */}
      <div className="px-8 pt-[3rem]">
        <NewsCard category="News" limit={4} offset={0} />
      </div>
    </div>
  );
}
