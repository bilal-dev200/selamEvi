"use client"
import React, { useState } from 'react'
import Hero from "../components/about/hero"
import Section1 from "../components/about/section1"
import Section2 from "../components/about/section2"
import Services from "../components/Services"
import Section4 from "../components/about/section4"
import Section5 from "../components/about/section5"
import Section6 from "../components/about/section6"
import Section7 from "../components/about/section7"

import Faq from "../components/about/faq"


const About = () => {
  return (
    <div className="relative bg-white">
      <Hero />
      {/* section1 */}
      <Section1 />
      {/* section2 */}
      <Section2 />
      {/* section3 */}
      {/* section4 */}
      <Section4 />
      {/* section5 */}
      <Section5 />
      {/* section6 */}
      <Section6 />
      {/* section7 */}
      <Section7 />
      {/* FAq */}
      <Faq />






    </div>
  )
}

export default About;