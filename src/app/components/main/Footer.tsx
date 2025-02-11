import React from "react";
import {
  RxDiscordLogo,
  RxGithubLogo,
  RxInstagramLogo,
  RxTwitterLogo,
  RxLinkedinLogo,
} from "react-icons/rx";

import { FaWhatsapp } from "react-icons/fa";

import { FaMedium } from "react-icons/fa6";

const Footer = () => {
  return (
    <div className="w-full h-full bg-black text-gray-200 shadow-lg p-[15px] pt-20">
        <div className="w-full flex flex-col items-center justify-center m-auto px-36">
            <div className="w-full h-full flex flex-row items-center flex-wrap gap-10">
                

                <div className="min-w-[100px] h-auto flex flex-col items-start justify-start">
                    <div className="font-bold text-[20px]">Community</div>
                    <p className="flex flex-row items-center my-[10px] cursor-pointer">
                        <RxLinkedinLogo className="text-3xl"/>
                        <span className="text-[15px] ml-[6px]">Youtube</span>    
                    </p>
                    <p className="flex flex-row items-center my-[10px] cursor-pointer">
                        <RxGithubLogo className="text-3xl"/>
                        <span className="text-[15px] ml-[6px]">Github</span>    
                    </p>
                    <p className="flex flex-row items-center my-[10px] cursor-pointer">
                        <FaMedium className="text-3xl"/>
                        <span className="text-[15px] ml-[6px]">Discord</span>    
                    </p>
                    <p className="flex flex-row items-center my-[10px] cursor-pointer">
                        <FaWhatsapp className="text-3xl"/>
                        <span className="text-[15px] ml-[6px]">Discord</span>    
                    </p>
                </div>
                <div className="min-w-[200px] h-auto flex flex-col items-start justify-start">
                    <div className="font-bold text-[16px]">About</div>
                   <p className="flex flex-row items-center my-[15px] cursor-pointer">
                     
                        <span className="text-[15px] ml-[6px]">Become Sponsor</span>    
                    </p>
                    <p className="flex flex-row items-center my-[15px] cursor-pointer">
                      
                        <span className="text-[15px] ml-[6px]">Learning about me</span>    
                    </p>
                    <p className="flex flex-row items-center my-[15px] cursor-pointer">
                  
                        <span className="text-[15px] ml-[6px]">mifwebchain@gmail.com</span>    
                    </p>
                </div>
            </div>

            <div className="my-[20px] text-[15px] text-center">
                &copy; Faizal Hamka Dev 2025 Inc. All rights reserved
            </div>
        </div>
    </div>
  )
}

export default Footer