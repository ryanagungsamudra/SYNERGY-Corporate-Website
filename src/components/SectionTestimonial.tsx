"use client";
import TestimonialCard from "@/components/ui/custom/card/TestimonialCard";
import { useScroll } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import Lenis from "@studio-freight/lenis";
import { fetchClients } from "@/config/https/testimonial";

export default function SectionTestimonial() {
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start start", "end end"],
  });

  useEffect(() => {
    const lenis = new Lenis();

    function raf(time: any) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);
  });
  //   {
  //     title: "Mr Tan Yi Heng",
  //     job: "",
  //     description:
  //       '"Rui Han was my mentor during my time at Synergy. He was patient and meticulous when mentoring me and ensured that I clearly understood everything before moving to the next topic. Despite being new to this industry, I was able to learn very quickly with the help from RuiHan and I am certain he will be an asset to any organisation in the future."',
  //     clientOf: "KUAH RUI HAN",
  //     src: "testi1.jpeg",
  //     url: "https://www.ignant.com/2023/03/25/ad2186-matthias-leidingers-photographic-exploration-of-awe-and-wonder/",
  //     color: "#fff",
  //   },
  //   {
  //     title: "Ms Cel",
  //     job: "Public Servant",
  //     description:
  //       '"I have a very positive experience with Crive! He provides clear explanation for the various policies, takes the time and effort to run through my financial health, and gave advice that serves my needs along with detailed action steps that I need to take to achieve my financial goals. He also managed to simplify difficult financial terms/concepts for my understanding. Im glad to have him in my financial journey."',
  //     clientOf: "CRIVE LIM",
  //     src: "testi2.jpeg",
  //     url: "https://www.ignant.com/2022/09/30/clement-chapillon-questions-geographical-and-mental-isolation-with-les-rochers-fauves/",
  //     color: "#fff",
  //   },
  //   {
  //     title: "Mr Su Kiat",
  //     job: "Banking Professional",
  //     description:
  //       '"Ben is a well trusted advisor who never fails to response swiftly to my queries. Notably, Ben exhibits good industry knowledge and provides good financial advices. I am writing this to show my appreciation to Ben, whom had me well insured/covered."',
  //     clientOf: "BEN SIM",
  //     src: "testi3.jpeg",
  //     url: "https://www.ignant.com/2023/10/28/capturing-balis-many-faces-zissou-documents-the-sacred-and-the-mundane-of-a-fragile-island/",
  //     color: "#fff",
  //   },
  //   {
  //     title: "Mr. Stefano Virgilli",
  //     job: "CEO Queen George",
  //     description:
  //       '"Keef is always smiling. Never fall short of expectations. Going the extra mile is so natural for him. When I had an emergency at the hospital he picked up my call at 1AM and instructed me on what to do, step by step. Great professional attitude. A good friend too."',
  //     clientOf: "KEEF LIM",
  //     src: "testi4.jpeg",
  //     url: "https://www.ignant.com/2023/10/28/capturing-balis-many-faces-zissou-documents-the-sacred-and-the-mundane-of-a-fragile-island/",
  //     color: "#fff",
  //   },
  // ];

  // Fetch data from strapi API
  interface Project {
    attributes: {
      name: string;
      job: string;
      description: string;
      adviser: {
        data: {
          attributes: {
            name: string;
          };
          id: number;
        };
      };
      img: {
        data: {
          attributes: {
            url: string;
          };
        };
      };
    };
  }

  const [projects, setProjects] = useState<Project[] | null>(null);

  useEffect(() => {
    fetchClients("?&populate=*")
      .then((res) => {
        // Shuffle the entire list
        const shuffledProjects = shuffleArray(res.data);

        // Take the first 4 projects
        const selectedProjects = shuffledProjects.slice(0, 4);

        setProjects(selectedProjects);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  // Function to shuffle array (Fisher-Yates algorithm)
  function shuffleArray(array: any[]) {
    let currentIndex = array.length,
      randomIndex;

    // While there remain elements to shuffle...
    while (currentIndex !== 0) {
      // Pick a remaining element...
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;

      // And swap it with the current element.
      [array[currentIndex], array[randomIndex]] = [
        array[randomIndex],
        array[currentIndex],
      ];
    }

    return array;
  }

  return (
    <>
      <main
        ref={container}
        className="relative mt-[10vh] md:mt-[-40vh] pt-[5rem] bg-gradient-to-r from-white to-gray-300">
        <h1 className="text-3xl md:text-4xl font-bold text-center text-[#06367F]">
          HEAR FROM OUR CLIENTS
        </h1>
        {projects &&
          projects.map((project: Project, i) => {
            const targetScale = 1 - (projects.length - i) * 0.05;

            const title = project.attributes.name;
            const job = project.attributes.job;
            const description = project.attributes.description;
            const clientOf = project.attributes.adviser.data.attributes.name;
            const advisorId = project.attributes.adviser.data.id;
            const imageUrl = `${process.env.NEXT_PUBLIC_STRAPI_API_URL}${project.attributes.img.data.attributes.url}`;

            return (
              <TestimonialCard
                key={`p_${i}`}
                i={i}
                title={title}
                job={job}
                description={description}
                clientOf={clientOf}
                advisorId={advisorId}
                src={imageUrl}
                color="#fff"
                progress={scrollYProgress}
                range={[i * 0.25, 1]}
                targetScale={targetScale}
              />
            );
          })}
      </main>
    </>
  );
}
