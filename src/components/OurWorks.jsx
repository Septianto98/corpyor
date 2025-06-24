import { useScroll, motion, useTransform } from "framer-motion";
import { useRef } from "react";
import work1 from "../assets/work01.webp";
import work2 from "../assets/work02.webp";
import work3 from "../assets/work03.webp";
import work4 from "../assets/work04.webp";
import work5 from "../assets/work05.webp";
import arrowbiru from "../assets/bluearrow.svg";

const dataWorks = [
  {
    id: 1,
    imageSource: work1,
    name: "Mbohkelalen",
    detailWork: "Branding, Digital Marketing",
  },
  {
    id: 2,
    imageSource: work2,
    name: "Jajanmie",
    detailWork: "Branding, Digital Marketing",
  },
  {
    id: 3,
    imageSource: work3,
    name: "Bakmitul",
    detailWork: "Branding, Digital Marketing",
  },
  {
    id: 4,
    imageSource: work4,
    name: "Sukidesuu",
    detailWork: "Web Design & Development",
  },
  {
    id: 5,
    imageSource: work5,
    name: "Kesapian",
    detailWork: "Digital Marketing",
  },
];

const OurWorks = () => {
  const targetRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: targetRef,
  });

  const x = useTransform(scrollYProgress, [0, 1], ["8%", "-75%"]);
  const opacity = useTransform(scrollYProgress, [0, 1], ["100%", "0%"]);

  return (
    <section
      ref={targetRef}
      className="relative h-[800vh] pt-10 -z-10 md:pt-20 bg-white "
    >
      <motion.div
        style={{ opacity }}
        className="flex sticky top-0 inset-0 justify-between items-end py-20 md:py-10 px-4 md:px-30 max-h-fit "
      >
        <h2 className="font-inter text-xl text-blackbase tracking-xl leading-[120%] ">
          Our works
        </h2>
        <div className="relative flex gap-2 items-center cursor-pointer">
          <button className=" flex font-inter text-base cursor-pointer text-primary">
            Select all works
          </button>
          <img src={arrowbiru} loading="lazy" className="size-5 md:size-6" />
        </div>
      </motion.div>
      <div className="sticky top-0 flex h-screen w-full -z-1 items-center overflow-hidden">
        <motion.div style={{ x }} className="flex gap-10 md:gap-12">
          {dataWorks.map((card) => {
            return <Card card={card} key={card.id} />;
          })}
        </motion.div>
      </div>
    </section>
  );
};

const Card = ({ card }) => {
  return (
    <div className="relative flex flex-col h-fit md:max-h-fit justify-center pt-32 md:pt-30 hover:scale-99 hover:rounded-lg hover:opacity-100 hover:text-primary cursor-pointer ">
      <div className="relative h-[340px] w-[250px] md:w-[324px] md:h-[504px] mb-2 ">
        <div className="absolute inset-0 rounded-sm bg-[#1a1a1a]/10 hover:opacity-0" />
        <img
          loading="lazy"
          src={card.imageSource}
          className="object-cover rounded-sm h-full w-full hover:scale-105 duration-200 transition-all "
        />
      </div>
      <p className="font-inter italic text-xs text-[#b3b3b3] leading-[150%] mt-2 group-hover:text-primary">
        {card.detailWork}
      </p>
      <h2 className="font-inter font-medium text-base  leading-[150%]">
        {card.name}
      </h2>
    </div>
  );
};

export default OurWorks;
