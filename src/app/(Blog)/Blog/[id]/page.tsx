import React from 'react';
import BlogHeader from "@/components/Blog/Banner/BlogHeader";
import PostBanner from "@/components/Blog/Banner/PostBanner";

function page() {
    return (
        <div className="flex justify-evenly space-x-6 mx-4">
            <div className="bg-cyan-700 h-screen z-10 sticky top-0 left-0 w-1/4 p-4">
a
            </div>
            <div className="bg-cyan-800 h-full w-1/2">
                <PostBanner imageUrl="https://cdn.pixabay.com/photo/2016/09/01/19/53/pocket-watch-1637396_1280.jpg"/>
                    <BlogHeader/>
                <BlogHeader/>
                <BlogHeader/>
                <BlogHeader/>
                <BlogHeader/>
            </div>
            <div className="bg-cyan-900 h-screen w-1/4 p-4">
c
            </div>
        </div>
    );
}

export default page;