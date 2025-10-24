import React from 'react'
import Hero from '../components/campaigns/hero'
import Section1 from '../components/campaigns/section1'
import Section2 from '../components/campaigns/section2'
import Section3 from '../components/campaigns/section3'

const Campaigns = () => {
  return (
    <div>
      <Hero />
      <Section1 />
      <Section2 />
      <Section3/>
      <Section2
        heading="Our Ongoing Efforts"
        paragraph="These initiatives bring immediate relief and long-term change to those who need it most."
      />
    </div>
  )
}

export default Campaigns