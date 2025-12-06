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
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  meta,
  starbucks,
  tesla,
  shopify,
  manifest,
  amenses,
  carrent,
  jobit,
  tripguide,
  brickvio,
  luctur,
  erranddo,
  threejs,
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
    title: "Web Developer",
    icon: web,
  },
  {
    title: "React Native Developer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "Content Creator",
    icon: creator,
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

const experiences = [
  {
    title: "Full Stack Developer (MERN & DevOps)",
    company_name: "Manifest Infotech Pvt Ltd",
    icon: manifest,
    iconBg: "#383E56",
    date: "2023 - Present",
    points: [
      "Developed and maintained full-stack web applications using MERN stack (MongoDB, Express.js, React.js, Node.js).",
      "Implemented RESTful APIs and GraphQL endpoints for efficient data management and communication.",
      "Set up and managed CI/CD pipelines using Jenkins, GitHub Actions, and Docker for automated deployments.",
      "Configured and maintained cloud infrastructure on AWS/Azure including EC2, S3, Lambda, and CloudFront.",
      "Optimized application performance, reduced load times, and improved database query efficiency.",
      "Collaborated with cross-functional teams to deliver scalable and high-performance solutions.",
      "Implemented DevOps best practices including containerization, orchestration, and monitoring solutions.",
    ],
  },
  {
    title: "Frontend Developer",
    company_name: "Amenses Innovation Pvt Ltd, Indore, MP",
    icon: amenses,
    iconBg: "#E6DEDD",
    date: "2021 - 2023",
    points: [
      "Developed responsive and interactive user interfaces using React.js, JavaScript, HTML5, and CSS3.",
      "Implemented modern UI/UX designs and ensured cross-browser compatibility for web applications.",
      "Worked with state management libraries like Redux and Context API for efficient data flow.",
      "Collaborated with backend developers to integrate RESTful APIs and ensure seamless data communication.",
      "Optimized frontend performance, improved page load times, and enhanced user experience.",
      "Participated in code reviews, debugging, and maintaining clean, reusable component architecture.",
      "Worked with version control systems (Git) and followed agile development methodologies.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "BrickVio",
    description:
      "A comprehensive real estate web platform that allows users to search, browse, and manage property listings. Features include property search filters, detailed listings, user authentication, and seamless property management for buyers and sellers.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "nodejs",
        color: "green-text-gradient",
      },
      {
        name: "postgresql",
        color: "pink-text-gradient",
      },
    ],
    image: brickvio,
    source_code_link: "https://brickvio.com",
  },
  {
    name: "Luctur",
    description:
      "A YouTube clone platform built with MERN stack featuring video upload, streaming, user channels, comments, likes, and subscriptions. Includes responsive design, video recommendations, and real-time interactions for an engaging video-sharing experience.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "express",
        color: "green-text-gradient",
      },
      {
        name: "postgresql",
        color: "pink-text-gradient",
      },
    ],
    image: luctur,
    source_code_link: "https://luctur.com",
  },
  {
    name: "ErrandDo",
    description:
      "A service marketplace platform similar to Urban Company, connecting service providers with customers. Features include service booking, real-time tracking, payment integration, ratings and reviews, and a comprehensive admin dashboard for managing services and users.",
    tags: [
      {
        name: "mern",
        color: "blue-text-gradient",
      },
      {
        name: "postgresql",
        color: "green-text-gradient",
      },
      {
        name: "devops",
        color: "pink-text-gradient",
      },
    ],
    image: erranddo,
    source_code_link: "https://erranddo.com",
  },
];

export { services, technologies, experiences, testimonials, projects };
