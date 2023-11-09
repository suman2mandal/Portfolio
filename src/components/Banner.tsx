import React from 'react';
import Image from "next/image";

function Banner() {

    return (
        <>
            <div className="p-6 pt-28 flex flex-col justify-center">
                    <h1 className="text-5xl font-bold flex justify-center">The Ultimate Starter Template You</h1>
                    <h3 className="text-4xl mt-2 font-bold flex justify-center"> Need To Start Your Astro Project</h3>
                <p className="dark:text-gray-400 text-gray-800 mt-6 text-center">Astroplate is a free starter template built with Astro and TailwindCSS,
                    providing everything you need to<br/> jumpstart your Astro project and save
                    valuable time.</p>
                <div>
                    <div className="flex mt-6 justify-center">
                <button type="button" className="dark:bg-white bg-gray-300 relative inline-flex items-center text-black font-bold hover:text-gray-500 px-4 justify-center rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
                        aria-controls="mobile-menu" aria-expanded="false">Get Started For Free
                </button>
                    </div>
                    <div className="flex mt-10 justify-center">
                    <Image src="/banner.png" className="  justify-center h-1/6 w-4/6" width={1000} height={1000} alt="Can't load Image"/>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Banner;