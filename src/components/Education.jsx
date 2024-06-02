import React from 'react'
import { motion } from "framer-motion";

import { SectionWrapper } from '../hoc';
import { fadeIn, textVariant } from '../utils/motion';
import { styles } from '../styles';

const Education = () => {
  return (
    <div className='grid grid-cols-1 lg:grid-cols-2 gap-12'>
      <div>
        <motion.div variants={textVariant()}>
          <h2 className="text-transparent bg-clip-text bg-primary text-3xl font-bold pb-3">
            My Experience
          </h2>
        </motion.div>

        <div className="w-full flex">
          <motion.div
            variants={fadeIn("", "", 0.1, 1)}
            className="mt-3 text-gray-600 text-[17px] max-w-3xl leading-[30px]"
          >
            <div className='bg-primary w-full lg:w-[550px] shadow-2xl rounded-2xl px-5 py-3 pb-5 mb-5'>
              <h3 className="text-white-100 text-[20px] font-semibold mt-5">
                2024 - Present
              </h3>
              <h2 className="text-white-100 text-2xl font-bold mt-2">
                Front-End Developer
              </h2>
              <p className="text-white-100 text-[17px] mt-2">
                Remote Job - Full Time
              </p>
            </div>
            <div className='bg-primary w-full lg:w-[550px] shadow-2xl rounded-2xl px-5 py-3 pb-5 '>
              <h3 className="text-white-100 text-[20px] font-semibold mt-5">
                Sep 2023 - Dec 2023
              </h3>
              <h2 className="text-white-100 text-2xl font-bold mt-2">
                Intern - Front-End Developer
              </h2>
              <p className="text-white-100 text-[17px] mt-2">
                Remote Intern - Full Time
              </p>
            </div>
          </motion.div>
        </div>
      </div>
      <div>
        <div>
          <motion.div variants={textVariant()}>
            <h2 className="text-transparent bg-clip-text bg-primary text-3xl font-bold pb-3">
              My Education
            </h2>
          </motion.div>

          <div className="w-full flex">
            <motion.div
              variants={fadeIn("", "", 0.1, 1)}
              className="mt-3 text-gray-600 text-[17px] max-w-3xl leading-[30px]"
            >
              <div className='bg-primary w-full lg:w-[550px] shadow-2xl rounded-2xl px-5 py-3 pb-5 mb-5'>
                <h3 className="text-white-100 text-[20px] font-semibold mt-5">
                  2020 - Present
                </h3>
                <h2 className="text-white-100 text-2xl font-bold mt-2">
                  Diploma in Computer Technology
                </h2>
                <p className="text-white-100 text-[17px] mt-2">
                  AITVET, Dhaka
                </p>
              </div>
              <div className='bg-primary w-full lg:w-[550px] shadow-2xl rounded-2xl px-5 py-3 pb-5 '>
                <h3 className="text-white-100 text-[20px] font-semibold mt-5">
                  2020
                </h3>
                <h2 className="text-white-100 text-2xl font-bold mt-2">
                  Secondary School Certificate
                </h2>
                <p className="text-white-100 text-[17px] mt-2">
                  Motijheel Model High School, Dhaka
                </p>
              </div>
            </motion.div>
          </div>
        </div>

      </div>
    </div>
  )
}

export default SectionWrapper(Education, "education");