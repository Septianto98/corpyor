import { useScroll, useTransform, motion } from "framer-motion";
import React, { useRef } from "react";

const ImageZoom = () => {
  const scrollRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: scrollRef,
    offset: ["start end", "end end"],
  });

  const clipPath = useTransform(
    scrollYProgress,
    [0.1, 1],
    [
      "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%, 0% 0%, 50% 40%, 50% 50%, 50% 50%, 50% 40%, 40% 40%)",
      "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%, 0% 0%, 0% 0%, 0% 100%, 100% 100%, 100% 0%, 0% 0%)",
    ]
  );

  const marqueeLogo = [
    "/src/assets/bluelogo.svg",
    "/src/assets/bluelogo.svg",
    "/src/assets/bluelogo.svg",
    "/src/assets/bluelogo.svg",
    "/src/assets/bluelogo.svg",
    "/src/assets/bluelogo.svg",
    "/src/assets/bluelogo.svg",
  ];

  return (
    <div ref={scrollRef} className="relative h-[250vh] bg-white">
      <div className="sticky top-0 h-screen">
        <div className="absolute inset-0 -z-10 ">
          <div className="absolute z-1 inset-0 bg-gradient-to-t from-[#1a1a1a] via-[#1a1a1a]/10 to-white/10" />
          <img
            src="../src/assets/img2.webp"
            loading="lazy"
            className="h-screen w-full object-cover"
          />
        </div>
        <motion.div
          className="absolute inset-0 flex flex-col -mt-2 justify-center items-center bg-white"
          style={{
            clipPath: clipPath,
          }}
        >
          <div className="flex h-full w-full overflow-hidden">
            <motion.div
              initial={{ x: 0 }}
              animate={{ x: "-100%" }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              className="flex flex-shrink-0 items-center"
            >
              {marqueeLogo.map((image, index) => {
                return (
                  <img
                    className="h-16 w-72 lg:h-40 lg:w-100 pr-10 lg:pr-20"
                    src={image}
                    key={index}
                  />
                );
              })}
            </motion.div>

            {/* duplicate */}
            <motion.div
              initial={{ x: 0 }}
              animate={{ x: "-100%" }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              className="flex flex-shrink-0 items-center"
            >
              {marqueeLogo.map((image, index) => {
                return (
                  <img
                    className="h-16 w-72 lg:h-40 lg:w-100 pr-10 lg:pr-20"
                    src={image}
                    key={index}
                  />
                );
              })}
            </motion.div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default ImageZoom;
