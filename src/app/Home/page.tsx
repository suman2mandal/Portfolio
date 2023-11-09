import React from 'react';
import Banner from "@/components/Banner";
import Footer from "@/components/Footer";

function Home() {
    return (
        <div className="bg-white text-black dark:text-white dark:bg-slate-700">
            <Banner/>
            <Footer/>
        </div>
    );
}

export default Home;