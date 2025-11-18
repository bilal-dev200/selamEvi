import React from 'react'
import Banner from "../components/donate/components/Banner";
import From from "../components/donate/components/form";
import Together from "../components/our-work/components/Together";
import Trusted from "../components/donate/components/Trusted"
import FAQSectionDonate from "../components/donate/components/FAQSectionDonate";
import HumanitarianEfforts from '../components/home/components/HumanitarianEfforts'
import LatestStories from '../components/home/components/LatestStories';

const page = () => {
  return (
    <div className='bg-white  space-y-40'>
      <Banner />
      <From />
      <HumanitarianEfforts initialCount={8} showLoadMore={true} />
      <Together />
      <Trusted />
      <LatestStories showLoadMore={false} />
      <FAQSectionDonate />
    </div>
  )
}

export default page