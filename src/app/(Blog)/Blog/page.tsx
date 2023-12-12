import React from 'react';
import Navbar from "@/components/Nav/Navbar";
import BlogHeader from "@/components/Blog/Banner/BlogHeader";
import Pagination from "@/components/Blog/Pagination/Pagination";

function Page() {
    return (
        <>
            <BlogHeader/>
            <Pagination/>
        </>
    );
}

export default Page;