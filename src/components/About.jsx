import React from "react";
import { Tilt } from "react-tilt";
import { motion } from "framer-motion";

import { styles } from "../styles";

import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";
import { skills } from "../constants";

const ServiceCard = ({ index, title, icon }) => (
  <Tilt className="w-full">
    <motion.div
      variants={fadeIn("right", "spring", index * 0.5, 0.75)}
      className="w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card"
    >
      <div
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className="bg-primary rounded-[20px] py-5 px-12 min-h-[100px] flex justify-evenly items-center flex-col"
      >
        <img
          src={icon}
          alt="web-development"
          className="w-16 h-16 object-contain"
        />

        <h3 className="text-white text-[17px] font-bold text-center">
          {title}
        </h3>
      </div>
    </motion.div>
  </Tilt>
);

const About = () => {
  return (
    <>
      <motion.div className="mt-4" variants={textVariant()}>
        <p className={`${styles.sectionSubText} text-black-200`}>
          Introduction
        </p>
        <h2 className={`${styles.sectionHeadText} text-black-200`}>
          Overview.
        </h2>
      </motion.div>

      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className="mt-4  text-gray-600 text-[17px] max-w-3xl leading-[30px]"
      >
        I have a strong foundation in front-end development and am always
        looking to improve my skills and learn new technologies. In my free
        time, I enjoy working on personal projects and contributing to open
        source projects. I believe that collaboration and sharing knowledge is
        an important part of being a developer and I am always happy to help
        others and learn from others in the community. Thank you for visiting my
        profile. I hope you find my work interesting and feel free to reach out
        if you have any questions or want to collaborate on a project.
      </motion.p>
      <div className="mt-20 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-5">
        {skills.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(About, "about");
