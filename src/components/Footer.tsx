import { FaInstagram, FaLinkedin, FaGithub, FaPhoneAlt } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-[#091414] text-white py-6 px-6 relative border-0.5">
      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-12">
        
        {/* Section 1: About */}
        <div>
          <h3 className="text-2xl font-bold text-green-400 mb-2 relative inline-block">
            JJ's Portfolio
            <span className="absolute left-0 -bottom-1 w-full h-0.5 bg-green-500 rounded-full" />
          </h3>
          <p className="text-sm text-gray-400 mt-2 mb-4">
            BTech Student • Tech Explorer • Devloper 💻
            <br/>
            Passionate about technology and coding. I love to explore new technologies and create innovative solutions.
           <br/>
           <b> Coding: Where Logic Becomes Magic.</b>
          </p>
          <div className="flex items-center gap-2 text-sm text-gray-400 hover:text-green-300 transition-all">
            <FaPhoneAlt className="text-green-400" />
            <span>+91 7821974911</span>
          </div>
        </div>

        {/* Section 2: Quick Links */}
        <div>
          <h4 className="text-xl font-semibold text-green-300 mb-2 relative inline-block">
            Quick Links
            <span className="absolute left-0 -bottom-1 w-full h-0.5 bg-green-400 rounded-full" />
          </h4>
          <ul className="space-y-2 text-sm text-gray-400 mt-3">
            <li>
              <a href="/" className="hover:text-green-400 hover:pl-1 transition-all">🏠 Home</a>
            </li>
            <li>
              <a href="/about" className="hover:text-green-400 hover:pl-1 transition-all">👤 About</a>
            </li>
            <li>
              <a href="/projects" className="hover:text-green-400 hover:pl-1 transition-all">📁 Projects</a>
            </li>
            <li>
              <a href="/contact" className="hover:text-green-400 hover:pl-1 transition-all">📬 Contact</a>
            </li>
          </ul>
        </div>

        {/* Section 3: Socials */}
        <div>
          <h4 className="text-xl font-semibold text-green-300 mb-2 relative inline-block">
            Social
            <span className="absolute left-0 -bottom-1 w-full h-0.5 bg-green-400 rounded-full" />
          </h4>
          <div className="flex items-center gap-5 text-2xl mt-3">
            <a
              href="https://instagram.com/jineshjain711"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-pink-400 transition duration-200 hover:scale-110 hover:drop-shadow-[0_0_6px_#ec4899]"
            >
              <FaInstagram />
            </a>
            <a
              href="https://linkedin.com/in/jinesh-jain-004380266"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-blue-500 transition duration-200 hover:scale-110 hover:drop-shadow-[0_0_6px_#3b82f6]"
            >
              <FaLinkedin />
            </a>
            <a
              href="https://github.com/JineshJain711"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition duration-200 hover:scale-110 hover:drop-shadow-[0_0_6px_white]"
            >
              <FaGithub />
            </a>
          </div>
          <p className="text-sm text-gray-400 mt-4">
            Let’s connect and grow together 🚀
          </p>
        </div>
      </div>

      {/* Bottom Text */}
      <div className="text-center text-xs mt-12 text-gray-500">
        © {new Date().getFullYear()} JJ. Crafted by Jinesh Jain.
      </div>
    </footer>
  );
};

export default Footer;
