"use client";
import React, { useState } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import HedingWrapper from "@/components/Wrapper/HedingWrapper";



function App() {
    // Set up state for hover effect
    const [hoverStyles, setHoverStyles] = useState({
        layer2: { y: 0 },
        layer4: { y: 0 },
        layer5: { y: 0 },
    });

    // Function to handle hover over an image
    const handleHover = (imageKey) => {
        setHoverStyles((prevStyles) => ({
            ...prevStyles,
            [imageKey]: { y: -5 }, // Adjust the translateY value as needed
        }));
    };

    // Function to handle hover leave an image
    const handleHoverLeave = (imageKey) => {
        setHoverStyles((prevStyles) => ({
            ...prevStyles,
            [imageKey]: { y: 0 },
        }));
    };

    // Define animation properties
    const animationProps = {
        whileHover: hoverStyles,
        transition: { duration: 1, yoyo: Infinity },
    };

    return (
        <div className="
         application flex flex-col justify-center ">
            <HedingWrapper>
                Welcome to my portfolio!
            </HedingWrapper>


            <h2  className="text-xl sm:text-4xl text-center mt-2 font-bold flex justify-center">
                {" "}
                Exploring the Digital Landscape: My Web Development Journey
            </h2>
            <p className="dark:text-gray-400 text-xl text-gray-800 mt-6 text-left md:text-center  xl:text-2xl ">
                I’m a passionate Web Developer with a knack for creating dynamic and interactive web experiences.<br/>
                I’m currently on the lookout for new opportunities to bring my skills to a forward-thinking
                company.<br/>

                If you’re seeking a dedicated developer who is always on the pulse of the latest industry trends and
                technologies, then look no further.<br/> Let’s connect and explore how we can build the future of the
                web
                together! 💼🚀
                <br/>
            </p>
        <div className="application flex flex-col justify-center">
            {/* ... (your existing code) ... */}

            <div className="lg:mx-60 md:mx-20">
                <div className="flex mt-10 justify-center">

                    {/* Background.png with no motion effect */}
                    <Image
                        src="/Background.png"
                        className="min-w-full justify-center h-1/6 w-4/6"
                        width={1000}
                        height={1000}
                        alt="Can't load Image"
                    />

                    {/* Layer 2.png with hover effect */}
                    <motion.div
                        onMouseOver={() => handleHover('layer2')}
                        onMouseLeave={() => handleHoverLeave('layer2')}
                        style={{ position: 'absolute', zIndex: 1 }}
                        {...animationProps}
                    >
                        <Image
                            src="/Layer 2.png"
                            className="min-w-full justify-center w-2/12"
                            width={1000}
                            height={1000}
                            alt="Can't load Image"
                        />
                    </motion.div>

                    {/* Layer 4.png with hover effect */}
                    <motion.div
                        onMouseOver={() => handleHover('layer4')}
                        onMouseLeave={() => handleHoverLeave('layer4')}
                        style={{ position: 'absolute', zIndex: 2 }}
                        {...animationProps}
                    >
                        <Image
                            src="/Layer 4.png"
                            className="min-w-full justify-center w-4/6"
                            width={1000}
                            height={1000}
                            alt="Can't load Image"
                        />
                    </motion.div>

                    {/* Layer 5.png with hover effect */}
                    <motion.div
                        onMouseOver={() => handleHover('layer5')}
                        onMouseLeave={() => handleHoverLeave('layer5')}
                        style={{ position: 'absolute', zIndex: 3 }}
                        {...animationProps}
                    >
                        <Image
                            src="/Layer 5.png"
                            className="min-w-full justify-center w-4/6"
                            width={1000}
                            height={1000}
                            alt="Can't load Image"
                        />
                    </motion.div>
                </div>
            </div>
        </div>
        </div>
    );
}

export default App;
