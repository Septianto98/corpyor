import { motion } from "framer-motion";
import logo1 from "../assets/logo01.svg";
import logo2 from "../assets/logo02.svg";
import logo3 from "../assets/logo03.svg";
import logo4 from "../assets/logo04.svg";
import logo5 from "../assets/logo05.svg";
import logo6 from "../assets/logo06.svg";
import logo7 from "../assets/logo07.svg";

const OurClients = () => {
  const logoClients = [logo1, logo2, logo3, logo4, logo5, logo6, logo7];

  return (
    <div className="relative h-fit w-screen px-4 md:px-30 py-20 md:pt-20 md:pb-30 bg-white">
      <div className="flex mask-x-from-80% mask-x-to-100% h-full w-full overflow-x-hidden">
        <motion.div
          initial={{ x: 0 }}
          animate={{ x: "-100%" }}
          transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
          className="flex flex-shrink-0 items-center"
        >
          {logoClients.map((image, index) => {
            return (
              <img
                loading="lazy"
                className="h-10 w-56 saturate-0 hover:saturate-100 lg:h-fit lg:w-60 pr-10 lg:pr-20"
                src={image}
                key={index}
              />
            );
          })}
        </motion.div>

        <motion.div
          initial={{ x: 0 }}
          animate={{ x: "-100%" }}
          transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
          className="flex flex-shrink-0  items-center"
        >
          {logoClients.map((image, index) => {
            return (
              <img
                loading="lazy"
                className="h-10 w-fit saturate-0 hover:saturate-100 lg:h-fit lg:w-60 pr-10 lg:pr-20"
                src={image}
                key={index}
              />
            );
          })}
        </motion.div>
      </div>
    </div>
  );
};

export default OurClients;
