import { useParams } from 'react-router-dom';
import { blogs } from '../constants';
import React from 'react'
import { fadeIn, textVariant } from "../utils/motion";
import { motion } from "framer-motion";
import { styles } from '../styles';
import { SectionWrapper } from '../hoc';
import { useGetAllBlogsQuery } from '../redux/feature/blogs/blogsAPI';

const SingleBlog = () => {
  const { id } = useParams();

  const { data: blogs, error, isLoading } = useGetAllBlogsQuery();
  const singleBlogs = blogs?.find(blog => blog._id === id);

  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={`${styles.sectionSubText} text-black-200`}>Single Project</p>
        <div className='mt-12'>
          <img src={singleBlogs?.imageLink} className='my-5  mx-auto' alt="" />
        </div>
      </motion.div>
      <div className="w-full flex">
        <motion.p
          variants={fadeIn("", "", 0.1, 1)}
          className="mt-3 text-gray-600 text-[17px] leading-[30px]"
        >
          <p
            dangerouslySetInnerHTML={{
              __html: singleBlogs?.blog,
            }}
          ></p>
        </motion.p>
      </div>
    </>
  )
}

export default SectionWrapper(SingleBlog, "singleBlog");