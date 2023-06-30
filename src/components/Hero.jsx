import React from "react";
import { styles } from "../styles.js";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <>
      <section className="relative w-full h-screen mx-auto">
        <div
          className={`absolute inset-0 top-[200px]  max-w-7xl mx-auto ${styles.paddingX} flex flex-row items-start gap-5`}
        >
          <div className="flex flex-col justify-center items-center mt-5">
            <div className="w-1 lg:h-80 h-40 violet-gradient" />
          </div>
          <div>
            <h1 className={`${styles.heroHeadText} text-[#090325]`}>
              Hi, I'm <br /> <span className="text-primary">Mohiuddin</span>
            </h1>
            <p className={`${styles.heroSubText} mt-8  text-black-100`}>
              I am a Web Developer, user <br className="sm:block hidden" />
              interfaces.
            </p>
            <motion.button
              whileHover={{ scale: 1.2 }}
              className=" my-5 md:mt-12 text-white md:p-2 p-1 lg:p-4 rounded-lg bg-primary "
            >
              Download Resume
            </motion.button>
          </div>
          <motion.div
            initial={{ scale: 0 }}
            animate={{ rotate: 360, scale: 1 }}
            whileHover={{ scale: 1.2 }}
            transition={{
              type: "spring",
              stiffness: 260,
              damping: 20,
            }}
          >
            <img
              className="w-full h-full"
              src={`https://i.ibb.co/n3RXGNZ/pngwing-com.png`}
              alt="Profile"
            />
          </motion.div>
        </div>
        {/* <ComputersCanvas /> */}
      </section>
    </>
  );
};

export default Hero;
