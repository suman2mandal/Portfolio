import React from "react";
import Banner from "@/components/Banner";
import Footer from "@/components/Footer";
import VerticalStepper from "@/components/VerticalStepper";

function Home() {
  return (
    <div className="bg-white/40 text-black dark:text-white dark:bg-white/10">
      <Banner />
        <VerticalStepper/>
      <Footer />
    </div>
  );
}

export default Home;
