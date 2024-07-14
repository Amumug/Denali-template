import React from 'react'
import Aside from './Aside'
import Card from './Card'
import Cards from './Cards'

function Hero() {
  return (
    <div className='h-full bg-gray py-5 px-32 flex justify-center items-start'>
      <Aside/>
      <Cards/>
    </div>
  )
}

export default Hero
