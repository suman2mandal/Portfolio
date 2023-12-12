"use client"
import React, { useEffect, useState } from 'react';
import {motion} from 'framer-motion';
import '@/app/globals.css';
import Image from "next/image";

function App() {
    return (
        <div className="
         application flex flex-col justify-center ">
            {/*<div className="bg-amber-400/25 z-10 w-screen h-screen absolute">*/}

            {/*</div>*/}
            <h1  className="text-2xl sm:text-5xl text-center font-bold flex justify-center">
                The Ultimate Starter Template You
            </h1>
            <h3  className="text-xl sm:text-4xl text-center mt-2 font-bold flex justify-center">
                {" "}
                Need To Start Your Astro Project
            </h3>
            <p  className="dark:text-gray-400 text-gray-800 mt-6 text-center xl:text-2xl">
                Experienced Web Developer adept in all stages of advanced web development.<br/> Knowledgeable in user interface, web development, and debugging processes.<br/> Bringing forth expertise in installation, testing, and maintenance of web systems.<br/> Equipped with a diverse and promising skill set.<br/> Proficient in various technologies, including HTML5, React, Next JS, Express, MongoDB, and Nginx.<br/> Able to effectively self-manage during independent projects, as well as collaborate in a team setting.
                <br/>
            </p>
            <div className="">
                <div className=" flex mt-10 justify-center">

                    <Image
                        src="/Background.png"
                        className="min-w-full justify-center h-1/6 w-4/6"
                        width={1000}
                        height={1000}
                        alt="Can't load Image"
                    />

                    <Image
                        src="/Layer 2.png"
                        className="min-w-full  justify-center h-20 w-14 absolute"
                        width={1000}
                        height={1000}
                        alt="Can't load Image"
                    />
                    {/*</motion.div>*/}
                    <Image
                        src="/Layer 4.png"
                        className="min-w-full  justify-center  w-4/6 absolute"
                        width={1000}
                        height={1000}
                        alt="Can't load Image"
                    />
                    <Image
                        src="/Layer 5.png"
                        className="min-w-full  justify-center  w-4/6 absolute"
                        width={1000}
                        height={1000}
                        alt="Can't load Image"
                    />
                </div>
            </div>
        </div>
    );
}

export default App;
