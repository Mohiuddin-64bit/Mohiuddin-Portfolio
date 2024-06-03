import React from 'react'
import { motion } from "framer-motion";

import { SectionWrapper } from '../hoc';
import { fadeIn, textVariant } from '../utils/motion';
import { styles } from '../styles';
import { blogs } from '../constants';
import BlogCard from './BlogCard';
import { Link } from 'react-router-dom';
import { useGetAllBlogsQuery } from '../redux/feature/blogs/blogsAPI';

const Blogs = () => {
  const { data: blogs, error, isLoading } = useGetAllBlogsQuery();

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
        {isLoading && <p>Loading...</p>}
        {error && <p>Error: {error}</p>}
        {blogs && blogs.length === 0 && <p>No blogs found</p>}
        {blogs?.slice(0, 3)?.map((blog, index) => (
          <Link to={`/blogs/${blog._id}`} key={blog._id}>
            <BlogCard  {...blog} index={index} />
          </Link>
        ))}
      </div>
    </>
  )
}

export default SectionWrapper(Blogs, "blogs");
