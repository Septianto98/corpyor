import { motion } from "framer-motion";
import arrow1 from "../assets/arrowellipse.svg";

const DetailServices = ({ dataServices, onClick, isOpen }) => {
  return (
    <div className="border-b border-[#b3b3b3]/100 overflow-hidden">
      <div
        onClick={onClick}
        className="flex justify-between cursor-pointer py-5 "
      >
        <motion.h3
          initial={{ y: 48, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ ease: "easeInOut", duration: 0.75, delay: 0.2 }}
          className="text-lg font-inter leading-[140%] tracking-lg text-blackbase md:text-xl] md:leading-[130%]  md:tracking-xl"
        >
          {dataServices.service}
        </motion.h3>
        <img
          loading="lazy"
          src={arrow1}
          className={`ease-in-out duration-300 ${isOpen ? "rotate-45" : "rotate-0"}`}
        />
      </div>
      <p
        className={`text-sm text-[#4d4d4d] leading-[150%] md:text-base ease-in-out duration-500 font-inter ${isOpen ? "h-full pb-5" : "max-h-0"}`}
      >
        {dataServices.detailservice}
      </p>
    </div>
  );
};

export default DetailServices;
