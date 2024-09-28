import React from "react";
import { motion } from "framer-motion";
import { Button } from "../ui/button";
import Image from "next/image";
import Link from "next/link";

const Features = () => {
  const img = [
    {
      img: "https://images.pexels.com/photos/1643383/pexels-photo-1643383.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      alt: "interior",
      label: "Architects",
    },
    {
      img: "https://images.pexels.com/photos/1643383/pexels-photo-1643383.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      alt: "interior",
      label: "Interior",
    },
    {
      img: "https://images.pexels.com/photos/1643383/pexels-photo-1643383.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      alt: "interior",
      label: "Renovation",
    },
  ];

  return (
    <>
      <motion.section className="min-h-screen w-full">
        <div className="max-w-[100rem] mx-auto px-[5%]">
          <div className="relative mb-10">
            <motion.div className="flex flex-col justify-center items-center absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
              <Button className="bg-red-500 rounded-full mb-2">Services</Button>
              <p className="font-semibold abhaya-libre-extrabold tracking-widest">
                Quality You Can Trust{" "}
              </p>
            </motion.div>
            <motion.h1 className="text-center xl:text-9xl lg:text-8xl md:text-7xl sm:text-6xl text-5xl xl:tracking-[50px] lg:tracking-[25px] md:tracking-[20px] sm:tracking-[15px] tracking-[10px] abhaya-libre-extrabold text-black/20">
              Features
            </motion.h1>
          </div>
          <motion.div className="bg-[#A3A3A3] h-[22rem] px-10 py-10 max-w-6xl mx-auto">
            <h1 className="text-3xl abhaya-libre-extrabold text-center text-white mb-16">
              We provide top-notch quality and service. Our expert team delivers
              innovative solutions tailored to your needs.
            </h1>
            <div className="box-cont flex justify-between px-[8%]">
              {img.map((image, index) => (
                <div className=" w-64 h-64 border relative" key={index}>
                  <Image
                    width={1000}
                    height={1000}
                    className="w-full h-full"
                    src={image.img}
                    alt={image.alt}
                  />
                  <Link
                    href={`/`}
                    className="bg-red-500 text-white px-5 py-2.5 rounded-full hover:bg-black duration-150 ease-in-out transition-all absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
                  >
                    {image.label}
                  </Link>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </motion.section>
    </>
  );
};

export default Features;
