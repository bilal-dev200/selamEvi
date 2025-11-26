import React from 'react'
import Banner from "../components/education/components/Banner";
import CampSection from "../components/education/components/CampSection";
import SupportSection from "../components/education/components/SupportSection";
import ImpactPage from '../components/home/components/ImpactPage';
import ChildSection from "../components/education/components/ChildSection";
import Together from "../components/our-work/components/Together";
import LatestStories from '../components/home/components/LatestStories';
import FAQSection from '../components/home/components/FAQSection';







const page = () => {
  return (
    <div className='bg-white'>
      <Banner />
      <CampSection />
      <SupportSection />
      <ImpactPage />
      <ChildSection />
      <Together />
      <LatestStories />
      <FAQSection />
    </div>
  )
}

export default page