import React from "react";
import Banner from "@/components/Banner";
import Footer from "@/components/Footer";

function Home() {
  return (
    <div className="bg-white/40 text-black dark:text-white dark:bg-white/10">
      <Banner />
      <Footer />
    </div>
  );
}

export default Home;
