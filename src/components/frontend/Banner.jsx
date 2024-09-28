"use client";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import React, { useRef } from "react";

const Banner = () => {
  const bannerContainerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: bannerContainerRef,
    offset: ["start start", "end end"],
  });
  const topImageY = useTransform(scrollYProgress, [0, 0.5], ["0vh", "115vh"]);
  const bannerY = useTransform(scrollYProgress, [0, 0.5], ["0vh", "78vh"]);
  const bannerTextScale = useTransform(scrollYProgress, [0, 0.5], [1, 0.6]);
  const bannerTextOpacity = useTransform(scrollYProgress, [0, 0.5], [1, 0.7]);
  const bottomImageY = useTransform(
    scrollYProgress,
    [0, 0.5],
    ["0vh", "-48vh"]
  );

  const imgsrc = [
    {
      src: "https://images.pexels.com/photos/6775268/pexels-photo-6775268.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    },
    {
      src: "https://images.pexels.com/photos/4365100/pexels-photo-4365100.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    },
  ];

  return (
    <>
      <motion.section
        ref={bannerContainerRef}
        className="banner relative min-h-screen"
      >
        <div className=" max-w-[100rem] mx-auto">
          {/* Top image animation */}
          <motion.div
            className="img-cont-1 flex justify-center w-full z-20 absolute -top-[63vh]"
            style={{ y: topImageY }}
          >
            <div className="w-80 h-[27rem] mx-20">
              <Image
                width={1000}
                height={1000}
                src="https://images.pexels.com/photos/1040893/pexels-photo-1040893.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                alt="Interior Architecture"
                className="object-cover w-full h-full"
              />
            </div>
          </motion.div>

          {/* Middle text animation */}
          <motion.div
            className="banner-container min-h-screen px-[5%] max-w-[100rem] mx-auto flex items-center justify-center z-0"
            style={{
              scale: bannerTextScale,
              opacity: bannerTextOpacity,
              y: bannerY,
            }}
          >
            <h1 className="banner-text text-center font-bold abhaya-libre-extrabold">
              <p className="xl:text-9xl lg:text-8xl md:text-7xl sm:text-6xl text-5xl lg:tracking-[25px] md:tracking-[20px] sm:tracking-[15px] tracking-[10px]">
                LEGO HOUSE
              </p>
              <p className="xl:text-9xl lg:text-8xl md:text-7xl sm:text-6xl text-5xl tracking-wider mt-5">
                ARCHITECTS
              </p>
            </h1>
          </motion.div>

          {/* Bottom images animation */}
          <motion.div
            className="img-cont-2 flex justify-between w-full mx-auto z-20 px-32"
            style={{ y: bottomImageY }}
          >
            {imgsrc.map((src, index) => (
              <div className="w-80 h-[27rem] mx-20" key={index}>
                <Image
                  width={1000}
                  height={1000}
                  src={src.src}
                  alt="Interior Architecture"
                  className="object-cover w-full h-full"
                />
              </div>
            ))}
          </motion.div>
        </div>
      </motion.section>
    </>
  );
};

export default Banner;
