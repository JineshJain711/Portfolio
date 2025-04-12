import { motion } from "framer-motion";
import {
  FaReact,
  FaJava,
  FaPython,
  FaHtml5,
  FaCss3Alt,
  FaGithub,
} from "react-icons/fa";
import { SiTailwindcss, SiTypescript, SiCplusplus, SiMysql } from "react-icons/si";
// Removed invalid import for DiCpp

const skills = [
  { icon: <FaReact size={40} />, label: "React" },
  { icon: <SiTailwindcss size={40} />, label: "Tailwind" },
  { icon: <FaJava size={40} />, label: "Java" },
  { icon: <FaPython size={40} />, label: "Python" },
  { icon: <FaHtml5 size={40} />, label: "HTML5" },
  { icon: <FaCss3Alt size={40} />, label: "CSS3" },
  { icon: <SiTypescript size={40} />, label: "TypeScript" },
  { icon: <FaGithub size={40} />, label: "GitHub" },
  // Removed invalid skill for DiCpp
  { icon: <SiCplusplus size={40} />, label: "C" },
  { icon: <SiMysql size={40} />, label: "SQL" },
];

const cardVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.1,
      duration: 0.5,
      ease: "easeOut",
    },
  }),
};

const Skills = () => {
  return (
    <motion.section
      id="skills"
      className="min-h-screen px-6 py-20 bg-[#0c1a1a] text-white"
      style={{
        backgroundImage: "radial-gradient(#1e2e2e 1px, transparent 1px)",
        backgroundSize: "20px 20px",
      }}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
    >
      <h2 className="text-4xl font-bold text-center mb-16 text-green-400 tracking-wider">
        🛠️ My Skills
      </h2>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-8 max-w-6xl mx-auto">
        {skills.map((skill, idx) => (
          <motion.div
            key={idx}
            className="bg-[#0f2a2a] group border border-transparent hover:border-green-400 rounded-2xl p-6 text-center shadow-md transition-all duration-300 relative overflow-hidden"
            custom={idx}
            variants={cardVariants}
            whileHover={{ scale: 1.08 }}
            whileTap={{ scale: 0.95 }}
          >
            {/* Animated Glow */}
            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-all duration-300 pointer-events-none rounded-2xl bg-gradient-to-br from-green-500/20 via-green-400/10 to-transparent blur-md z-0" />

            <div className="relative z-10 flex flex-col items-center gap-2">
              <div className="text-green-400">{skill.icon}</div>
              <p className="font-semibold text-gray-200">{skill.label}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
};

export default Skills;  