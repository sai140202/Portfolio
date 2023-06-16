import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  html,
  css,
  git,
  figma,
  Health,
  StressDetector,
  Predictor

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
    title: "Android Developer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "AI/ML developer",
    icon: creator,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "CSS",
    icon: css,
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


const projects = [
  {
    name: "Health Pro",
    description:
      "Android app we have developed is a comprehensive solution that focuses on step count calculation and promotes a healthier lifestyle. By utilizing the built-in sensors of smartphones, such as the accelerometer and gyroscope, the app accurately tracks and calculates the number of steps a user takes throughout the day.",
    tags: [
      {
        name: "Java",
        color: "blue-text-gradient",
      },
      {
        name: "Firebase",
        color: "green-text-gradient",
      },
      {
        name: "xml",
        color: "pink-text-gradient",
      },
    ],
    image: Health,
    source_code_link: "https://github.com/",
  },
  {
    name: "Stree Detector Using CNN",
    description:
      "Web application Using advanced facial recognition technology, it analyzes customer faces to detect signs of stress. Our application accurately identifies facial expressions and microexpressions associated with stress levels. Real-time feedback helps individuals become aware of their stress and take proactive steps to manage it.",
    tags: [
      {
        name: "ANN",
        color: "blue-text-gradient",
      },
      {
        name: "Flask",
        color: "green-text-gradient",
      },
      {
        name: "Firebase",
        color: "pink-text-gradient",
      },
    ],
    image: StressDetector,
    source_code_link: "https://github.com/",
  },
  {
    name: "Eligibility Predictor",
    description:
      "A comprehensive ML web application for university admissions! Predict your eligibility for academic programs with precision and efficiency. Our application analyzes your academic performance, test scores, and more to provide accurate predictions. Simplify the admissions process and gain valuable insights with our user-friendly web application.",
    tags: [
      {
        name: "Flask",
        color: "blue-text-gradient",
      },
      {
        name: "Python",
        color: "green-text-gradient",
      },
      {
        name: "HTML",
        color: "pink-text-gradient",
      },
    ],
    image: Predictor,
    source_code_link: "https://github.com/",
  },
];

export { services, technologies, projects };
