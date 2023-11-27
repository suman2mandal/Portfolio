import React from "react";
import Banner from "@/components/Banner";
import Footer from "@/components/Footer";
import VerticalStepper from "@/components/VerticalStepper";
import ContactMe from "@/components/ContactMe";
import ContactForm from "@/components/ContactForm";
import KnownFrameworks from "@/components/KnownFrameworks";
import AllProject from "@/components/AllProject";
import Education from "@/components/Education";
import BlogHeader from "@/components/BlogHeader";
import Projects from "@/components/Projects";
import Pagination from "@/components/Pagination";
import Navbar from "@/components/Nav/Navbar";
import Projects2 from "@/components/Projects2";
import KnownTechnologies from "@/components/KnownTechnologies";

function Home() {
  return (
    <div className="bg-white/40 text-black dark:text-white dark:bg-white/10">
        <Navbar/>
        <Banner/>
        <Education/>
        {/*<Projects/>*/}
        <Projects2/>
        {/*<KnownFrameworks/>*/}
        <KnownTechnologies/>
        <AllProject/>
        <ContactForm/>
        <Footer />
    </div>
  );
}

export default Home;
