import React from 'react'
import { fadeIn, textVariant } from "../utils/motion";
import { motion } from "framer-motion";
import { styles } from '../styles';
import { SectionWrapper } from '../hoc';
import { useParams } from 'react-router-dom';
import { projects } from '../constants';
import { snapSchool } from '../assets';
import { useGetAllProjectsQuery } from '../redux/feature/projects/projectsAPI';

const SingleProject = () => {
  const { id } = useParams();
  console.log(id)

  const { data: projects, isLoading, isError } = useGetAllProjectsQuery()

  const singleProject = projects?.find(project => project._id === id);

  console.log(projects)

  if (isLoading) return <h1>Loading...</h1>

  if (isError) return <h1>Error</h1>

  const technologies = singleProject?.technology.split(', ');




  return (
    <>
      <motion.div>
        <p className={`${styles.sectionSubText} text-black-200`}>Single Project</p>
        <h2 className={`${styles.sectionHeadText} text-black-200`}>
          {singleProject?.title}
        </h2>
      </motion.div>
      <div className="w-full flex">
        <motion.p
          // variants={fadeIn("", "", 0.1, 1)}
          className="mt-3 text-gray-600 text-[17px] max-w-3xl leading-[30px]"
          dangerouslySetInnerHTML={{
            __html: typeof description === 'string' ? description.slice(0, 300) : '',
          }}>

        </motion.p>

      </div>
      <div className='grid grid-cols-1 md:grid-cols-2  mt-12 justify-between'>
        <div>
          <h3 className='text-3xl text-black-200'>Technologies used</h3>
          <div className='flex flex-wrap gap-4 mt-4'>
            <div className="mt-4 grid grid-cols-4 justify-items-start gap-1">
              {technologies.map((tech, index) => (
                <p
                  key={index}
                  className={`lg:text-[14px] text-white text-[10px] px-4 mx-auto bg-sky-950 rounded-lg lg:py-2 py-1 `}
                >
                  {tech}
                </p>
              ))}
            </div>

            <div className='mt-8'>
              <h3 className='text-3xl text-black-200'>Project Links</h3>
              <div className='flex flex-wrap gap-4'>
                <a
                  href={singleProject?.liveLink}
                  target="_blank"
                  rel="noreferrer"
                  className='btn-primary'
                >
                  Live Site
                </a>
                <a
                  href={singleProject?.githubLink}
                  target="_blank"
                  rel="noreferrer"
                  className='btn-primary'
                >
                  Source Code
                </a>
              </div>
            </div>
          </div>
        </div>
        <img className='w-full h-full rounded-lg' src={singleProject?.imageLink} alt="" />
      </div>
    </>
  )
}

export default SectionWrapper(SingleProject, "singleProject");