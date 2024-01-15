"use client";
import Image from "next/image";
import styles from "./style.module.scss";
import { useTransform, motion, useScroll } from "framer-motion";
import { useRef } from "react";

interface CardProps {
  i: number;
  title: string;
  job: string;
  description: string;
  clientOf: string;
  src: string;
  url: string;
  color: string;
  progress: any;
  range: any;
  targetScale: number;
}

const CustomCard = ({
  i,
  title,
  job,
  description,
  clientOf,
  src,
  url,
  color,
  progress,
  range,
  targetScale,
}: CardProps) => {
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start end", "start start"],
  });

  const imageScale = useTransform(scrollYProgress, [0, 1], [2, 1]);
  const scale = useTransform(progress, range, [1, targetScale]);

  return (
    <div ref={container} className={`${styles.cardContainer} p-4 md:p-0`}>
      <motion.div
        style={{
          backgroundColor: color,
          scale,
          top: `calc(-5vh + ${i * 25}px)`,
        }}
        className={styles.card}>
        <h2 className="font-medium">{title}</h2>
        <p>{job}</p>
        <hr className="border-t-[1px] border-gray-300 mt-4" />

        <div className={styles.body}>
          <div className={styles.description}>
            <p className="text-[13px] md:text-[18px] text-start">
              {description}
            </p>
            <div className="absolute bottom-0 md:left-[0rem]">
              <button className="flex h-[40px] md:w-[500px] justify-center items-center gap-2 rounded-2xl border-2 border-dashed border-black bg-white px-4 py-4 font-semibold uppercase text-black transition-all duration-300 hover:translate-x-[-4px] hover:translate-y-[-4px] hover:rounded-md hover:shadow-[4px_4px_0px_black] active:translate-x-[0px] active:translate-y-[0px] active:rounded-2xl active:shadow-none">
                <h4 className="text-[12px] md:text-[14px] flex gap-2">
                  CLIENT OF{" "}
                  <span>
                    <a
                      href={url}
                      target="_blank"
                      className="text-[#234A8C] text-[12px] md:text-[14px]">
                      {clientOf}
                    </a>
                  </span>
                </h4>
              </button>
            </div>
          </div>

          <div className={`${styles.imageContainer}`}>
            <motion.div className={styles.inner} style={{ scale: imageScale }}>
              <Image fill src={`/images/${src}`} alt="image" />
            </motion.div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default CustomCard;
