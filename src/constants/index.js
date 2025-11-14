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
  Develevate,
  CampusSync,
  NeoParticle
} from "../assets";

export const navLinks = [
  {
    id:"home",
    title:"Home"
  },
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "projects",
    title: "Projects",
  },
  {
    id: "contact",
    title: "Contact",
  },
  
];

const services = [
  {
    title: "Full-Stack & App Developer",
    icon: web,
  },
  {
   title: "Neural Systems Designer",
    icon: backend,
  },
  {
    
     title: "Cloud & DevOps Enthusiast",
    icon: mobile,
  },
  {
    title: "Data-Inspired Technologist",
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
  title: "Software Developer Intern",
  company_name: "Winkget Express",
  icon: "",   // your icon import
  iconBg: "#1F2937",
  date: "Jan 2025 - March 2025",
  points: [
    "Developed the company's product and service-based application and website, contributing to both frontend and backend functionalities.",
    "Collaborated with a 10-member team, including 3 senior developers, ensuring smooth feature development and efficient task coordination.",
    "Gained strong exposure to real-world engineering workflows, enhancing communication, teamwork, and leadership skills.",
    "Actively participated in planning, code reviews, debugging, and deployment activities to ship high-quality releases.",
    "Strengthened problem-solving skills by working closely with senior engineers and aligning development with business needs."
  ],
},

  {
    title: "MERN Stack Developer",
    company_name: "arcai.engineer",
    icon: arcAI,
    iconBg: "#383E56",
    date: "May 2025 - July 2025",
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
    date: "Dec 2024 - April 2024",
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
    date: "Sep 2024 - October 2024",
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
  name: "🌱 KrishiMitram – Digital Krishi Officer",
  description:
    "A unified agricultural ecosystem enabling farmers, buyers, store owners, and agri-officers to manage all farming activities from a single digital platform. It solves major farmer challenges like crop selection, disease detection, marketplace access, and scheme discovery through AI-driven intelligence.",
  tags: [
    { name: "Next.js", color: "blue-text-gradient" },
    { name: "Node.js", color: "green-text-gradient" },
    { name: "MongoDB", color: "pink-text-gradient" },
    { name: "Supabase", color: "blue-text-gradient" },
    { name: "AWS", color: "green-text-gradient" },
    { name: "LLMs / RAG", color: "pink-text-gradient" },
    { name: "CNN Models", color: "blue-text-gradient" }
  ],
  image: "", // add your image import
  source_code_link: "https://github.com/itsmeavanish/KrishiMitram", // if private, add deployed link

  highlights: [
    "✔ Built as a one-stop digital solution to help farmers avoid struggling across multiple systems.",
    "✔ 4 Interfaces: Farmer App, Buyer App, Store Owner App, Agri Officer Dashboard.",
    "✔ Personalized farmer dashboards – weather, crop status, activities, alerts, AI suggestions.",
    "✔ Marketplace – buy/sell crops, rent/borrow equipment, track orders, connect directly with buyers.",
    "✔ Community Hub – farmers, buyers, and store owners share information, knowledge, and updates.",
    "✔ Tutorials & learning material for modern agricultural practices.",
    "✔ AI Advisory System: RAG chatbot (multi-language), crop recommendation engine, and CNN-based disease detection.",
    "✔ Disease detection deployed on AWS (S3 + EC2) for high compute; excluded from live UI due to cost.",
    "✔ Storage handled using AWS S3, Supabase buckets & HuggingFace spaces.",
    "✔ Innovative Clap-Based Theme Switch – toggle light/dark mode using a single clap.",
    "✔ Future-ready idea: Voice-based navigation (e.g., 'Go to Dashboard' → auto navigation).",
    "✔ Built in collaboration with a 6-member team: Atishay Kumar Pandey, Akash Gupta, Aditya Pratap Singh, Saumya Srivastava, Vaishnavi Tripathi."
  ]
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
    name: "🚀 Developer Portfolio & Community - Develevate",
    description:
      "An all-in-one developer platform enabling users to showcase their portfolios, GitHub stats, LeetCode streaks, and coding achievements. Includes features like automated job applications, recruiter email outreach, and friend-based networking. Developers can upload project links, receive contribution suggestions, and interact within a dev-centric ecosystem tailored for career growth.",
    tags: [
      {
        name: "MERN Stack",
        color: "blue-text-gradient",
      },
      {
        name: "Firebase",
        color: "green-text-gradient",
      },
      {
        name: "REST API",
        color: "pink-text-gradient",
      }
    ],
    image: Develevate, 
    source_code_link: "https://github.com/itsmeavanish/DevPortFolio",
  },
  {
    name: "🏫 Campus Collaboration Hub - Campus Sync",
    description:
      "A centralized communication and collaboration platform for college clubs and students. Facilitates the creation of public/private rooms, resource sharing, Q&A threads, and real-time sessions like DSA meets. Clubs can manage announcements, share updates, and interact with members while students get personalized feeds and contribute to community discussions.",
    tags: [
      {
        name: "React",
        color: "blue-text-gradient",
      },
      {
        name: "Node.js",
        color: "green-text-gradient",
      },
      {
        name: "Socket.io",
        color: "pink-text-gradient",
      },
      {
        name: "MongoDB",
        color: "green-text-gradient",
      }
    ],
    image: CampusSync,
    source_code_link: "https://github.com/itsmeavanish/CampusSync",
  },
  {
  name: "✨ Neo 3D Particle Animation",
  description:
    "A visually immersive 3D particle background built with React Three Fibre and Drei, integrated into a Next.js environment. Designed to enhance modern web interfaces with smooth, interactive animations that respond to user movement and create an engaging visual layer. Perfect for futuristic dashboards and AI-based applications like chatbots or landing pages.",
  tags: [
    {
      name: "React Three Fibre",
      color: "blue-text-gradient",
    },
    {
      name: "Three.js",
      color: "green-text-gradient",
    },
    {
      name: "Drei",
      color: "pink-text-gradient",
    },
    {
      name: "Next.js",
      color: "blue-text-gradient",
    },
  ],
  image: NeoParticle, 
  source_code_link: "https://github.com/itsmeavanish/Neo-3D-Particles",
},
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
