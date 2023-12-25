"use client";
import React from 'react';
import BlogHeader from "@/components/Blog/Banner/BlogHeader";
import PostBanner from "@/components/Blog/Banner/PostBanner";
import Firstpost from "@/components/Blog/Contents/MDX/Firstpost.mdx";
import Pagination from "@/components/Blog/Pagination/Pagination";
import SidebarTabLinkProps from "@/components/Blog/Contents/SidebarTabLinkProps";
import { TbTransitionTop } from "react-icons/tb";
import Template from "@/components/Blog/Contents/Post/Template";
import {Link } from "@/components/Blog/Contents/Post/Template";

function Page() {
    const links: Link[] = [
        {
            link_text: "Choosing a Programming Language",
            indent: 2,
            jump: "Choosing-a-Programming-Language",
        },
        {
            icon: <TbTransitionTop />,
            link_text: "Go to Top",
            indent: 2,
            jump: "top",
        }
    ];

    return (
        <div>
            {/* Assuming `Template` is a component you have defined */}
            {/* Make sure to replace it with the actual component you want to use */}
            <Template links={links} BannerImage={"https://cdn.pixabay.com/photo/2016/09/01/19/53/pocket-watch-1637396_1280.jpg"} Title={"Getting Started with Programming"} Posts={<Firstpost/>} Others={"link"} />
            <div className="mt-4">
                <Pagination />
            </div>
        </div>
    );
}

export default Page;
