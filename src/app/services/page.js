import React from 'react'
import Banner from "../components/our-work/components/Banner";
import StatsSection from "../components/our-work/components/StatsSection";
import HealthcareCampSection from "../components/our-work/components/HealthcareCampSection";
import ServicesGrid from "../components/home/components/ServicesGrid";
import ImpactSection from "../components/our-work/components/ImpactSection";
import Together from "../components/our-work/components/Together";
import LatestStories from "../components/home/components/LatestStories";
import FAQSection from "../components/home/components/FAQSection";

const page = () => {
  return (
    <div className='bg-white'>
      <Banner />
      <StatsSection />
      <HealthcareCampSection />
      <ServicesGrid />
      <ImpactSection />
      <Together />
      <LatestStories />
      <FAQSection />

    </div>
  )
}

export default page