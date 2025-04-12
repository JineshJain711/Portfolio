import { useEffect, useRef } from "react";
import { Typed } from "react-typed";
import { motion } from "framer-motion";
import { Link as ScrollLink } from "react-scroll";
import { FaGithub, FaDownload, FaChevronDown, FaCode, FaServer } from "react-icons/fa";
import { SiJavascript, SiPython, SiReact } from "react-icons/si";
import { FaJava } from "react-icons/fa";
import Profile from "../assets/jj.jpg";
import { useLocation } from "react-router-dom";

const Home = () => {
  const typedRef = useRef<HTMLSpanElement>(null);
  const location = useLocation();

  useEffect(() => {
    const scrollTo = location.state?.scrollTo;
    if (scrollTo) {
      const el = document.getElementById(scrollTo);
      if (el) {
        el.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    }
  }, [location]);

  useEffect(() => {
    if (typedRef.current) {
      const typed = new Typed(typedRef.current, {
        strings: [
          "💻 Full Stack Developer",
          "☕ Java Developer",
          "🤖 AI Enthusiast",
          "🧠 Problem Solver"
        ],
        typeSpeed: 50,
        backSpeed: 30,
        loop: true,
        showCursor: true,
        cursorChar: "|", // Use plain | and style with CSS
        backDelay: 1500,
      });
      return () => typed.destroy();
    }
  }, []);
  

  // Floating tech icons data
  const floatingIcons = [
    { icon: <FaJava className="text-red-500" />, size: "text-3xl", pos: "top-[70%] left-[5%]" },
    { icon: <SiReact className="text-red-500" />, size: "text-3xl", pos: "top-[70%] left-[5%]" },
    { icon: <SiPython className="text-blue-300" />, size: "text-2xl", pos: "top-[40%] right-[8%]" },
    { icon: <SiJavascript className="text-yellow-300" />, size: "text-3xl", pos: "bottom-[15%] left-[15%]" },
    { icon: <FaCode className="text-green-400" />, size: "text-xl", pos: "top-[15%] right-[20%]" },
    { icon: <FaServer className="text-purple-400" />, size: "text-2xl", pos: "bottom-[25%] right-[10%]" },
  ];

  return (
    <section
      id="home"
      className="relative min-h-screen flex flex-col md:flex-row items-center justify-center px-6 bg-[#0c1a1a] text-white overflow-hidden"
      style={{
        backgroundImage: "radial-gradient(#1e2e2e 1px, transparent 1px)",
        backgroundSize: "20px 20px",
      }}
    >
      {/* Animated floating tech icons */}
      {floatingIcons.map((icon, index) => (
        <motion.div
          key={index}
          className={`absolute ${icon.pos} ${icon.size} opacity-20 z-0`}
          initial={{ y: 0 }}
          animate={{
            y: [0, -20, 0],
            rotate: [0, 5, 0]
          }}
          transition={{
            duration: 5 + Math.random() * 5,
            repeat: Infinity,
            ease: "easeInOut",
            delay: index * 0.5
          }}
        >
          {icon.icon}
        </motion.div>
      ))}

      {/* Glowing particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(30)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full bg-green-400"
            style={{
              width: Math.random() * 3 + 1 + 'px',
              height: Math.random() * 3 + 1 + 'px',
              top: Math.random() * 100 + '%',
              left: Math.random() * 100 + '%',
              opacity: 0.3,
            }}
            animate={{
              y: [0, (Math.random() * 60 - 30)],
              x: [0, (Math.random() * 60 - 30)],
              opacity: [0.3, 0.8, 0.3]
            }}
            transition={{
              duration: 5 + Math.random() * 10,
              repeat: Infinity,
              repeatType: "reverse"
            }}
          />
        ))}
      </div>

      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#0c1a1a]/90 via-[#0c1a1a]/70 to-[#2c5364]/50 z-0" />

      {/* Main content */}
      <motion.div
        className="z-10 text-center md:text-left max-w-2xl"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <motion.h2 
          className="text-lg mb-2 text-green-400 font-mono"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
        >
          Hi, I am
        </motion.h2>
        
        <motion.h1
          className="text-4xl md:text-6xl font-extrabold text-white leading-tight"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
        >
          Jinesh Jain
        </motion.h1>
        
        <motion.h3
          className="text-xl md:text-3xl mt-4 text-green-300 font-mono flex gap-2 items-center min-h-[3rem]"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.7 }}
        >
          I'm a <span ref={typedRef} className="text-green-400" />
        </motion.h3>
        
        <motion.p
          className="mt-6 text-gray-300 leading-relaxed text-base md:text-lg max-w-lg"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.9 }}
        >
          Crafting elegant solutions to complex problems through code. 
          Specializing in full-stack development, Java applications, 
          and cutting-edge AI implementations that push boundaries.
        </motion.p>

        <motion.div
          className="mt-10 flex flex-wrap justify-center md:justify-start gap-5"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.1 }}
        >
          <motion.a
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            href="https://github.com/JineshJain711"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 px-6 py-3 bg-gradient-to-r from-green-600 to-green-700 text-white font-medium rounded-lg transition-all shadow-lg hover:shadow-green-500/40 group"
          >
            <FaGithub className="group-hover:scale-110 transition-transform" />
            <span>Explore My Code</span>
          </motion.a>
          
          <motion.a
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            href="/jj.pdf"
            download
            className="flex items-center gap-3 px-6 py-3 bg-[#0f2a2a] border-2 border-green-500/40 hover:border-green-400/80 text-green-300 font-medium rounded-lg transition-all shadow-lg hover:shadow-green-500/20 group"
          >
            <FaDownload className="group-hover:animate-bounce" />
            <span>Download Resume</span>
          </motion.a>
        </motion.div>
      </motion.div>

      {/* Profile Photo */}
      <motion.div
        className="mt-10 md:mt-0 md:ml-16 z-10"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.2 }}
      >
        <div className="relative">
          <div className="rounded-full border-4 border-green-500/70 p-1 shadow-2xl shadow-green-500/20 hover:shadow-green-500/40 transform transition duration-500 hover:scale-105 group">
            <div className="absolute inset-0 rounded-full bg-green-500/10 blur-md group-hover:opacity-50 opacity-0 transition-opacity" />
            <img
              src={Profile}
              alt="Jinesh Jain"
              className="w-48 h-48 md:w-72 md:h-72 object-cover rounded-full relative z-10"
            />
          </div>
          <div className="absolute -inset-4 rounded-full border border-green-400/30 animate-pulse pointer-events-none" />
        </div>
      </motion.div>

      {/* Scroll Down Arrow */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          delay: 2,
          duration: 1,
          repeat: Infinity,
          repeatType: "reverse",
        }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10"
      >
        <ScrollLink
          to="about"
          smooth={true}
          duration={800}
          offset={-60}
          className="cursor-pointer text-green-400 hover:text-green-300 text-3xl animate-bounce"
        >
          <FaChevronDown />
        </ScrollLink>
      </motion.div>
    </section>
  );
};

export default Home;