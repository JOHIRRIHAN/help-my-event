import React from 'react'
import Hero from './Hero'
import Furniture from './Furniture'
import FurnitureGrid from './FurnitureGrid'
import Faq from './Faq'

const Home = () => {
  return (
    <div className='bg-base-200 pt-20'>
      <Hero />
      <Furniture />
        <FurnitureGrid />
        <Faq />
    </div>
  )
}

export default Home
