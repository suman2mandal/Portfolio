"use client";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { BsMoonFill, BsFillSunFill } from "react-icons/bs";
import { MdDeveloperMode } from "react-icons/md";
import { motion } from "framer-motion";

const Switcher = () => {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  // useEffect only runs on the client, so now we can safely show the UI
  useEffect(() => {
    setMounted(true);
  }, []);
  if (!mounted) {
    return null;
  }
  return (
    <div>
      {/* The current theme is: {theme} */}
      <motion.button
        id="theme-btn"
        aria-label="Toggle Dark Mode"
        className="flex justify-center items-center"
        whileTap={{
          scale: 0.7,
          rotate: 360,
          transition: { duration: 0.2 },
        }}
        whileHover={{ scale: 1.2 }}
        onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
      >
        {theme === "dark" ? (
          <MdDeveloperMode className="text-3xl" />
        ) : (
          <MdDeveloperMode className="text-3xl" />
        )}
      </motion.button>
    </div>
  );
};
export default Switcher;
