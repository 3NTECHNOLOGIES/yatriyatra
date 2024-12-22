import AboutUs from "@/components/AboutUs";
import Banner from "@/components/Banner";
import ContactUs from "@/components/ContactUs";
import FAQPage from "@/components/FAQPage";
import FeaturedTours from "@/components/FeaturedTours";
import Footer from "@/components/Footer";
import Navbar from "@/components/navbar.tsx/Navbar";
import WhyChooseUs from "@/components/WhyChooseUs";
import React from "react";

function Index() {
  return (
    <div className="bg-white">
      <Navbar />
      <Banner />
      <WhyChooseUs />
      <AboutUs />
      <FAQPage />
      {/* <FeaturedTours /> */}
      <ContactUs />
      <Footer />
    </div>
  );
}

export default Index;
