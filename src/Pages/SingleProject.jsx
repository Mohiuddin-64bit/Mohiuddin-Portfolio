import React from 'react'
import { fadeIn, textVariant } from "../utils/motion";
import { motion } from "framer-motion";
import { styles } from '../styles';
import { SectionWrapper } from '../hoc';
import { useParams } from 'react-router-dom';
import { projects } from '../constants';
import { snapSchool } from '../assets';

const SingleProject = () => {
  const { id } = useParams();

  const singleProject = projects.find(project => project.id === id);
  console.log(singleProject)

  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={`${styles.sectionSubText} text-black-200`}>Single Project</p>
        <h2 className={`${styles.sectionHeadText} text-black-200`}>
          {singleProject.name}
        </h2>
      </motion.div>

      <div className="w-full flex">
        <motion.p
          variants={fadeIn("", "", 0.1, 1)}
          className="mt-3 text-gray-600 text-[17px] max-w-3xl leading-[30px]"
        >
          {singleProject.description}
        </motion.p>
      </div>
      <div className='grid grid-cols-2 mt-12 justify-between'>
        <div>
          <h3 className='text-3xl text-black-200'>Technologies used</h3>
          <div className='flex flex-wrap gap-4 mt-4'>
            {singleProject.tags.map(tag => (
              <div
                key={tag.name}
                className={`flex items-center gap-2 py-1 px-2 rounded-lg bg-gray-100`}
              >
                <img src={tag.icon} alt="" className='w-6 h-6' />
                <p className={`text-[14px] ${tag.color}`}>{tag.name}</p>
              </div>
            ))}

            <div className='mt-8'>
              <h3 className='text-3xl text-black-200'>Project Links</h3>
              <div className='flex flex-wrap gap-4'>
                <a
                  href="https://snap-school.netlify.app/"
                  target="_blank"
                  rel="noreferrer"
                  className='btn-primary'
                >
                  Live Site
                </a>
                <a
                  href="https://snap-school.netlify.app/"
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
          <img className='w-full h-full rounded-lg' src={singleProject.image} alt="" />
      </div>
    </>
  )
}

export default SectionWrapper(SingleProject, "singleProject");