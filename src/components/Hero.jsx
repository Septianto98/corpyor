import gambarhero from "../assets/hero.webp";
import arrow from "../assets/arrow.svg";
import icon1 from "../assets/icontrust.svg";
import icon2 from "../assets/iconproject.svg";
import icon3 from "../assets/iconindusty.svg";
import { useRef } from "react";
import { useScroll, useTransform, motion } from "framer-motion";

const Hero = () => {
  const sectionRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], ["-10%", "70%"]);

  return (
    <div className="relative h-screen overflow-hidden">
      <motion.div className="absolute w-full h-[110%] -z-10" style={{ top: y }}>
        <img
          src={gambarhero}
          loading="lazy"
          alt="hero"
          className="h-full w-full object-cover"
        />
      </motion.div>
      <div className="flex h-full w-full justify-between items-end px-4 py-10 z-10 lg:py-12 lg:px-30">
        <div className="flex flex-col justify-end">
          <h1 className="text-xl font-inter tracking-xl leading-[120%] md:leading-[120%] md:tracking-2xl text-whitebase md:text-2xl">
            Beyond ordinary <br /> marketing, We build <br />
            digital worlds
          </h1>
          <div className="flex gap-5">
            <SocialProof
              src={icon1}
              jumlah="200+"
              detail="Trusted loyal clients"
            />
            <SocialProof src={icon2} jumlah="200+" detail="Projects done" />
            <SocialProof src={icon3} jumlah="50+" detail="Industries covered" />
          </div>
        </div>
        <div className="flex gap-2 items-center">
          <p className="text-whitebase font-light font-inter tracking-wide text-xs md:text-sm">
            Scroll
          </p>
          <img
            src={arrow}
            alt="arrow"
            loading="lazy"
            className="size-4 rotate-90"
          />
        </div>
      </div>
    </div>
  );
};

//component
const SocialProof = (props) => {
  return (
    <div className="flex gap-4 md:gap-5 relative items-start max-h-fit pt-5 md:pt-10">
      <div className="relative flex flex-col">
        <div className="relative flex justify-start items-center gap-2">
          <img src={props.src} loading="lazy" />
          <span className="font-inter text-sm md:text-base leading-[150%] text-whitebase">
            {props.jumlah}
          </span>
        </div>
        <p className="font-inter pt-1 text-xs font-light md:text-sm leading-[150%] text-white/80">
          {props.detail}
        </p>
      </div>
    </div>
  );
};

export default Hero;
