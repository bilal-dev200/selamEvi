import React from 'react'
import Hero from '../components/campaigns/hero'
import Section1 from '../components/campaigns/section1'
import Section2 from '../components/campaigns/section2'
import Section3 from '../components/campaigns/section3'
import Section5 from '../components/campaigns/section5'
import Section6 from '../components/campaigns/section6'
import Section7 from '../components/campaigns/section7'
import Section4 from '../components/campaigns/section4'
import Faq from '../components/campaigns/faq'



const Campaigns = () => {
  return (
    <div className='bg-white mb-4'>
      <Hero />
      <Section1 />
      <Section2 />
      <Section3 />
      <Section4/>
      <Section5 />
      <Section6 />
      <Section7 />
      <Faq />
    </div> 
  )
}

export default Campaigns