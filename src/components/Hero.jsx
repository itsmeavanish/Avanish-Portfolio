import { motion } from "framer-motion";
import { styles } from "../styles";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, PerspectiveCamera } from "@react-three/drei";
import Neo from "../Neo/Neo";
import { useState } from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
const Hero = () => {
  const [color,setcolor]=useState("#FF8000")
  return (
    <section className={`relative w-full h-screen mx-auto z-0`}>
      {/* Neo Particles */}
      <div className=" w-full flex inset-0 z-10 justify-start ml-96" >
        <Neo color={color} />
      </div>

      <div
        className={`absolute inset-0 top-[160px] max-w-7xl mx-auto ${styles.paddingX} flex flex-row items-start gap-5 bg-transparent z-20 -ml-16 `}
      >
        <div className="flex flex-col justify-center items-center mt-16 ml-28">
          <div className="w-5 h-5 rounded-full bg-[#915EFF]" />
          <div className="w-1 sm:h-80 h-40 violet-gradient" />
        </div>

        <div className="mt-20 ml-7 z-50">
          <h1 className={`${styles.heroHeadText} text-white`}>
            Hi, I'm <span className="text-[#915EFF]">Avanish</span>
          </h1>
          <p className={`${styles.heroSubText} mt-2 text-white-100`}>
            I develop 3D visuals, user <br className="sm:block hidden" />
            interfaces and web applications
          </p>
        </div>
      </div>
      <div className="flex justify-center lg:justify-start gap-4 absolute bottom-52 left-80 transform -translate-x-1/2 z-50">
      <a
    href="https://www.linkedin.com/in/avanish633/"
    target="_blank"
    rel="noopener noreferrer"
    className="flex items-center gap-2 px-6 py-3 rounded-lg bg-[#0A66C2] text-white hover:opacity-90 transition-all duration-300 hover:scale-105 z-50"
  >
    <FaLinkedin className="w-5 h-5" />
    LinkedIn
  </a>
  <a
    href="https://github.com/itsmeavanish"
    target="_blank"
    rel="noopener noreferrer"
    className="flex items-center gap-2 px-6 py-3 rounded-lg bg-gray-900 text-white hover:opacity-90 transition-all duration-300 hover:scale-105"
  >
    <FaGithub className="w-5 h-5" />
     GitHub
  </a>
  
</div>
      <div className="absolute xs:bottom-10 bottom-32 w-full flex justify-center items-center z-20">
        <a href="#about">
          <div className="w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2">
            <motion.div
              animate={{
                y: [0, 24, 0],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: "loop",
              }}
              className="w-3 h-3 rounded-full bg-secondary mb-1"
            />
          </div>
        </a>
      </div>
    </section>
  );
};

export default Hero;
