import { useState, useRef, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { HiMenu, HiX } from "react-icons/hi";
import { motion, AnimatePresence } from "framer-motion";

const Navbar = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);
  const [activeLink, setActiveLink] = useState("home");
  const menuRef = useRef<HTMLDivElement>(null);

  const navLinks = [
    { id: "home", label: "Home" },
    { id: "about", label: "About" },
    { id: "projects", label: "Projects" },
    { id: "skills", label: "Skills" },
    { id: "contact", label: "Contact" },
  ];

  const handleNavigation = (sectionId: string) => {
    setIsOpen(false);
    setActiveLink(sectionId);

    if (sectionId === "projects" && location.pathname !== "/projects") {
      navigate("/projects");
    } else if (location.pathname !== "/") {
      navigate("/", {
        state: { scrollTo: sectionId },
        replace: true,
      });

      setTimeout(() => {
        const element = document.getElementById(sectionId);
        if (element) {
          element.scrollIntoView({
            behavior: "smooth",
            block: "start",
          });
        }
      }, 100);
    } else {
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      }
    }
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // Update active link based on scroll position
  useEffect(() => {
    const handleScroll = () => {
      const sections = navLinks.map(link => document.getElementById(link.id));
      const scrollPosition = window.scrollY + 100;

      sections.forEach(section => {
        if (section) {
          const sectionTop = section.offsetTop;
          const sectionHeight = section.offsetHeight;

          if (
            scrollPosition >= sectionTop &&
            scrollPosition < sectionTop + sectionHeight
          ) {
            setActiveLink(section.id);
          }
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ type: "spring", stiffness: 100 }}
      className="fixed w-full z-50 backdrop-blur-md bg-[#0c1a1a]/80 border-b border-green-900/30 text-white"
    >
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        <motion.h1 
          whileHover={{ scale: 1.05 }}
          className="text-2xl font-bold bg-gradient-to-r from-green-400 to-teal-300 bg-clip-text text-transparent"
        >
          Jinesh Jain
        </motion.h1>

        {/* Desktop Links */}
        <ul className="hidden md:flex space-x-8 items-center">
          {navLinks.map((link) => (
            <li key={link.id} className="relative">
              <button
                onClick={() => handleNavigation(link.id)}
                className={`px-2 py-1 font-medium transition-colors ${
                  activeLink === link.id 
                    ? "text-green-400" 
                    : "text-green-300 hover:text-green-400"
                }`}
              >
                {link.label}
                {activeLink === link.id && (
                  <motion.div
                    layoutId="activeLink"
                    className="absolute bottom-0 left-0 w-full h-0.5 bg-green-400"
                    transition={{ type: "spring", bounce: 0.25 }}
                  />
                )}
              </button>
            </li>
          ))}
        </ul>

        {/* Mobile Menu */}
        <div className="md:hidden relative" ref={menuRef}>
          <motion.button 
            onClick={() => setIsOpen(!isOpen)}
            whileTap={{ scale: 0.9 }}
            className="p-2 rounded-full bg-[#0f2a2a]/50"
          >
            {isOpen ? (
              <HiX size={24} className="text-green-400" />
            ) : (
              <HiMenu size={24} className="text-green-400" />
            )}
          </motion.button>

          <AnimatePresence>
            {isOpen && (
              <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ type: "spring", damping: 20 }}
                className="absolute right-0 mt-2 w-56 bg-[#0f2a2a] border border-green-500/20 rounded-xl shadow-xl overflow-hidden z-50"
              >
                <ul className="flex flex-col py-2">
                  {navLinks.map((link) => (
                    <motion.li
                      key={link.id}
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      <button
                        onClick={() => handleNavigation(link.id)}
                        className={`w-full text-left px-4 py-3 text-sm font-medium transition-colors ${
                          activeLink === link.id
                            ? "bg-green-900/20 text-green-400"
                            : "text-green-300 hover:text-green-400"
                        }`}
                      >
                        {link.label}
                      </button>
                    </motion.li>
                  ))}
                </ul>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </motion.nav>
  );
};

export default Navbar;