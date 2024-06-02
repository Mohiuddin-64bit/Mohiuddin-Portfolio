import React from "react";
import { styles } from "../styles.js";
import { motion } from "framer-motion";
import { fadeIn } from "../utils/motion.js";
import Lottie from "lottie-react";
import computer from "../assets/computer.json";

const Hero = () => {
  return (
    <>
      <section className="bg-hero-background bg-center bg-no-repeat bg-cover relative w-full h-screen mx-auto">
        <div
          className={`absolute inset-0 top-[120px] lg:top-[220px]  max-w-7xl mx-auto ${styles.paddingX} lg:flex  items-start gap-5`}
        >
          <div className="flex gap-4">
            <div>
              <h1 className={`${styles.heroHeadText} text-[#090325]`}>
                Hi, I'm <br />{" "}
                <span className=" text-transparent bg-clip-text bg-primary">
                  Mohiuddin
                </span>
              </h1>
              <p className={`${styles.heroSubText} lg:mt-8  text-black-100`}>
                I am a MERN Stack Developer Specialized in React.js
              </p>
              <motion.button
                whileHover={{ scale: 1.2 }}
                className="btn-primary cursor-pointer"
                onClick={() => {
                  const link = document.createElement('a');
                  link.href = 'https://drive.google.com/uc?export=download&id=1-JCsMrueUt9PZVmo4PAIP_FR3OqaMrCz';
                  link.download = 'resume.pdf';
                  link.click();
                }}
                type="file"
              >
                Download Resume
              </motion.button>
            </div>
          </div>
          <div className="mt-16 lg:mt">
            <Lottie className="w-full" animationData={computer} />
          </div>
        </div>
        {/* <div className="header_fade-in absolute z-10"></div> */}
      </section>
    </>
  );
};

export default Hero;
