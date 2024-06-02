import { useParams } from 'react-router-dom';
import { blogs } from '../constants';
import React from 'react'
import { fadeIn, textVariant } from "../utils/motion";
import { motion } from "framer-motion";
import { styles } from '../styles';
import { SectionWrapper } from '../hoc';

const SingleBlog = () => {
  const { id } = useParams();

  const singleBlogs = blogs.find(blog => blog.index === id);
  console.log(singleBlogs)


  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={`${styles.sectionSubText} text-black-200`}>Single Project</p>
        <div>
          <img src={singleBlogs.image} className='my-3' alt="" />
        </div>
        <h2 className={`${styles.sectionHeadText} text-black-200`}>
          {singleBlogs.name}
        </h2>
      </motion.div>

      <div className="w-full flex">
        <motion.p
          variants={fadeIn("", "", 0.1, 1)}
          className="mt-3 text-gray-600 text-[17px] max-w-3xl leading-[30px]"
        >
          {singleBlogs.description}
        </motion.p>
      </div>
    </>
  )
}

export default SectionWrapper(SingleBlog, "singleBlog");