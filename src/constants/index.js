import {
  javascript,
  typescript,
  html,
  css,
  reactjs,
  tailwind,
  nodejs,
  mongodb,
  express,
  sql,
  firebase,
  sass,
  bootstrap,
  next,
  lama,
  wavvy,
  horizon,
  fullstack,
  frontend,
  backend,
  student

} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "portfolio",
    title: "Portfolio",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Fullstack Developer",
    icon: fullstack,
  },
  {
    title: "Frontend Developer",
    icon: frontend,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "Computer Science Student",
    icon: student,
  },
];

const technologies = [
  {
    name: "HTML",
    icon: html,
  },
  {
    name: "CSS",
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
    name: "Node.js",
    icon: nodejs,
  },
  {
    name: "Express",
    icon: express,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "SQL",
    icon: sql,
  },
  {
    name: "Firebase",
    icon: firebase,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Bootstrap",
    icon: bootstrap,
  },
  {
    name: "SASS",
    icon: sass,
  },
  {
    name: "React",
    icon: reactjs,
  },
    {
    name: "Next.js",
    icon: next,
  },
];

const projects = [
  {
    name: "Lama",
    description:
     "Web-based ecommerce application that allows users to filter and sort products by size, color, and price, add products to their cart and wishlist, and purchase the products in their cart using stripe checkout.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
      {
        name: "express",
        color: "yellow-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
    ],
    image: lama,
    source_code_link: "https://github.com/nikkobaez/lama-client",
    live_demo_link: "https://tubular-tulumba-85d1d0.netlify.app/"
  },
  {
  name: "Wavvy",
  description:
    "Web-based chat application that allows users to search for other users, search their chats for a conversation, send, approve, or deny friend requests, and message other users texts, images, and videos.",
  tags: [
    {
      name: "react",
      color: "blue-text-gradient",
    },
    {
      name: "tailwind",
      color: "pink-text-gradient"
    },
    {
      name: "firebase",
      color: "orange-text-gradient",
    },
  ],
  image: wavvy,
  source_code_link: "https://github.com/nikkobaez/wavvy-client",
  live_demo_link: "https://graceful-dodol-b1c40d.netlify.app/"
  },
  {
  name: "Coming Soon Feb 2024",
  description:
    "Web-based car rental application that allows users to add update, and delete cars, rent out cars to customers, process cars returned by customers, and generate different types of revenue reports",
  tags: [
      {
        name: "next",
        color: "blue-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
      {
        name: "express",
        color: "yellow-text-gradient",
      },
      {
        name: "mysql",
        color: "green-text-gradient",
      },
  ],
  image: horizon,
  source_code_link: "/",
  live_demo_link: "/"
  },
];

export { services, technologies, projects };