import { Socials } from "../../../constans/index";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Navbar = () => {
  return (
    <div className="w-full h-[65px] fixed top-0 shadow-lg shadow-[#42e0f861]/50 bg-[#ffffff04] backdrop-blur-md z-50 px-10">
      <div className="w-full h-full flex flex-row items-center justify-between m-auto px-[10px]">
        <a
          href="#about-me"
          className="h-auto w-auto flex flex-row items-center"
        >
          <Image
            src="/logo.png"
            alt="logo"
            width={70}
            height={70}
            className="cursor-pointer hover:animate-slowspin"
          />

          <span className="font-bold ml-[10px] hidden md:block text-gray-300">
            FaizalHamka-Dev
          </span>
        </a>

        <div className="w-[500px] h-full flex flex-row items-center justify-between md:mr-20">
          <div className="flex items-center justify-between w-full h-auto border border-[#42bef861] bg-[#ffffff14] mr-[15px] px-[20px] py-[10px] rounded-full text-gray-200 ">
            <Link href="/" className="cursor-pointer hover:text-[#9ffeff]">
              About
            </Link>
            <Link
              href="/articles"
              className="cursor-pointer hover:text-[#9ffeff]"
            >
              Articles
            </Link>
            <Link
              href="/contact"
              className="cursor-pointer hover:text-[#9ffeff]"
            >
              Contact
            </Link>
          </div>
        </div>

        <div className="flex flex-row gap-5">
          {Socials.map((social) => (
            <Link href={social.link} key={social.name} target="_blank">
              <Image
                src={social.src}
                alt={social.name}
                key={social.name}
                width={48}
                height={24}
              />
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
