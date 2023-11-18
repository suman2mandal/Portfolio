"use client";
import React from "react";
import Link from "next/link";
import { ImGithub, ImLinkedin } from "react-icons/im";
import { FaXTwitter } from "react-icons/fa6";
import { PiMetaLogo } from "react-icons/pi";
import { motion } from "framer-motion";

function Footer() {
  return (
    <>
      <div className="grid grid-cols-3 grid-rows-1">
        <div className="flex justify-center">
          <p className="font-signature ml-2 text-gray-700 dark:text-white">
            <Link
              href="/"
              className="flex justify-center items-center gap-2 font-bold"
            >
              PORTFOLIO
            </Link>
          </p>
        </div>
        <div className="flex justify-center">
          <p className="text-xl mr-6">Elements</p>
          <p className="text-xl">Privacy Policy</p>
        </div>
        <div className="flex justify-center">
          <motion.div
            whileHover={{
              x: 0,
              y: 0,
              scale: 1.3,
              rotate: 8,
            }}
            whileTap={{
              scale: 1,
              rotate: -8,
              borderRadius: "100%",
            }}
            className="text-4xl mx-2 p-2"
          >
            <ImGithub />
          </motion.div>
          <motion.div
            whileHover={{
              x: 0,
              y: 0,
              scale: 1.3,
              rotate: 8,
            }}
            whileTap={{
              scale: 1,
              rotate: -8,
              borderRadius: "100%",
            }}
            className="text-4xl mx-2 p-2"
          >
            <ImLinkedin />
          </motion.div>
          <motion.div
            whileHover={{
              x: 0,
              y: 0,
              scale: 1.3,
              rotate: 8,
            }}
            whileTap={{
              scale: 1,
              rotate: -8,
              borderRadius: "100%",
            }}
            className="text-4xl mx-2 p-2"
          >
            <FaXTwitter />
          </motion.div>
          <motion.div
            whileHover={{
              x: 0,
              y: 0,
              scale: 1.3,
              rotate: 8,
            }}
            whileTap={{
              scale: 1,
              rotate: -8,
              borderRadius: "100%",
            }}
            className="text-4xl mx-2 p-2"
          >
            <PiMetaLogo />
          </motion.div>
        </div>
      </div>
      <div className="flex justify-center text-gray-500 dark:text-gray-500">
        Designed And Developed by Suman and Subham
      </div>
    </>
  );
}

export default Footer;
