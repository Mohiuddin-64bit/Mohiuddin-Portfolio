import React from 'react'
import { motion } from "framer-motion";
import { fadeIn } from '../utils/motion';
import { Tilt } from 'react-tilt';

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

export default BlogCard;