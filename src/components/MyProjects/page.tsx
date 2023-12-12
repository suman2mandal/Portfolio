"use client";

import ProjectCard from "@/components/MyProjects/ProjectCard";
import { Projects } from "@/constants";
import React from "react";

const MyProjects = () => {
  return (
    <div>
      <p className="bg-gradient-to-r from-purple-500 to-red-500 bg-clip-text text-transparent mt-52 flex items-center justify-center text-5xl font-extrabold py-6"> MY PROJECTS & WORKS</p>
      <div className="w-screen h-full mt-24 flex items-center justify-center bg-center bg-cover">
        <div className="grid lg:grid-cols-2 lg:grid-rows-2 gap-8 max-w-[90%] max-h-[90%]">
          {Projects.map((project, index) => (
            <ProjectCard
              key={index}
              title={project.title}
              text={project.text}
              image={project.src}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default MyProjects;
