import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  internet,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  hotwheels,
  meta,
  starbucks,
  tesla,
  shopify,
  carrent,
  jobit,
  tripguide,
  threejs,
  firebase,
  bengali,
  snapSchool,
  mern
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "React JS",
    icon: reactjs,
  },

  {
    title: "javascript",
    icon: javascript,
  },
  {
    title: "Tailwind",
    icon: tailwind,
  },

  {
    title: "MERN Stack",
    icon: mern,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "docker",
    icon: docker,
  },
];





const projects = [
  {
    name: "Snap School",
    description:
      "Welcome to the Snap School project! This is a photography website built using React.js, Tailwind CSS, Daisy UI, Node.js, Express.js, MongoDB, and CORS. Snap School is designed to showcase and share stunning photographs with the world.",
    tags: [
      {
        name: "react",
        icon: reactjs,
        color: "blue-text-gradient",
      },
      {
        name: "javascript",
        icon: javascript,
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        icon: tailwind,
        color: "pink-text-gradient",
      },
    ],
    image: snapSchool,
    source_code_link: "https://github.com/Mohiuddin-64bit/Snap-School-Client",
    live_site: "https://span-school.web.app/"
  },
  {
    name: "Hotwheels",
    description:
      "Hot Wheels is a car toy project showcasing various kinds of cars. This project includes both a client-side and a back-end site. The back-end is built using MongoDB, Express.js, and Node.js. On the client-side, React.js, Chair, Windscases, Daisy UI, and OS React packages are used for a little animation on the homepage.",
    tags: [
      {
        name: "ReactJs",
        icon: reactjs,
        color: "blue-text-gradient",
      },
      {
        name: "Tailwind",
        icon: tailwind,
        color: "green-text-gradient",
      },
      {
        name: "MongoDB",
        icon: mongodb,
        color: "pink-text-gradient",
      },
    ],
    image: hotwheels,
    source_code_link: "https://github.com/Mohiuddin-64bit/Hotwheels-client",
    live_site: "https://hotwheels-8a070.web.app/"
  },
  {
    name: "Bengali Bites",
    description:
      "Bengali-Bites is a website designed for chefs to share their recipes with a wider audience. The website is built using ReactJS, Tailwind CSS, and React-Router for the client-side, while the backend API is built with Express and deployed on Vercel. The client site is hosted on Firebase. Additional components used include React-Toast and React-Rating. The home page is responsive for both mobile and PC.",
    tags: [
      {
        name: "ReactJS",
        icon: reactjs,
        color: "blue-text-gradient",
      },
      {
        name: "tailwind",
        icon: tailwind,
        color: "green-text-gradient",
      },
      {
        name: "Firebase",
        icon: firebase,
        color: "pink-text-gradient",
      },
    ],
    image: bengali,
    source_code_link: "https://github.com/",
    live_site: "https://bengali-bites.web.app/"
    
  },
];

export { services, technologies, projects };
