import React from 'react'
import Banner from "../components/donate/components/Banner";
import From from "../components/donate/components/form";
import HumanitarianEfforts from "../components/donate/components/HumanitarianEfforts";
import ImpactPage from "../components/home/components/ImpactPage";
import Trusted from "../components/donate/components/Trusted"
import LatestStories from "../components/home/components/LatestStories";
import FAQSection from "../components/home/components/FAQSection";

const page = () => {
  return (
    <div>
     <Banner />
     <From/>
     <HumanitarianEfforts/>
<ImpactPage/>
<Trusted/>
 <LatestStories/>
    <FAQSection/>
    </div>
  )
}

export default page