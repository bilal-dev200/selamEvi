import React from 'react'
import Hero from '../components/campaigns/hero'
import Section1 from '../components/campaigns/section1'
import Section4 from '../components/campaigns/section4'
import HumanitarianEfforts from '../components/home/components/HumanitarianEfforts'
import LatestStories from '../components/home/components/LatestStories'
import CampaignsFAQ from '../components/campaigns/CampaignsFaQ'
import ImpactPage from '../components/home/components/ImpactPage'
import Together from '../components/our-work/components/Together'



const Campaigns = () => {
  return (
    <div className='bg-white space-y-40 mb-4 :px-1.5 '>
      <Hero />
      <Section1 />
      <HumanitarianEfforts initialCount={8} showLoadMore={true} />
      <ImpactPage />
      <Section4 />
      <HumanitarianEfforts initialCount={8} showLoadMore={false} showRaisedGoal={false} showSlider={false} />
      <Together />
      <LatestStories showLoadMore={false} />

      <CampaignsFAQ />
    </div>
  )
}

export default Campaigns