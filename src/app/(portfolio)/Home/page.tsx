import React from "react";
import Banner from "@/components/portfolio/Banner/Banner";
import Footer from "@/components/portfolio/Footer/Footer";
import VerticalStepper from "@/components/portfolio/Education/VerticalStepper";
import ContactMe from "@/components/portfolio/Contact/ContactMe";
import ContactForm from "@/components/portfolio/Contact/ContactForm";
import KnownFrameworks from "@/components/portfolio/Technologies and Frameworks/KnownFrameworks";
// import AllCirtificates from "@/components/Cirtificates/AllCirtificates";
import Education from "@/components/portfolio/Education/Education";
import BlogHeader from "@/components/Blog/Banner/BlogHeader";
import Projects from "@/components/portfolio/Projects/Projects";
import Pagination from "@/components/Blog/Pagination/Pagination";
import Navbar from "@/components/Nav/Navbar";
import Projects2 from "@/components/portfolio/Projects/Projects2";
import KnownTechnologies from "@/components/portfolio/Technologies and Frameworks/KnownTechnologies";
import ToolStack from "@/components/portfolio/Technologies and Frameworks/ToolStack";
import Myskills from "@/components/portfolio/Techstack/page";
import MyProjects from "@/components/MyProjects/page";
import AllCirtificates from "@/components/portfolio/Certificates/AllCertificates";

function Home() {
  return (
    <div className="bg-white/40 text-black dark:text-white dark:bg-white/10 " style={{scrollBehavior: "smooth"}}>
        <Navbar/>
        <Banner/>
        <Education/>
        {/*<Projects/>*/}
        {/* <Projects2/> */}
        <MyProjects/>
        {/*<KnownFrameworks/>*/}
        {/* <KnownTechnologies/> */}
        <Myskills/>
        {/*<ToolStack/>*/}
        <AllCirtificates/>
        <ContactForm/>
        <Footer />
    </div>
  );
}

export default Home;
