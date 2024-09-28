"use client";
import { MenuIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { FaXmark } from "react-icons/fa6";
import { Button } from "../ui/button";

const Navbar = () => {
  const links = [
    {
      link: "/projects",
      label: "Projects",
    },
    {
      link: "/stories",
      label: "Stories",
    },
    {
      link: "/career",
      label: "Career",
    },
    {
      link: "/contact-us",
      label: "Contact",
    },
    {
      link: "/about-us",
      label: "About Us",
    },
  ];
  const [toggle, setToggle] = useState(false);
  const handleToggle = () => {
    setToggle(!toggle);
  };

  return (
    <>
      <nav className="fixed w-full backdrop-blur bg-white/10 top-0 z-50 py-4">
        <div className="nav-container max-w-[100rem] mx-auto w-full flex justify-between items-center">
          <div className="mx-[5%] flex w-full justify-between items-center">
            <div className="logo md:w-16 w-14 z-50">
              <Link href="/">
                <Image
                  width={1000}
                  height={1000}
                  className="object-cover w-full h-full"
                  src="/assets/logo.png"
                  alt="Lego House"
                />
              </Link>
            </div>
            <ul
              className={
                (toggle ? "!right-0 " : "!-right-[104%] ") +
                `flex items-center md:justify-normal justify-center md:flex-row flex-col md:relative fixed md:w-fit w-screen md:h-auto h-screen top-0 right-0 md:left-0 ease-in-out duration-500 transition-all md:bg-transparent bg-[#212327]`
              }
            >
              {links.map((link, index) => (
                <li
                  key={index}
                  className="mx-3 md:my-0 my-2 font-medium md:text-sm text-xl md:w-fit w-full"
                >
                  <Link
                    onClick={() => {
                      if (window.innerWidth < 768) {
                        handleToggle();
                      }
                    }}
                    href={link.link}
                    className=" px-1 py-1 relative md:after:block after:hidden after:w-0 hover:after:w-full after:absolute after:h-0.5 hover:text-[#BC1822] after:bg-[#BC1822] after:bottom-0.5 after:rounded-full after:left-0 after:ease-in-out after:transition-all after:duration-300 ease-in-out transition-all duration-300 md:text-[#212327] text-white w-full md:flex block text-center"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
            <Button
              onClick={() => {
                handleToggle();
              }}
              className="toggle md:hidden grid place-items-center relative w-8 h-8 outline outline-2 outline-offset-1 outline-[#212327d4] bg-[#212327] rounded-none border-2 border-white"
            >
              {toggle ? (
                <FaXmark className=" text-lg absolute" />
              ) : (
                <MenuIcon className=" w-5 h-5 absolute" />
              )}
            </Button>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
