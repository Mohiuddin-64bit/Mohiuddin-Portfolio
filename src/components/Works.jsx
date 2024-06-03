import React, { useState } from "react";
import { Tilt } from "react-tilt";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { github, internet, reactjs, tailwind } from "../assets";
import { SectionWrapper } from "../hoc";
import { projects } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";
import { Link } from "react-router-dom";
import { useGetAllProjectsQuery } from "../redux/feature/projects/projectsAPI";

const ProjectCard = ({
  index,
  name,
  description,
  tags,
  technology,
  imageLink,
  source_code_link,
  live_site
}) => {

  const technologies = technology.split(', ');


  return (
    <motion.div>
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
              src={imageLink}
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

            <p className='mt-2 text-white-100 text-[14px]'
              dangerouslySetInnerHTML={{
                __html: description?.slice(0, 300),
              }}
            ></p>
          </div>
        </div>

        <div className="mt-4 flex flex-wrap gap-1">
          {technologies.map((tech, index) => (
            <p
              key={index}
              className={`lg:text-[14px] text-white text-[10px] px-4 mx-auto bg-sky-950 rounded-lg lg:py-2 py-1 `}
            >
              {tech}
            </p>
          ))}
        </div>
      </Tilt>
    </motion.div>
  );
};

const Works = () => {

  const { data: projects, isLoading, isError } = useGetAllProjectsQuery()

  console.log(projects)





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
      {isLoading && <p>Loading...</p>}
        {isError && <p>Error: {isError}</p>}
        {projects && projects.length === 0 && <p>No projects found</p>}
        {projects?.slice(0, 3)?.map((blog, index) => (
          <Link to={`/projects/${blog?._id}`} key={blog._id}>
            <ProjectCard  {...blog} index={index} />
          </Link>
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(Works, "work");
