import React from 'react'
import Hero from '../components/campaigns/hero'
import Section1 from '../components/campaigns/section1'
import Section3 from '../components/campaigns/section3'
import Section6 from '../components/campaigns/section6'
import Section4 from '../components/campaigns/section4'
import HumanitarianEfforts from '../components/home/components/HumanitarianEfforts'
import LatestStories from '../components/home/components/LatestStories'
import FAQSection from '../components/home/components/FAQSection'



const Campaigns = () => {
  return (
    <div className='bg-white space-y-40 mb-4 :px-1.5 '>
      <Hero />
      <Section1 />
      <HumanitarianEfforts initialCount={8} showLoadMore={true} />
      <Section3 />
      <Section4 />
      <HumanitarianEfforts initialCount={8} showLoadMore={false} />
      <Section6 />
      <LatestStories showLoadMore={false}/>
      <FAQSection />
    </div>
  )
}

export default Campaigns