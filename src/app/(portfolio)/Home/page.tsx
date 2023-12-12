import React from "react";
import Banner from "@/components/portfolio/Banner/Banner";
import Footer from "@/components/portfolio/Footer/Footer";
import VerticalStepper from "@/components/portfolio/Education/VerticalStepper";
import ContactMe from "@/components/portfolio/Contact/ContactMe";
import ContactForm from "@/components/portfolio/Contact/ContactForm";
import KnownFrameworks from "@/components/portfolio/Technologies and Frameworks/KnownFrameworks";
// import AllCirtificates from "@/components/Cirtificates/AllCirtificates";
// import Education from "@/components/Education/Education";
import BlogHeader from "@/components/Blog/Banner/BlogHeader";
import Projects from "@/components/portfolio/Projects/Projects";
import Pagination from "@/components/Blog/Pagination/Pagination";
import Navbar from "@/components/Nav/Navbar";
import Projects2 from "@/components/portfolio/Projects/Projects2";
import KnownTechnologies from "@/components/portfolio/Technologies and Frameworks/KnownTechnologies";
import ToolStack from "@/components/portfolio/Technologies and Frameworks/ToolStack";

function Home() {
  return (
    <div className="bg-white/40 text-black dark:text-white dark:bg-white/10">
        <Navbar/>
        <Banner/>
        {/*<Education/>*/}
        {/*<Projects/>*/}
        <Projects2/>
        {/*<KnownFrameworks/>*/}
        <KnownTechnologies/>
        {/*<ToolStack/>*/}
        {/*<AllCirtificates/>*/}
        <ContactForm/>
        <Footer />
    </div>
  );
}

export default Home;
