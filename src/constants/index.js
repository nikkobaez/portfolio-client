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
  sushify,
  viva,
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
     "Fullstack web-based ecommerce application that allows users to filter and sort products by size, color, and price, add products to their cart and wishlist, and purchase the products in their cart using stripe checkout.",
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
    "Fullstack web-based chat application that allows users to search for other users, search their chats for a conversation, send, approve, or deny friend requests, and message other users texts, images, and videos.",
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
  name: "Sushify",
  description:
    "Frontend web-based landing page that focuses on user experience by creating a cohesive design through features such as a dark and light theme, animations, a modern color palette, and typographics.",
  tags: [
    {
      name: "react",
      color: "blue-text-gradient",
    },
    {
      name: "css",
      color: "pink-text-gradient"
    },
    {
      name: "framer",
      color: "purple-text-gradient",
    },
  ],
  image: sushify,
  source_code_link: "https://github.com/nikkobaez/sushify-client",
  live_demo_link: "https://shiny-torrone-7dbeb6.netlify.app/"
  },
    {
  name: "Viva",
  description:
    "Frontend web-based landing and product customization page that encourages user engagement by allowing users to design their own pieces of furniture based on the style and colors they want.",
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
      name: "framer",
      color: "purple-text-gradient",
    },
    {
      name: "three.js",
      color: "green-text-gradient",
    },
  ],
  image: viva,
  source_code_link: "https://github.com/nikkobaez/viva-client",
  live_demo_link: "https://dainty-paprenjak-d97120.netlify.app"
  },
];

export { services, technologies, projects };