import { motion } from "framer-motion";
import { FaCode } from "react-icons/fa";

const Loader = () => {
  const letters = ["J", "J", "'", "s", " ", "P", "o", "r", "t", "f", "o", "l", "i", "o"];

  return (
    <motion.div
      className="fixed inset-0 bg-[#0c1a1a] flex flex-col items-center justify-center z-[999]"
      initial={{ opacity: 1 }}
      animate={{ opacity: 0 }}
      exit={{ opacity: 0 }}
      transition={{ delay: 3, duration: 0.8, ease: "easeInOut" }}
    >
      {/* Animated tech grid background */}
      <div className="absolute inset-0 overflow-hidden opacity-20">
        <div 
          className="absolute inset-0"
          style={{
            backgroundImage: "radial-gradient(#1e2e2e 1px, transparent 1px)",
            backgroundSize: "20px 20px",
          }}
        />
      </div>

      {/* Main loader content */}
      <div className="relative z-10 flex flex-col items-center">
        {/* Code brackets animation */}
        <motion.div
          className="flex items-center mb-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <motion.span 
            className="text-green-400 text-5xl font-mono"
            initial={{ x: -20 }}
            animate={{ x: 0 }}
            transition={{ duration: 0.8 }}
          >
            &lt;
          </motion.span>
          
          {/* Animated letters */}
          <div className="flex mx-2">
            {letters.map((letter, index) => (
              <motion.span
                key={index}
                className={`text-4xl font-bold ${
                  index < 2 ? 'text-green-400' : 
                  index === 3 ? 'text-green-300' : 
                  'text-gray-300'
                }`}
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{
                  delay: 0.3 + index * 0.05,
                  duration: 0.5,
                  type: "spring",
                  damping: 12,
                  stiffness: 200
                }}
              >
                {letter}
              </motion.span>
            ))}
          </div>
          
          <motion.span 
            className="text-green-400 text-5xl font-mono"
            initial={{ x: 20 }}
            animate={{ x: 0 }}
            transition={{ duration: 0.8 }}
          >
            /&gt;
          </motion.span>
        </motion.div>

        {/* Animated code icon */}
        <motion.div
          className="mt-8 text-green-400"
          initial={{ scale: 0, rotate: -180 }}
          animate={{ 
            scale: 1, 
            rotate: 0,
            transition: { 
              delay: 1.5,
              type: "spring",
              stiffness: 260,
              damping: 20
            }
          }}
        >
          <FaCode className="text-4xl" />
        </motion.div>

        {/* Loading bar */}
        <motion.div 
          className="mt-8 h-1 w-64 bg-[#1e2e2e] rounded-full overflow-hidden"
          initial={{ width: 0 }}
          animate={{ width: 256 }}
          transition={{ 
            delay: 0.5,
            duration: 2,
            ease: "easeInOut"
          }}
        >
          <motion.div
            className="h-full bg-gradient-to-r from-green-400 to-green-600"
            initial={{ x: "-100%" }}
            animate={{ x: "100%" }}
            transition={{
              repeat: Infinity,
              duration: 2,
              ease: "linear"
            }}
          />
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Loader;