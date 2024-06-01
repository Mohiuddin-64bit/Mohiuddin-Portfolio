import React from 'react'
import { motion } from "framer-motion";

import { SectionWrapper } from '../hoc';
import { fadeIn, textVariant } from '../utils/motion';
import { styles } from '../styles';
import { reactjs, tailwind } from '../assets';
import { Tilt } from 'react-tilt';
import { Link } from 'react-router-dom';

const blogs = [
  {
    index: 1,
    name: "Blog 1",
    description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eius libero quo laudantium reprehenderit, doloremque dolorem exercitationem aliquam temporibus, porro iusto aperiam voluptatem harum amet, dolor culpa veniam facere fugit recusandae.",
    tags: [
      { name: "ReactJS", icon: reactjs },
      { name: "TailwindCSS", icon: tailwind },
    ],
    image: "https://via.placeholder.com/150",
    source_code_link: "https://github.com",
    live_site: "https://google.com",
  },
  {
    index: 2,
    name: "Blog 2",
    description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eius libero quo laudantium reprehenderit, doloremque dolorem exercitationem aliquam temporibus, porro iusto aperiam voluptatem harum amet, dolor culpa veniam facere fugit recusandae.",
    tags: [
      { name: "ReactJS", icon: reactjs },
      { name: "TailwindCSS", icon: tailwind },
    ],
    image: "https://via.placeholder.com/150",
    source_code_link: "https://github.com",
    live_site: "https://google.com",
  },
  {
    index: 3,
    name: "Blog 3",
    description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eius libero quo laudantium reprehenderit, doloremque dolorem exercitationem aliquam temporibus, porro iusto aperiam voluptatem harum amet, dolor culpa veniam facere fugit recusandae.",

    tags: [
      { name: "ReactJS", icon: reactjs },
      { name: "TailwindCSS", icon: tailwind },
    ],
    image: "https://via.placeholder.com/150",
    source_code_link: "https://github.com",
    live_site: "https://google.com",
  },
];

const BlogCard = ({
  index,
  name,
  description,
  image,
}) => {

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
          </div>
          <div className="mt-5 ">
            <h3 className="text-white font-bold text-[24px]">{name}</h3>
            <p className="mt-2 text-white-100 text-[14px]">
              {description.slice(0, 300)}...
            </p>
          </div>
        </div>
      </Tilt>
    </motion.div>
  );
};

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
          <Link key={blog.index}>
            <BlogCard  {...blog} />
          </Link>
        ))}
      </div>
    </>
  )
}

export default SectionWrapper(Blogs, "blogs");
