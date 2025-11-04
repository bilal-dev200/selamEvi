import React from 'react'
import Banner from "../components/donate/components/Banner";
import From from "../components/donate/components/form";
import ImpactPage from "../components/home/components/ImpactPage";
import Trusted from "../components/donate/components/Trusted"
import LatestStories from "../components/home/components/LatestStories";
import FAQSection from "../components/home/components/FAQSection";
import HumanitarianEfforts from '../components/home/components/HumanitarianEfforts'

const page = () => {
  return (
    <div>
      <Banner />
      <From />
      <HumanitarianEfforts initialCount={8} showLoadMore={false} />
      <ImpactPage />
      <Trusted />
      <LatestStories />
      <FAQSection />
    </div>
  )
}

export default page