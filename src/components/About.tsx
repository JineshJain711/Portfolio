import { FaGithub, FaJava, FaReact, FaNodeJs, FaFigma } from "react-icons/fa";
import { SiLeetcode, SiHackerrank, SiCodechef, SiPython, SiJavascript, SiMongodb, SiTailwindcss, SiOpencv,SiGeeksforgeeks } from "react-icons/si";
import { DiHtml5, DiCss3 } from "react-icons/di";

const About = () => {
  const techLogos = [
    { name: "LeetCode", icon: <SiLeetcode className="text-orange-500" size={24} />, url: "https://leetcode.com/u/Jain_Jinesh/" },
    { name: "HackerRank", icon: <SiHackerrank className="text-green-500" size={24} />, url: "https://www.hackerrank.com/profile/jineshjain711" },
    { name: "CodeChef", icon: <SiCodechef className="text-gray-300" size={24} />, url: "https://www.codechef.com/users/jineshjain" },
    { name: "GitHub", icon: <FaGithub className="text-white" size={24} />, url: "https://github.com/JineshJain711" },
    {name: "GeeksforGeeks", icon: <SiGeeksforgeeks className="text-green-500" size={24} />, url: "https://www.geeksforgeeks.org/user/jinesh_jain/" },
  ];

  return (
    <section
      id="about"
      className="relative px-6 py-20 bg-[#0c1a1a] text-white overflow-hidden"
      style={{
        backgroundImage: "radial-gradient(#1e2e2e 1px, transparent 1px)",
        backgroundSize: "20px 20px",
      }}
    >
      {/* Animated background elements */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
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

      <div className="max-w-6xl mx-auto text-center relative z-10">
        <h2 className="text-4xl md:text-5xl font-bold mb-6 text-green-400">
          <span className="inline-block relative">
            About Me
            <span className="absolute -bottom-2 left-0 w-full h-1 bg-green-400/50 rounded-full"></span>
          </span>
        </h2>

        <p className="text-gray-300 text-lg md:text-xl max-w-3xl mx-auto leading-relaxed mb-14">
          I'm a passionate developer focused on creating tech solutions that leave impact. With a
          love for clean code, sleek UI, and smart logic, I specialize in web development,
          Java-based applications, and AI/ML. I build things that are beautiful <span className="text-green-300">and</span> functional.
        </p>

        {/* Tech platform logos */}
        <div className="flex flex-wrap justify-center gap-6 mb-14">
          {techLogos.map((logo, index) => (
            <a
              key={index}
              href={logo.url}
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-col items-center group"
              title={logo.name}
            >
              <div className="bg-[#0f2a2a] p-4 rounded-lg border border-green-500/20 group-hover:border-green-400/50 transition-all group-hover:scale-110 mb-2">
                {logo.icon}
              </div>
              <span className="text-xs text-gray-400 opacity-0 group-hover:opacity-100 transition">{logo.name}</span>
            </a>
          ))}
        </div>

        <div className="grid md:grid-cols-3 gap-8">
  {/* Education Card */}
  <div className="bg-[#0f2a2a] border border-green-500/40 rounded-xl p-6 shadow-lg shadow-green-400/10 hover:shadow-green-400/30 transition hover:-translate-y-1 relative group">
    <div className="absolute inset-0 rounded-xl border border-green-400/20 opacity-0 group-hover:opacity-100 transition pointer-events-none"></div>
    <h3 className="text-xl font-semibold text-green-300 mb-4 flex items-center">
      <span className="mr-2">🎓</span> Education
    </h3>
    <ul className="text-sm text-gray-200 space-y-3 text-left">
      <li className="border-l-2 border-green-500 pl-3">
        <span className="font-medium">10th – Scored <b>89.80%</b></span><br />
        R. C. Patel Marathi Madhyamik Vidyalaya, Shirpur<br />
        <span className="text-xs text-gray-400">2020 – 2021</span>
      </li>
      <li className="border-l-2 border-green-500 pl-3">
        <span className="font-medium">12th (HSC) – Scored <b>78.83%</b></span><br />
        R. C. Patel Science, Commerce & Arts Jr. College, Shirpur<br />
        <span className="text-xs text-gray-400">2021 – 2023</span>
      </li>
      <li className="border-l-2 border-green-500 pl-3">
        <span className="font-medium">Bachelor’s in Computer Engineering – <b>8.55 CGPA</b> (Till 4th Sem)</span><br />
        R. C. Patel Institute of Technology, Shirpur<br />
        <span className="text-xs text-gray-400">2023 – 2027</span>
      </li>
    </ul>
  </div>

  {/* Achievements Card */}
  <div className="bg-[#0f2a2a] border border-green-500/40 rounded-xl p-6 shadow-lg shadow-green-400/10 hover:shadow-green-400/30 transition hover:-translate-y-1 relative group">
    <div className="absolute inset-0 rounded-xl border border-green-400/20 opacity-0 group-hover:opacity-100 transition pointer-events-none"></div>
    <h3 className="text-xl font-semibold text-green-300 mb-4 flex items-center">
      <span className="mr-2">🏆</span> Achievements
    </h3>
    <ul className="text-sm text-gray-200 space-y-3 text-left">
      <li className="flex items-start">
        <span className="text-green-400 mr-2">🚀</span> 
        <span>Built ATS Resume Score Checker full-stack web app</span>
      </li>
      <li className="flex items-start">
        <span className="text-green-400 mr-2">💼</span> 
        <span>Java Developer Intern at R3 Systems India Pvt. Ltd.</span>
      </li>
      <li className="flex items-start">
        <span className="text-green-400 mr-2">🎨</span> 
        <span>Participated in UI/UX Hackathon 2024</span>
      </li>
      <li className="flex items-start">
        <span className="text-green-400 mr-2">💡</span> 
        <span>Innovated key generation patent concept</span>
      </li>
      <li className="flex items-start">
        <span className="text-green-400 mr-2">📚</span> 
        <span>Solved 100+ coding problems</span>
      </li>
      <li className="flex items-start">
        <span className="text-green-400 mr-2">⚙️</span> 
        <span>Rated 2-star Coder on GeeksforGeeks</span>
      </li>
    </ul>
  </div>


          {/* Skills Card */}
          <div className="bg-[#0f2a2a] border border-green-500/40 rounded-xl p-6 shadow-lg shadow-green-400/10 hover:shadow-green-400/30 transition hover:-translate-y-1 relative group">
            <div className="absolute inset-0 rounded-xl border border-green-400/20 opacity-0 group-hover:opacity-100 transition pointer-events-none"></div>
            <h3 className="text-xl font-semibold text-green-300 mb-4 flex items-center">
              <span className="mr-2">🧠</span> Skills
            </h3>
            <ul className="text-sm text-gray-200 space-y-3 text-left">
              <li className="flex items-center">
                <FaJava className="text-red-500 mr-2" />
                <span>Java</span>
              </li>
              <li className="flex items-center">
                <SiPython className="text-blue-400 mr-2" />
                <span>Python</span>
              </li>
              <li className="flex items-center">
                <SiJavascript className="text-yellow-400 mr-2" />
                <span>JavaScript</span>
              </li>
              <li className="flex items-center">
                <FaReact className="text-blue-500 mr-2" />
                <span>React</span>
              </li>
              <li className="flex items-center">
                <FaNodeJs className="text-green-500 mr-2" />
                <span>Node.js, Express</span>
              </li>
              <li className="flex items-center">
                <SiMongodb className="text-green-400 mr-2" />
                <span>MongoDB</span>
              </li>
              <li className="flex items-center">
                <DiHtml5 className="text-orange-500 mr-2" />
                <DiCss3 className="text-blue-500 mr-2" />
                <SiTailwindcss className="text-cyan-400 mr-2" />
                <span>HTML, CSS, Tailwind</span>
              </li>
              <li className="flex items-center">
                <FaFigma className="text-purple-500 mr-2" />
                <span>Figma</span>
              </li>
              <li className="flex items-center">
                <SiOpencv className="text-white mr-2" />
                <span>AI/ML & OpenCV Basics</span>
              </li>
            </ul>
          </div>
        </div>

        {/* CTA */}
        <div className="mt-16">
          <a 
            href="#contact" 
            className="inline-flex items-center px-6 py-3 bg-green-600 hover:bg-green-700 text-white font-medium rounded-lg transition-all shadow-lg hover:shadow-green-600/30 animate-pulse hover:animate-none"
          >
            Let's Build Something Amazing
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
