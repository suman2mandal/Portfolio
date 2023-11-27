import React from 'react';
import {FaFlask, FaReact} from "react-icons/fa";
import {SiDjango, SiExpress, SiMongodb, SiTailwindcss } from 'react-icons/si';
import {TbBrandLaravel, TbBrandNextjs } from "react-icons/tb";

function KnownTechnologies() {
    return (
        <>
        <div className="text-4xl font-bold flex justify-center">
            Tech Stack
        </div>
        <div className="flex  justify-center space-x-4 mt-24 mb-6">
            <div className="flex   justify-center px-40 py-16 rounded-2xl">
                <FaReact className="text-4xl"/>
            </div>
            <div className="flex   justify-center px-40 py-16 rounded-2xl">
                <TbBrandNextjs className="text-4xl"/>
            </div>
            <div className="flex   justify-center px-40 py-16 rounded-2xl">
                <SiTailwindcss className="text-4xl"/>
            </div>
            <div className="flex   justify-center px-40 py-16 rounded-2xl">
                <SiExpress className="text-4xl"/>
            </div>
        </div>
            <div className="flex justify-center space-x-4 mt-6 mb-24">
                <div className="flex justify-center px-40 py-16 rounded-2xl">
                    <SiMongodb className="text-4xl"/>
                </div>
                <div className="flex justify-center px-40 py-16 rounded-2xl">
                    <SiDjango className="text-4xl"/>
                </div>
                <div className="flex justify-center px-40 py-16 rounded-2xl">
                    <FaFlask className="text-4xl"/>
                </div>
                <div className="flex justify-center px-40 py-16 rounded-2xl">
                    <TbBrandLaravel className="text-4xl"/>
                </div>
            </div>

        </>
    );
}

export default KnownTechnologies;