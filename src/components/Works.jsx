import React, { useState } from "react";
import { Tilt } from "react-tilt";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { github, internet, reactjs, tailwind } from "../assets";
import { SectionWrapper } from "../hoc";
import { projects } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";

const ProjectCard = ({
  index,
  name,
  description,
  tags,
  image,
  source_code_link,
  live_site
}) => {
  const [readMore, setReadMore] = useState(false);
  console.log(readMore);
  return (
    <motion.div variants={fadeIn("up", "spring", index * 0.5, 0.75)}>
      <Tilt
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className="bg-primary flex flex-col justify-between p-5 rounded-2xl sm:w-[360px] w-full"
      >
        <div>
          <div className="relative w-full ">
            <img
              className="w-full h-[230px] object-cover rounded-2xl"
              src={image}
              alt=""
            />
            <div className="absolute inset-0 flex justify-end m-3 card-img_hover">
              <div className="flex flex-col gap-1">
                <div
                  className="black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer"
                  onClick={() => window.open(source_code_link, "_blank")}
                >
                  <img
                    src={github}
                    className="w-1/2 h-1/2 object-contain"
                    alt=""
                  />
                </div>
                <div
                  className="black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer"
                  onClick={() => window.open(live_site, "_blank")}
                >
                  <img
                    src={internet}
                    className="w-1/2 h-1/2 object-contain"
                    alt=""
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="mt-5 ">
            <h3 className="text-white font-bold text-[24px]">{name}</h3>
            <p className="mt-2 text-white-100 text-[14px]">
              {readMore ? (
                <>{description} </>
              ) : (
                <>{description.slice(0, 190)}... </>
              )}
              <span
                className="text-blue-600 text-sm cursor-pointer hover:text-blue-700"
                onClick={() => setReadMore(!readMore)}
              >
                Read More
              </span>
            </p>
          </div>
        </div>

        <div className="mt-4  flex flex-wrap gap-2">
          {tags.map((tag) => (
            <p
              key={tag.name}
              className={`lg:text-[14px] text-[10px] px-4 mx-auto bg-sky-950 rounded-lg lg:py-2 py-1 `}
            >
              <span>
                <img className="w-6 h-6 mx-auto" src={tag.icon} alt="" />
              </span>
              {tag.name}
            </p>
          ))}
        </div>
      </Tilt>
    </motion.div>
  );
};

const Works = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={`${styles.sectionSubText} text-black-200`}>My work</p>
        <h2 className={`${styles.sectionHeadText} text-black-200`}>
          Projects.
        </h2>
      </motion.div>

      <div className="w-full flex">
        <motion.p
          variants={fadeIn("", "", 0.1, 1)}
          className="mt-3 text-gray-600 text-[17px] max-w-3xl leading-[30px]"
        >
          Following projects showcases my skills and experience through
          real-world examples of my work. Each project is briefly described with
          links to code repositories and live demos in it. It reflects my
          ability to solve complex problems, work with different technologies,
          and manage projects effectively.
        </motion.p>
      </div>
      <div className="mt-20 flex flex-wrap gap-7">
        {projects.map((project, index) => (
          <ProjectCard key={`project-${index}`} index={index} {...project} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(Works, "work");
