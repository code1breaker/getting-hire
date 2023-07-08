import { BsFillPersonFill } from "react-icons/bs";

export const menus = [
  {
    id: 1,
    title: "Home",
    route: "/",
  },

  {
    id: 2,
    title: "Candidates",
    route: "/candidates",
  },
  {
    id: 3,
    title: "Signup",
    route: "/signup",
  },
  {
    id: 4,
    title: "Signin",
    route: "/signin",
  },
];

export const cateogries = [
  { id: 1, title: "Developement & IT", noOfJob: 1200 },
  { id: 2, title: "Design & Creative", noOfJob: 2512 },
  { id: 3, title: "Sales & Marketing", noOfJob: 1589 },
  { id: 4, title: "Accounting & Finance", noOfJob: 1236 },
  { id: 5, title: "Human Resource", noOfJob: 1456 },
  { id: 6, title: "Engineering & Architecture", noOfJob: 1385 },
];

export const candidates = [
  {
    id: 1,
    name: "John Doe",
    image: <BsFillPersonFill />,
    location: "New York",
    jobRole: "Software Engineer",
    skills: ["JavaScript", "React", "Node.js"],
    details: "5 years of experience in full-stack web development.",
  },
  {
    id: 2,
    name: "Jane Smith",
    image: <BsFillPersonFill />,
    location: "London",
    jobRole: "Product Manager",
    skills: ["Product Strategy", "User Research", "Agile"],
    details:
      "Managed successful product launches and led cross-functional teams.",
  },
  {
    id: 3,
    name: "Alex Johnson",
    image: <BsFillPersonFill />,
    location: "London",
    jobRole: "Data Analyst",
    skills: ["Machine Learning", "Python", "Data Visualization"],
    details: "Expertise in machine learning algorithms and data analysis.",
  },
  {
    id: 4,
    name: "Emily Brown",
    image: <BsFillPersonFill />,
    location: "Sydney",
    jobRole: "Sales Manager",
    skills: ["Sales Strategy", "Performance", "Relationship Building"],
    details: "Increased sales targets by 5% and built stronger relationships.",
  },
  {
    id: 5,
    name: "Michael Lee",
    image: <BsFillPersonFill />,
    location: "New York",
    jobRole: "Sales Manager",
    skills: ["Sales Strategy", "Negotiation", "Relationship Building"],
    details:
      "Consistently exceeded sales targets and built long-term client relationships.",
  },
  {
    id: 6,
    name: "Sophia Martinez",
    image: <BsFillPersonFill />,
    location: "London",
    jobRole: "Sales Manager",
    skills: ["Sales ", "Strategy", "Planning", "Relationship Building"],
    details:
      "Consistently exceeded sales targets and built long-term client relationships.",
  },
  {
    id: 7,
    name: "William Johnson",
    image: <BsFillPersonFill />,
    location: "London",
    jobRole: "Software Engineer",
    skills: ["Java", "Spring Boot", "SQL"],
    details: "Proficient in multiple programming languages and frameworks.",
  },
  {
    id: 8,
    name: "Olivia Wilson",
    image: <BsFillPersonFill />,
    location: "Sydney",
    jobRole: "Data Analyst",
    skills: ["Data Analysis", "SQL", "Data Visualization"],
    details: "Skilled in data visualization and statistical analysis.",
  },
  {
    id: 9,
    name: "Daniel Davis",
    image: <BsFillPersonFill />,
    location: "Sydney",
    jobRole: "Project Manager",
    skills: ["Project Planning", "Team Management", "Risk Assessment"],
    details:
      "Successfully delivered complex projects on time and within budget.",
  },
];
