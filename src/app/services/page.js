import React from 'react'
import Banner from "../components/our-work/components/Banner";
import StatsSection from "../components/our-work/components/StatsSection";
import HealthcareCampSection from "../components/our-work/components/HealthcareCampSection";
import ServicesGrid from "../components/home/components/ServicesGrid";
import ImpactSection from "../components/our-work/components/ImpactSection";
import Together from "../components/our-work/components/Together";
import LatestStories from "../components/home/components/LatestStories";
import FAQSectionService from "../components/our-work/FAQSectionServices";

const page = () => {
  return (
    <div className='bg-white space-y-40'>
      <Banner />
      <StatsSection />
      <HealthcareCampSection />
      <ServicesGrid />
      <ImpactSection />
      <Together />
      <LatestStories showLoadMore={false} />
      <FAQSectionService />

    </div>
  )
}

export default page