"use client"
import React, { useEffect, useState } from 'react';
import {motion} from 'framer-motion';
import '@/app/globals.css';
import Image from "next/image";

function App() {
    const [mousePosition, setMousePosition] = useState({
        x: 0,
        y: 0
    });
    const [cursorVariant, setCursorVariant] = useState("default");

    useEffect(() => {
        const mouseMove = (e:any) => {
            setMousePosition({
                x: e.clientX,
                y: e.clientY
            })
        }

        window.addEventListener("mousemove", mouseMove);

        return () => {
            window.removeEventListener("mousemove", mouseMove);
        }
    }, []);

    const variants:any = {
        default: {
            x: mousePosition.x - 17,
            y: mousePosition.y - 17,
        },
        text: {
            height: 150,
            width: 150,
            x: mousePosition.x - 75,
            y: mousePosition.y - 75,
            backgroundColor: "white",
            mixBlendMode: "difference"
        }
    }

    const textEnter = () => setCursorVariant("text");
    const textLeave = () => setCursorVariant("default");

    // @ts-ignore
    return (
        // <div className="application">
        //     <h1 onMouseEnter={textEnter} onMouseLeave={textLeave} className='title'>Hello World</h1>
        //     <motion.div
        //         className='cursor'
        //         variants={variants}
        //         animate={cursorVariant}
        //     />
        // </div>


        <div onMouseEnter={textEnter} onMouseLeave={textLeave}  className="
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
            {/*<div className="flex mt-6 justify-center">*/}
            {/*    <button*/}
            {/*        type="button"*/}
            {/*        className="dark:bg-white bg-black/80 relative inline-flex items-center text-white/90 dark:text-black/80 font-bold hover:text-white hover:dark:text-black px-4 justify-center rounded-xl p-2 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"*/}
            {/*        aria-controls="mobile-menu"*/}
            {/*        aria-expanded="false"*/}
            {/*    >*/}
            {/*        Contact Me*/}
            {/*    </button>*/}
            {/*</div>*/}
            <div className="">
                <div className=" flex mt-10 justify-center">

                    <Image
                        src="/Background.png"
                        className="min-w-full justify-center h-1/6 w-4/6"
                        width={1000}
                        height={1000}
                        alt="Can't load Image"
                    />

                    <motion.div
                        style={{  height: '100px', width: '100px' }}
                        animate={{
                            y: [0, -10, 0, 10, 0], // Define the vertical motion path
                        }}
                        transition={{
                            repeat: Infinity, // Repeat the motion infinitely
                            duration: 2, // Total duration for one complete cycle (in seconds)
                            ease: 'linear', // Use linear easing for a constant speed
                        }}
                    >
                        {/*need to set a fix positon currently it's in right most*/}
                    <Image
                        src="/Layer 2.png"
                        className="min-w-full  justify-center h-20 w-14 absolute"
                        width={1000}
                        height={1000}
                        alt="Can't load Image"
                    />
                    </motion.div>
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
             <motion.div
                 className='cursor'
                 variants={variants}
                 animate={cursorVariant}
             />
        </div>
    );
}

export default App;
