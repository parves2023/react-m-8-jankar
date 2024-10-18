import React from 'react'
import Banner from '../Banner/Banner'
import Categorylists from '../CategoryList/Categorylists'
import FeaturedJobs from '../FeaturedJobs/FeaturedJobs'

function Home() {
  return (
    <div>
        <Banner></Banner>
        <Categorylists></Categorylists>
        <FeaturedJobs></FeaturedJobs>
    </div>
  )
}

export default Home