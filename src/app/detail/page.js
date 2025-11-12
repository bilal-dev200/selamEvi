import React from 'react'
import Banner from "../components/detail/components/Banner";
import InfoSections from "../components/detail/components/InfoSections";
import InforSections from "../components/detail/components/InforSections";
import InSections from "../components/detail/components/InSections";

const page = () => {
  return (
    <div className='bg-white'>
      <Banner />
      <InfoSections />
      <InforSections />
      <InSections />


    </div>
  )
}

export default page