import React from 'react'
import { motion } from "framer-motion";
import { fadeIn } from '../utils/motion';
import { Tilt } from 'react-tilt';

const BlogCard = ({
  index,
  imageLink,
  blog
}) => {

  return (
    <motion.div >
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
          </div>
          <div className="mt-5 ">
            <p className='mt-2 text-white-100 text-[14px]'
              dangerouslySetInnerHTML={{
                __html: blog?.slice(0, 400),
              }}
            ></p>
          </div>
        </div>
      </Tilt>
    </motion.div>
  );
};

export default BlogCard;