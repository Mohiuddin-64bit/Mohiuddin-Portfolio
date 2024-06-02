import React from 'react'
import { motion } from "framer-motion";

import { SectionWrapper } from '../hoc';
import { fadeIn, textVariant } from '../utils/motion';
import { styles } from '../styles';
import { Link } from 'react-router-dom';
import BlogCard from '../components/BlogCard';
import { blogs } from '../constants';



const Blogs = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={`${styles.sectionSubText} text-black-200`}>My Blogs</p>
        <h2 className={`${styles.sectionHeadText} text-black-200`}>
          Blogs.
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
        {blogs.map((blog) => (
          <Link to={`/blogs/${blog.index}`} key={blog.index}>
            <BlogCard  {...blog} />
          </Link>
        ))}
      </div>
    </>
  )
}

export default SectionWrapper(Blogs, "blogs");