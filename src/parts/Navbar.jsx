import React, { useState } from "react";
import { useData } from "./Memory";
import { motion } from "framer-motion";
import { Menu } from "lucide-react";
import { useLocation } from "react-router-dom";

const linkVariants = {
  initial: { color: "#fff" },
  hover: { color: "#bbf7d0" }, // green-200
  tap: { scale: 0.95 },
};

const underlineVariants = {
  initial: { width: 0 },
  hover: { width: "100%" },
  active: { width: "100%" },
};

export default function Navbar() {
  const { screenSize } = useData();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();
  const actualPage = location.pathname;

  const navLinks = [
    { href: "/", label: "Domů" },
    { href: "/muscles", label: "Svaly" },
    { href: "/contact", label: "O mně" },
  ];

  return (
    <div>
      {screenSize.width > 1024 ? (
        <div className="flex items-center text-white justify-between px-8 py-4 bg-green-500 relative z-50">
          <div className="w-16">
            <a href="/">
              <h2 className="text-3xl font-bold text-nowrap">Svalová zóna</h2>
            </a>
          </div>

          <div className="flex flex-col items-center justify-center">
            <div className="flex text-lg font-bold text-center items-center justify-center space-x-16">
              {navLinks.map((link) => (
                <motion.a
                  key={link.href}
                  href={link.href}
                  variants={linkVariants}
                  initial="initial"
                  whileHover="hover"
                  whileTap="tap"
                  animate={actualPage === link.href ? "hover" : "initial"}
                  className="relative w-20 cursor-pointer"
                  style={{ display: "inline-block" }}
                >
                  <span className="relative z-10">{link.label}</span>
                  <motion.span
                    className="absolute left-0 -bottom-1 h-1 rounded bg-green-200"
                    variants={underlineVariants}
                    initial="initial"
                    animate={actualPage === link.href ? "active" : "initial"}
                    whileHover="hover"
                    transition={{ duration: 0.3 }}
                    style={{ display: "block" }}
                  />
                </motion.a>
              ))}
            </div>
          </div>
          <div className="w-16"></div>
        </div>
      ) : (
        <div className="relative bg-green-500 p-4 text-white flex justify-between items-center z-50">
          <div className="w-16">
            <a href="/">
              <span className="text-xl font-bold text-nowrap">
                Svalová zóna
              </span>
            </a>
          </div>
          <button onClick={() => setIsMenuOpen(!isMenuOpen)}>
            <Menu size={32} />
          </button>

          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{
              height: isMenuOpen ? "auto" : 0,
              opacity: isMenuOpen ? 1 : 0,
            }}
            transition={{ duration: 0.3 }}
            className="absolute top-full left-0 w-full bg-green-600 text-white overflow-hidden z-50"
          >
            <div className="flex flex-col items-center py-4 space-y-2">
              {navLinks.map((link) => (
                <motion.a
                  key={link.href}
                  href={link.href}
                  whileHover={{ scale: 1.04, backgroundColor: "#22c55e" }} // green-500
                  whileTap={{ scale: 0.97, backgroundColor: "#16a34a" }} // green-600
                  className={`w-full text-center py-2 rounded-lg transition-colors duration-200 ${
                    actualPage === link.href ? "bg-green-700 font-bold" : ""
                  }`}
                  style={{ display: "block" }}
                >
                  {link.label}
                </motion.a>
              ))}
            </div>
          </motion.div>
        </div>
      )}
    </div>
  );
}
