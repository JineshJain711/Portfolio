import { motion } from "framer-motion";
import { FaEnvelope, FaGithub, FaLinkedin } from "react-icons/fa";

const Contact = () => {
  return (
    <section
      id="contact"
      className="min-h-screen py-20 px-6 bg-[#0c1a1a] text-white"
      style={{
        backgroundImage: "radial-gradient(#1e2e2e 1px, transparent 1px)",
        backgroundSize: "20px 20px",
      }}
    >
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="max-w-4xl mx-auto"
      >
        <h2 className="text-4xl font-bold text-center mb-4 text-green-400">
          Let’s Have a Chat 💬
        </h2>
        <p className="text-center text-gray-400 mb-12">
          Whether it's a collaboration or just a conversation — I'm here for it!
        </p>

        {/* Support Form */}
        <div className="bg-[#112c2c] p-8 rounded-2xl shadow-xl border border-green-400/20">
          <h3 className="text-2xl font-semibold mb-2 text-green-300">
            Stuck Somewhere? Let's Solve 🚀
          </h3>
          <p className="mb-6 text-gray-400 text-sm">
            I’ll get back to you as soon as I can — let’s solve it together!
          </p>

          <form className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Name */}
            <div className="flex flex-col">
              <label className="mb-1 text-sm text-green-200">Your Name</label>
              <input
                type="text"
                placeholder="Jinesh Jain"
                className="bg-[#1e3b3b] p-3 rounded-md border border-green-400/30 focus:outline-none focus:ring-2 focus:ring-green-400 text-white"
              />
            </div>

            {/* Email */}
            <div className="flex flex-col">
              <label className="mb-1 text-sm text-green-200">Your Email</label>
              <input
                type="email"
                placeholder="jineshjain@example.com"
                className="bg-[#1e3b3b] p-3 rounded-md border border-green-400/30 focus:outline-none focus:ring-2 focus:ring-green-400 text-white"
              />
            </div>

            {/* Message */}
            <div className="flex flex-col md:col-span-2">
              <label className="mb-1 text-sm text-green-200">Your Message</label>
              <textarea
                rows={5}
                placeholder="Hey Jinesh, I’d like to connect regarding..."
                className="bg-[#1e3b3b] p-3 rounded-md border border-green-400/30 focus:outline-none focus:ring-2 focus:ring-green-400 text-white"
              />
            </div>

            {/* Button */}
            <div className="md:col-span-2 text-center">
              <button
                type="submit"
                className="bg-green-400 hover:bg-green-500 text-black font-semibold py-2 px-8 rounded-md transition shadow-md"
              >
                Submit Ticket
              </button>
            </div>
          </form>
        </div>

        {/* Contact Icons */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="mt-12 flex flex-col md:flex-row justify-center items-center gap-6 text-lg text-gray-300"
        >
          <a
            href="mailto:jineshjain711@gmail.com"
            className="flex items-center gap-2 hover:text-green-400 transition"
          >
            <FaEnvelope /> jineshjain711@gmail.com
          </a>
          <a
            href="https://github.com/JineshJain711"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 hover:text-green-400 transition"
          >
            <FaGithub /> GitHub
          </a>
          <a
            href="https://linkedin.com/in/jinesh-jain-004380266"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 hover:text-green-400 transition"
          >
            <FaLinkedin /> LinkedIn
          </a>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Contact;
