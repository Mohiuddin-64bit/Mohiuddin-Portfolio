import {

  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  hotwheels,
  nextjs,
  threejs,
  firebase,
  bengali,
  snapSchool,
  mern
} from "../assets";

export const navLinks = [
  {
    id: "home",
    title: "Home",
    path: "/"
  },
  {
    id: "about",
    title: "About",
    path: "/about"
  },
  {
    id: "projects",
    title: "Projects",
    path: "/projects"
  },
  {
    id: "blogs",
    title: "Blogs",
    path: "/blogs"
  },
  {
    id: "contact",
    title: "Contact",
    path: "/contact"
  },
];

const skills = [
  {
    title: "HTML 5",
    icon: html,
  },
  {
    title: "CSS 3",
    icon: css,
  },
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
    title: "MongoDB",
    icon: mern,
  },
  {
    title: "Node JS",
    icon: nodejs,
  },
  {
    title: "TypeScript",
    icon: typescript,
  },
  {
    title: "Firebase",
    icon: firebase,
  },
  {
    title: "git",
    icon: git,
  },
  {
    title: "figma",
    icon: figma,
  },
  {
    title: "Redux Toolkit",
    icon: redux,
  },
  {
    title: "Next Js",
    icon: nextjs,
  }
 
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
];


const blogs = [
  {
    index: "1",
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
    index: "2",
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
    index: "3",
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





const projects = [
  {
    id: "1",
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
    id: "2",
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
    id: "3",
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

export { skills, technologies, projects, blogs };
