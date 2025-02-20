import React from "react";
import { RxGithubLogo, RxLinkedinLogo } from "react-icons/rx";

import { FaWhatsapp } from "react-icons/fa";

import { FaMedium } from "react-icons/fa6";
import Link from "next/link";

const Footer = () => {
  return (
    <div className="w-full h-full bg-black text-gray-200 shadow-lg p-[15px] mt-6 pt-10">
      <div className="w-full flex flex-col items-center justify-center m-auto px-36">
        <div className="w-full h-full flex xl:flex-row flex-col items-start gap-5 justify-start xl:justify-between">
          <div className="min-w-[100px] xl:order-2 h-auto flex flex-col items-start">
            <div className="font-bold text-[20px]">Community</div>
            <div className="flex flex-row gap-4">
              <Link
                href="https://www.linkedin.com/in/ilham-faizal-hamka/"
                target="_blank"
                className="flex flex-row items-center my-[10px] cursor-pointer"
              >
                <RxLinkedinLogo className="text-3xl" />
                <span className="text-[15px] ml-[6px]">Linkedin</span>
              </Link>
              <Link
                href="https://github.com/Ilham-Faizal-Hamka"
                target="_blank"
                className="flex flex-row items-center my-[10px] cursor-pointer"
              >
                <RxGithubLogo className="text-3xl" />
                <span className="text-[15px] ml-[6px]">Github</span>
              </Link>
            </div>
            <div className="flex flex-row gap-4">
              <Link
                href="https://medium.com/@faizalhamka45.dev"
                className="flex flex-row items-center my-[10px] cursor-pointer"
              >
                <FaMedium className="text-3xl" />
                <span className="text-[15px] ml-[6px]">Medium</span>
              </Link>
              <Link
                href="https://wa.me/6281337863325"
                target="_blank"
                className="flex flex-row items-center my-[10px] cursor-pointer"
              >
                <FaWhatsapp className="text-3xl" />
                <span className="text-[15px] ml-[6px]">Whatsapp</span>
              </Link>
            </div>
          </div>
          <div className="max-w-[600px] xl:order-1 h-auto flex flex-col items-start justify-start">
            <div className="font-bold text-[20px]">Faizal Hamka</div>
            <p className="text-white text-[15px]">
              Open for discussion! Feel free to reach out via social media on
              the side. Stay updated with my latest insights on programming
              through my Medium and this blog. I&apos;m ready to help you find
              the best solutions for your needs!
            </p>
          </div>
        </div>

        <div className="my-[20px] text-[15px] text-center">
          &copy; Faizal Hamka Dev 2025 Inc. All rights reserved
        </div>
      </div>
    </div>
  );
};

export default Footer;
