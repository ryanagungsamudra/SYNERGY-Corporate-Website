import Image from "next/image";
import React from "react";

interface NewsCardProps {
  title: string;
  date: string;
  description: string;
  image: string;
}
const NewsCard = ({ title, date, description, image }: NewsCardProps) => (
  <>
    <div className="flex flex-col items-center justify-center w-[25rem] h-[35rem] bg-[#fff] px-6 pb-[4rem] md:pb-0">
      <div className="w-full h-[15rem] overflow-hidden mb-4">
        <Image
          src={`/images/${image}`}
          alt="image"
          objectFit="cover"
          width={300}
          height={300}
          className="w-full h-full object-cover"
        />
      </div>

      <h1 className="text-2xl font-bold text-start text-black my-2">{title}</h1>
      <div className="flex w-full justify-start">
        <p className="text-xs">{date}</p>
      </div>
      <p className="text-lg text-start text-black mt-4">{description}</p>
      <button className="flex w-full h-[30px] mt-8 justify-center items-center gap-2 rounded-2xl border-2 border-dashed border-black bg-white px-4 py-4 font-semibold uppercase text-black transition-all duration-300 hover:translate-x-[-4px] hover:translate-y-[-4px] hover:rounded-md hover:shadow-[4px_4px_0px_black] active:translate-x-[0px] active:translate-y-[0px] active:rounded-2xl active:shadow-none">
        Read More
      </button>
    </div>
  </>
);

const newsData = [
  {
    title:
      "Bringing the Spirit of Hari Raya to Thong Teck Home: Synergy and GLEC's Community Outreach",
    date: "Posted 11 May, 2023 in Charity",
    description:
      "Last year, during Chinese New Year, we had the privilege of conducting an outreach programme at Thong Teck Home. Our efforts were appreciated and... (continued)",
    image: "news1.jpg",
  },
  {
    title: "SAVH Blind Community Day Charity Gala 2023",
    date: "Posted 3 April, 2023 in Charity",
    description:
      "Synergy Financial Advisers is pleased to announce that we attended the recent gala dinner for the Singapore Association of the Visually Handicapp... (continued)",
    image: "news2.jpg",
  },
  {
    title: "SYNERGY was awarded the NS Advocate Award for SMEs (2022)",
    date: "Posted 26 November, 2022 in Awards",
    description:
      "The Total Defence Awards ('TDA') was first introduced in 1986 to recognise businesses -- specifically employers and civil resource owners... (continued)",
    image: "news3.jpg",
  },
  {
    title: "SYNERGY wins the Esteemed Singapore Prestige Brand Award (SPBA)",
    date: "Posted 5 May, 2022 in Awards",
    description:
      "Synergy Financial Advisers (SYNERGY) is delighted and honoured to be awarded as a winner at the Singapore Prestige Brand Award (SPBA) 2020/21 in ... (continued)",
    image: "news4.jpg",
  },
];

export default function SectionNews() {
  return (
    <div className="py-[5rem]">
      <h1 className="text-4xl font-bold text-center text-[#06367F]">
        Latest News
      </h1>

      {/* News card */}
      <div className="flex flex-wrap md:flex-nowrap w-full justify-center px-8 pt-[3rem]">
        {newsData.map((news, index) => (
          <NewsCard key={index} {...news} />
        ))}
      </div>
    </div>
  );
}
