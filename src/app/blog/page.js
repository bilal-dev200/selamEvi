import React from 'react'
import Banner from "../components/blog/components/Banner";
import LatestStories from '../components/home/components/LatestStories';

const page = () => {
  return (
    <div className='bg-white  space-y-40'>
      <Banner />
      <LatestStories
  title="Bringing Healthcare to Remote Villages"
  subtitle="Explore updates, success stories, and the impact your support creates across communities."
  showLoadMore={false}
/>
      <LatestStories
  title="Education for Every Child"
  subtitle="Explore updates, success , and the impact your support creates across communities."
    showLoadMore={true}

 />




    </div>
  )
}

export default page