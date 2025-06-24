import React from "react";
import Button from "./Button";
import Arrow from "../assets/arrow.svg";
import iclinked from "../assets/iconlinkedin.svg";
import icig from "../assets/iconig.svg";
import icx from "../assets/iconx.svg";
import icfacebook from "../assets/iconfb.svg";
import logobiru from "../assets/bluelogo.svg";

const Footer = () => {
  return (
    <div
      className="relative min-h-screen bg-blue-100 overflow-hidden"
      style={{ clipPath: "polygon(0% 0, 100% 0%, 100% 100%, 0 100%)" }}
    >
      <div className="fixed min-h-screen w-full bottom-0 bg-blue-100">
        {/* 2 COLUMN*/}
        <div className="flex flex-col lg:flex-row h-fit w-full justify-between items-start md:items-end px-5 md:px-30 space-y-5 pt-5 md:pt-10 pb-5 md:pb-14">
          <div className="flex flex-col h-fit md:gap-5 gap-2">
            <span className="font-inter text-base text-primary leading-[150%]">
              Ready to Grow?
            </span>
            <h1 className="text-lg md:w-[882px] tracking-lg leading-[130%] md:text-2xl font-inter md:tracking-2xl md:leading-[120%] text-primary">
              Let's talk smart strategy for your digital growth
            </h1>
          </div>

          <Button
            paddingx="px-6"
            title="Let’s talk"
            icon={Arrow}
            bgcolor="bg-primary"
            textcolor="text-white"
          />
        </div>

        {/* 3 COLUMN*/}
        <div className="flex flex-wrap md:flex-nowrap md:flex-row justify-between h-full w-full px-5 md:px-30 pt-5 md:pt-10 pb-5 md:pb-20">
          {/* link */}
          <div className="flex flex-col gap-5 w-fit max-h-fit md:pr-[250px]">
            <a
              href=""
              className="cursor-pointer hover:text-primary/80 font-inter text-lg text-primary tracking-lg leading-[140%] md:text-xl md:tracking-xl md:leading-[130%]"
            >
              About
            </a>
            <a
              href=""
              className="cursor-pointer hover:text-primary/80 font-inter text-lg text-primary tracking-lg leading-[140%] md:text-xl md:tracking-xl md:leading-[130%]"
            >
              Services
            </a>
            <a
              href=""
              className="cursor-pointer hover:text-primary/80 font-inter text-lg text-primary tracking-lg leading-[140%] md:text-xl md:tracking-xl md:leading-[130%]"
            >
              Works
            </a>
            <a
              href=""
              className="cursor-pointer hover:text-primary/80 font-inter text-lg text-primary tracking-lg leading-[140%] md:text-xl md:tracking-xl md:leading-[130%]"
            >
              Career
            </a>
          </div>
          {/* address */}
          <div className="flex flex-col w-fit h-full">
            <span className="font-inter text-primary font-medium text-sm leading-[150%] pb-2">
              Office
            </span>
            <div className="flex flex-col gap-2 pb-5">
              <p className="font-inter text-base text-primary leading-[150%] font-light w-[200px]">
                Ichiban Kakoii. No 50. 1F Bumi Serong Dikit, Tangerang
              </p>
              <p className="font-inter text-base text-primary leading-[150%] font-light w-[200px]">
                Ichiban Kawaii. No 48. 2F Cicilelebedug, Tangerang Selatan
              </p>
            </div>
            <span className="font-inter text-primary font-medium text-sm leading-[150%] pb-2">
              Follow us
            </span>
            <div className="flex max-h-fit w-fit gap-2">
              <img src={iclinked} loading="lazy" className="cursor-pointer" />
              <img src={icx} loading="lazy" className="cursor-pointer" />
              <img src={icfacebook} loading="lazy" className="cursor-pointer" />
              <img src={icig} loading="lazy" className="cursor-pointer" />
            </div>
          </div>
          {/* logo */}
          <div className="flex w-full pt-20 md:pt-0 -ml-5 md:ml-0 justify-start md:justify-end items-start">
            <img src={logobiru} loading="lazy" />
          </div>
        </div>

        {/* copyright */}
        <div className="relative w-full h-fit px-4 md:px-30">
          <div className="flex flex-wrap md:flex-nowrap justify-start md:justify-end items-center gap-5">
            <a
              href=""
              className="cursor-pointer text-xs leading-[150%] text-primary/80"
            >
              Terms&Conditions
            </a>
            <a
              href=""
              className="cursor-pointer text-xs leading-[150%] text-primary/80"
            >
              Privacy Policy
            </a>
            <a
              href=""
              className="cursor-pointer text-xs leading-[150%] text-primary/80"
            >
              ©2025 Corpyor. All rights reserved.
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
