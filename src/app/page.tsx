import AboutUs from "@/components/AboutUs";
import Banner from "@/components/Banner";
import ContactUs from "@/components/ContactUs";
import FAQPage from "@/components/FAQPage";
import FeaturedTours from "@/components/FeaturedTours";
import WhyChooseUs from "@/components/WhyChooseUs";
import React from "react";

function Index() {
  return (
    <div className="bg-white">
      <Banner />
      <WhyChooseUs />
      <AboutUs />
      <FAQPage />
      {/* <FeaturedTours /> */}
      <ContactUs />
    </div>
  );
}

export default Index;
