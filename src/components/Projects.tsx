import { motion } from "framer-motion";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

// Sample project images (replace with your actual images)
import atsImage from '../assets/ats.jpg';
import ecommerceImage from '../assets/ecommerce.jpg';
//import aiImage from '../assets/ai-genrator.jpg';
import bankingImage from '../assets/banking.jpg';

const Projects = () => {
  const projects = [
    {
      title: "ATS Resume Analyzer",
      description: "Full-stack web application that analyzes resumes for ATS compatibility with score breakdowns and improvement suggestions.",
      tags: ["React", "Node.js", "NLP", "MongoDB"],
      demoUrl: "#",
      codeUrl: "#",
      image: atsImage,
      stats: {
        stars: 128,
        forks: 42
      }
    },
    {
      title: "E-Commerce Dashboard For Project Selling",
      description: "Real-time analytics dashboard with data visualization for e-commerce businesses of Project using React and WebSockets.",
      tags: ["TypeScript", "React.js", "Express", "API"],
      demoUrl: "https://akatsuki-project-alpha.vercel.app/",
      codeUrl: "https://github.com/JineshJain711/Akatsuki_project ",
      image: ecommerceImage,
      stats: {
        stars: 86,
        forks: 23
      }
    },
    // {
    //   title: "AI Image Generator",
    //   description: "Web interface for Stable Diffusion with custom model fine-tuning and image editing capabilities.",
    //   tags: ["Python", "TensorFlow", "Flask", "OpenCV"],
    //   demoUrl: "#",
    //   codeUrl: "#",
    //   image: aiImage,
    //   stats: {
    //     stars: 215,
    //     forks: 67
    //   }
    // },
    {
      title: "CloudBox",
      description: "CloudBox is a file storage and sharing platform using React.js and TypeScript.",
      tags: ["React", "TypeScript", "Javascript", "Tailwind CSS", "Node.js", "MongoDB", "Cloudinary","NodeMailer"],
      demoUrl: "https://cloudboxf.vercel.app/",
      codeUrl: "https://github.com/JineshJain711/CloudBox",
      image: `src/assets/cloudbox.png`,
      stats: {
        stars: 94,
        forks: 31
      }
    },
    {
      title: "Self Porfolio",
      description: "Self Porfolio project using React.js and TypeScript.",
      tags: ["React", "TypeScript", "Javascript", "Tailwind CSS"],
      demoUrl: "#",
      codeUrl: "#",
      image: bankingImage,
      stats: {
        stars: 94,
        forks: 31
      }
    }
  ];

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.15,
        duration: 0.5,
        ease: "easeOut"
      }
    })
  };

  return (
    <section 
      id="projects"
      className="relative py-20 px-6 bg-[#0c1a1a] text-white overflow-hidden"
      style={{
        backgroundImage: "radial-gradient(#1e2e2e 1px, transparent 1px)",
        backgroundSize: "20px 20px"
      }}
    >
      {/* Background elements */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(10)].map((_, i) => (
          <div
            key={i}
            className="absolute rounded-full bg-green-500/10"
            style={{
              width: Math.random() * 200 + 50 + 'px',
              height: Math.random() * 200 + 50 + 'px',
              top: Math.random() * 100 + '%',
              left: Math.random() * 100 + '%',
              filter: 'blur(40px)',
              opacity: 0.3,
            }}
          />
        ))}
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        <motion.h2
          className="text-4xl md:text-5xl font-bold text-center mb-4 text-green-400"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <span className="relative inline-block">
            Featured Projects
            <span className="absolute left-0 -bottom-2 w-full h-1 bg-green-400/50 rounded-full" />
          </span>
        </motion.h2>

        <motion.p
          className="text-center text-gray-300 text-lg mb-16 max-w-2xl mx-auto"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          viewport={{ once: true }}
        >
          Here are some of my projects with modern UI, clean code, and innovative solutions.
        </motion.p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              className="bg-[#0f2a2a] border border-green-500/30 rounded-xl overflow-hidden shadow-lg shadow-green-400/10 hover:shadow-green-400/30 transition-all group"
              custom={index}
              initial="hidden"
              whileInView="visible"
              variants={cardVariants}
              viewport={{ once: true, margin: "-100px" }}
              whileHover={{ y: -10 }}
            >
              {/* Project Image with Hover Effect */}
              <div className="relative h-48 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110 object-center group-hover:opacity-80"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0f2a2a] to-transparent opacity-80" />
                <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-[#0f2a2a] to-transparent" />
              </div>

              {/* Project Content */}
              <div className="p-6">
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-xl font-bold text-white">{project.title}</h3>
                  
                  {/* GitHub Stats */}
                  <div className="flex space-x-3 text-sm">
                    {/* <span className="flex items-center text-gray-300">
                      <FaRegStar className="mr-1 text-yellow-400" />
                      {project.stats.stars}
                    </span>
                    <span className="flex items-center text-gray-300">
                      <FaCodeBranch className="mr-1 text-blue-400" />
                      {project.stats.forks}
                    </span> */}
                  </div>
                </div>

                <p className="text-gray-300 mb-5">{project.description}</p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tags.map((tag, i) => (
                    <span 
                      key={i}
                      className="px-3 py-1 text-xs font-mono bg-[#1e3b3b] text-green-300 rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Buttons */}
                <div className="flex gap-3 mt-auto">
                  <a
                    href={project.demoUrl}
                    target="_blank"
                    className="flex items-center gap-2 px-4 py-2 bg-green-600 hover:bg-green-500 text-white font-medium rounded-lg transition-all flex-1 justify-center group"
                  >
                    <span>Live Demo</span>
                    <FaExternalLinkAlt className="transition-transform group-hover:translate-x-1" />
                  </a>
                  <a
                    href={project.codeUrl}
                    target="_blank"
                    className="flex items-center gap-2 px-4 py-2 bg-[#1e3b3b] hover:bg-[#2e4b4b] text-gray-300 font-medium rounded-lg transition-all group"
                  >
                    <span>View Code</span>
                    <FaGithub className="transition-transform group-hover:scale-110" />
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* View more button */}
        <motion.div
          className="text-center mt-16"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
          viewport={{ once: true }}
        >
          <a
            href="https://github.com/JineshJain711"
            target="_blank"
            className="inline-flex items-center px-6 py-3 border-2 border-green-500/40 hover:border-green-400 text-green-300 font-medium rounded-lg transition-all group"
          >
            View All Projects
            <span className="ml-2 group-hover:translate-x-1 transition-transform">
              <FaExternalLinkAlt />
            </span>
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;