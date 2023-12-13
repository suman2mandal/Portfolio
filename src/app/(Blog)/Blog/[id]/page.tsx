import React from 'react';
import BlogHeader from "@/components/Blog/Banner/BlogHeader";
import PostBanner from "@/components/Blog/Banner/PostBanner";
import Firstpost from "@/components/Blog/Contents/MDX/Firstpost.mdx";
import Pagination from "@/components/Blog/Pagination/Pagination";
function page() {
    return (
        <div>
        <div className="flex justify-between md:justify-evenly md:space-x-6 md:mx-28">
            <div className="bg-slate-600 overflow-scroll scrollbar-hide rounded-2xl h-fit z-10 md:sticky top-0 left-0 w-1/4 mt-4 fixed">
                <div className="">
                    <PostBanner imageUrl="https://cdn.pixabay.com/photo/2016/09/01/19/53/pocket-watch-1637396_1280.jpg"/>
                    <div className="p-4">
                        <ul className="flex flex-col space-y-2">
                            <li className="text-2xl font-bold">
                                <a href="#first-section">Text here</a>
                            </li>
                            <li className="text-2xl font-bold">
                                <a href="#">Text here</a>
                            </li>
                            <li className="text-2xl font-bold">
                                <a href="#">Text here</a>
                            </li>
                            <li className="text-2xl font-bold">
                                <a href="#">Text here</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className=" h-full w-full md:w-1/2 mt-4 rounded-2xl">
                <PostBanner imageUrl="https://cdn.pixabay.com/photo/2016/09/01/19/53/pocket-watch-1637396_1280.jpg"/>
                <div className="flex justify-between items-center my-2 mx-6 ">
                    <h1 className="text-4xl font-bold ">
                        Text here
                    </h1>
                    <div>
                        12/12/2023
                    </div>
                </div>
                {/*Get teh name from url*/}
                <div className="p-6 mt-10 bg-slate-600 rounded-2xl text-white">
                    <Firstpost/>
                    <BlogHeader/>
                    <BlogHeader/>
                    <BlogHeader/>
                    <BlogHeader/>
                    <div id="first-section"></div>
                    <BlogHeader/>
                </div>
            </div>
            <div className="bg-slate-600 rounded-2xl h-screen w-1/4 mt-4">
                <div className="p-4">
c
                </div>
            </div>
        </div>
        <div className="mt-4">
            <Pagination/>
        </div>
        </div>
    );
}

export default page;