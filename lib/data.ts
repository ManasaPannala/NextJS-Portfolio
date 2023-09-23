import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import corpcommentImg from "@/public/stack.png";
import rmtdevImg from "@/public/stock.jpeg";
import wordanalyticsImg from "@/public/sec.jpg";

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const experiencesData = [
  {
    title: "Software Intern",
    location: "Cognizant Technology Solutions, Hyderabad, Telangana, India",
    description:
      "I engineered an authentication framework using Spring Boot and Google reCAPTCHA, facilitating effortless sign-ins and crafted intuitive web page designs elevating user experience. ",
    icon: React.createElement(CgWorkAlt),
    date: "2021",
  },
  {
    title: "Graduated with a Bachelors Degree",
    location: "JNTU, Hyderabad, Telangana, India",
    description:
      "I engineered an authentication framework using Spring Boot and Google reCAPTCHA, facilitating effortless sign-ins and crafted intuitive web page designs elevating user experience. ",
    icon: React.createElement(LuGraduationCap),
    date: "2021",
  },
  {
    title: "Software Engineer",
    location: "Societe Generale, Bengaluru, Karnataka, India",
    description:
      "Played an integral role in rolling out novel application features like in-app updates and picture-in-picture enhancements for Android, culminating in a 26% uptick in user efficiency.",
    icon: React.createElement(CgWorkAlt),
    date: "2021 - 2022",
  },
  {
    title: "Data Science Intern",
    location: "BPMLinks, Boca Raton, Florida, United States",
    description:
      "I harnessed the power of OpenAI API and LangChain to design a chatbot that excels as a product recommendation tool for a cruise company, boasting a remarkable 95% precision in segmenting customers.",
    icon: React.createElement(CgWorkAlt),
    date: "2023 - 2023",
  },
  {
    title: "Research Assistant",
    location: "San Jose State University, San Jose, California, United States",
    description:
      "Currently I'mdissecting and leveraging the N-CMAPSS dataset, pioneering transformative approaches to predictive maintenance and fault diagnosis within the commercial aviation sector.",
    icon: React.createElement(CgWorkAlt),
    date: "2023 - present",
  },
] as const;

export const projectsData = [
  {
    title: "Stack Overflow Prototype",
    description:
      "I developed a prototype similar to Stack Overflow utilizing Kafka and Redis, which incorporates distinct user roles and secure token-based authentication.",
    tags: ["React.JS", "Node.JS", "MongoDB", "Kafka", "Redis"],
    imageUrl: corpcommentImg,
  },
  {
    title: "Stock Market Charting",
    description:
      "By implementing Agile technologies, I launched a resilient Spring Boot website for demonstrating stock market charts using Zuul API Gateway.",
    tags: ["Java", "Spring Boot", "React.JS", "MongoDB", "Redux"],
    imageUrl: rmtdevImg,
  
  },
  {
    title: "Security Robot",
    description:
      "Initiated an AWS Robomaker application housed in Docker on AWS ECR, which cut deployment duration by over half, and architected an AWS setup with load balancers to enhance throughput efficiency.",
    tags: ["React.JS", "AWS", "Postman API", "Express.JS", "Node.JS"],
    imageUrl: wordanalyticsImg,
  },
] as const;

export const skillsData = [
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "Node.js",
  "Git",
  "Java",
  "Spring Boot",
  "Python",
  "MongoDB",
  "MySQL",
  "GraphQL",
  "Express",
  "PostgreSQL",
  "Django",
  "LangChain",
] as const;
