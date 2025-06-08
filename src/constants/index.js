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
  arcAI,
  SIH,
  Google,
  carrent,
  jobit,
  tripguide,
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
    title: "Cloud Enthusiast",
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
    title: "MERN Stack Developer",
    company_name: "arcai.engineer",
    icon: arcAI,
    iconBg: "#383E56",
    date: "March 2020 - April 2021",
    points: [
      "Developing and maintaining web applications using MERN and other related technologies. Designed and developed backend and frontend architecture for the ArcAI Engineers website, ensuring robust functionality and seamless performance..",
      "Integrated captivating 3D particle animations, enhancing visual appeal and significantly improving user engagement",
      " Focused on creating a responsive and intuitive user interface, delivering a memorable and interactive experience for visitors.",
      " Utilized modern web technologies to successfully merge innovative design elements with a reliable and scalable infrastructure.",
    ],
  },
  {
    title: "MERN Stack Developer",
    company_name: "GDG MMMUT Website",
    icon: Google,
    iconBg: "#E6DEDD",
    date: "Jan 2021 - Feb 2022",
    points: [
      "Crafted a visually striking and highly functional frontend for the GDG website using modern web technologies.",
      " Delivered an extraordinary user interface that significantly enhanced user experience and engagement.",
      " Achieved a notable increase in user attention and retention through innovative and user-friendly design elements.",
      "Focused on blending creativity with performance to create a responsive, dynamic, and appealing web platform.",
    ],
  },
  {
    title: " Smart India Hackathon (SIH)",
    company_name: "Hackathon",
    icon: SIH,
    iconBg: "#383E56",
    date: "Jan 2022 - Jan 2023",
    points: [
      " Led a 6-member team in Smart India Hackathon (SIH), achieving college-level qualification and securing a Top 10 ranking.",
      "Enhanced app performance, reducing algorithm response time by 35%..",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
 
];

const testimonials = [
  
  {
    testimonial:

      "After Avanish optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Anurag Upadhyay",
    designation: "CEO",
    company: "ArcAI",
    image: "https://media.licdn.com/dms/image/v2/D5603AQEsPBbpA7SL9Q/profile-displayphoto-shrink_400_400/B56ZcvbDdfHUAo-/0/1748847314153?e=1755129600&v=beta&t=v4bbPGOgKMjUAV6Bvsbsl66SEYzxsh41qtqqaOdLzIc",
  },
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Avanish proved me wrong.",
    name: "Akash Gupta",
    designation: "Contributor",
    company: "",
    image: "https://media.licdn.com/dms/image/v2/D5603AQGXamT4dxSWmw/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1720752164891?e=1755129600&v=beta&t=Gay9ejKGAtOcDRgUZ31Q8Xq-bpLdOas9wYCKY0mjt2o",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Avanish does.",
    name: "Akhil Shukla",
    designation: "Contributor",
    company: "",
    image: "https://media.licdn.com/dms/image/v2/D4D03AQFul3bED94QbQ/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1707844334512?e=1755129600&v=beta&t=vjyyxLYym0qTceY970jJpbKf-ICwbJItABho8JAdoIk",
  },
];

const projects = [
  {
    name: "📁 Media Uploader-InCloud",
    description:
      "A responsive web app built to seamlessly handle file uploads with real-time previews and cloud storage integration. Users can upload images, videos, or documents with drag-and-drop functionality. The system ensures optimized file handling, supports multiple formats, and features a clean UI for efficient user interaction",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
      {
        name:" Cloud Storage",
        color: "blue-text-gradient",
      }
    ],
    image: carrent,
    source_code_link: "https://github.com/itsmeavanish/InCloud",
  },
  {
    name: "🧠 AI Travel Advisor-WorldWise",
    description:
      "An AI-powered travel recommendation app that provides personalized itineraries and destination suggestions. By leveraging generative AI, the system can interact with users conversationally and generate travel plans based on preferences like budget, location, and travel style.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "OpenAI API/Gemini API",
        color: "green-text-gradient",
      },
      {
        name: "Tailwind CSS",
        color: "pink-text-gradient",
      },
    ],
    image: jobit,
    source_code_link: "https://github.com/itsmeavanish/WorldWise",
  },
  {
    name: "🏨 Gemini Chatbot-Neo",
    description:
      " Built a modern, responsive chat interface with Next.js (v14+),TypeScript, Shadcn UI, and Tailwind CSS, enabling real-time streaming responses with typing indicators and seamless user interaction. Enhanced visual appeal with interactive 3D particle effects powered by React 3 Fibre/Three.js for visually immersive interface.  Built efficient API routes to connect with the Google Gemini API, managing loading states, and robust error handling achieving reduced response time by almost 40%.",
    tags: [
      {
        name: "Nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "Firebase",
        color: "green-text-gradient",
      },
      {
        name: "Tailwind CSS",
        color: "pink-text-gradient",
      },
    ],
    image: tripguide,
    source_code_link: "https://github.com/itsmeavanish/Gemini-AI-ChatBot",
  },
];

export { services, technologies, experiences, testimonials, projects };
