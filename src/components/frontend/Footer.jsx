import Image from "next/image";
import Link from "next/link";
import React from "react";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaTwitter,
  FaYoutube,
} from "react-icons/fa6";

const Footer = () => {
  const platform = [
    {
      link: "/",
      label: "Renovation",
    },
    {
      link: "/",
      label: "Interior",
    },
    {
      link: "/",
      label: "Architects",
    },
    {
      link: "/",
      label: "Office Architecture",
    },
    {
      link: "/",
      label: "Residence Design",
    },
    {
      link: "/",
      label: "Cafe Design",
    },
    {
      link: "/",
      label: "3D Model Design",
    },
  ];

  const access = [
    {
      link: "/",
      label: "Projects",
    },
    {
      link: "/",
      label: "Stories",
    },
    {
      link: "/",
      label: "Career",
    },
    {
      link: "/",
      label: "Contact",
    },
    {
      link: "/",
      label: "About Us",
    },
  ];

  const about = [
    {
      link: "/",
      label: "Company",
    },
    {
      link: "/",
      label: "Careers",
    },
    {
      link: "/",
      label: "Privacy Policy",
    },
    {
      link: "/",
      label: "Cookie Policy",
    },
  ];

  const social = [
    {
      link: "/",
      icon: <FaFacebookF />,
    },
    {
      link: "/",
      icon: <FaInstagram />,
    },
    {
      link: "/",
      icon: <FaLinkedinIn />,
    },
    {
      link: "/",
      icon: <FaTwitter />,
    },
    {
      link: "/",
      icon: <FaYoutube />,
    },
  ];

  const help = [
    {
      link: "/",
      label: "Early Years Blog",
    },
    {
      link: "/",
      label: "Help Center",
    },
    {
      link: "/",
      label: "Contact Support",
    },
  ];

  return (
    <footer className="mt-auto bg-[#A3A3A3AA]">
      <div className="footer-container max-w-[100rem] mx-auto px-[5%] py-12 grid xl:grid-cols-5 lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 md:gap-5 gap-3">
        <div className="logo">
          <Link
            href="/"
            className="flex justify-center items-center flex-col font-bold text-sm w-max"
          >
            <div className="logo-img w-20">
              <Image
                width={1000}
                height={1000}
                className="object-cover w-full h-full"
                src="/assets/logo.png"
                alt="Lego House"
              />
            </div>
            <p className="text-[#6C6C6C]">LEGO HOUSE</p>
            <p className=" text-[#BC1823CC]">ARCHITECTURE</p>
          </Link>
        </div>
        <div className="platform">
          <h1 className="md:text-xl font-medium text-[#212327] md:mb-4 mb-1.5">Platform</h1>
          <ul>
            {platform.map((link, index) => (
              <li key={index} className="text-[#212327d4] md:my-1.5 my-0 md:text-base text-sm">
                <Link
                  href={link.link}
                  className="py-0.5 block w-full max-w-36 hover:text-[#BC1822] ease-in-out transition-all duration-150"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div className="access">
          <h1 className="md:text-xl font-medium text-[#212327] md:mb-4 mb-1.5">
            Quick Access
          </h1>
          <ul>
            {access.map((link, index) => (
              <li key={index} className="text-[#212327d4] md:my-1.5 my-0 md:text-base text-sm">
                <Link
                  href={link.link}
                  className="py-0.5 block w-full max-w-36 hover:text-[#BC1822] ease-in-out transition-all duration-150"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div className="about">
          <div className="about-1 mb-5">
            <h1 className="md:text-xl font-medium text-[#212327] md:mb-4 mb-1.5">About</h1>
            <ul>
              {about.map((link, index) => (
                <li key={index} className="text-[#212327d4] md:my-1.5 my-0 md:text-base text-sm">
                  <Link
                    href={link.link}
                    className="py-0.5 block w-full max-w-36 hover:text-[#BC1822] ease-in-out transition-all duration-150"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div className="about-2">
            <h1 className="md:text-xl font-medium text-[#212327] md:mb-4 mb-1.5">
              Connect with us
            </h1>
            <ul className=" flex items-center md:text-xl text-base">
              {social.map((link, index) => (
                <li key={index} className="text-[#212327d4] md:my-1.5 my-0 mx-1">
                  <Link
                    href={link.link}
                    className="w-full border border-[#212327d4] p-2 grid place-items-center hover:bg-[#212327d4] hover:text-white duration-150 ease-in-out transition-all"
                  >
                    {link.icon}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="help">
          <div className="help-1 md:mb-8 mb-5">
            <h1 className="md:text-xl font-medium text-[#212327] md:mb-4 mb-1.5">
              Get Help
            </h1>
            <ul>
              {help.map((link, index) => (
                <li key={index} className="text-[#212327d4] md:my-1.5 my-0 md:text-base text-sm">
                  <Link
                    href={link.link}
                    className="py-0.5 block w-full max-w-36 hover:text-[#BC1822] ease-in-out transition-all duration-150"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div className="help-2">
            <Link
              href="/contact-us"
              className="bg-[#BC1822] text-white md:px-8 px-6 md:py-4 py-3 block w-fit"
            >
              Contact Us
            </Link>
            <Link
              href="/"
              className="mt-7 md:px-8 px-6 md:py-4 py-3 border border-[#BC1822] text-[#BC1822] font-medium block w-fit text-center"
            >
              <p>Call sales</p>
              <p>9696125044</p>
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
