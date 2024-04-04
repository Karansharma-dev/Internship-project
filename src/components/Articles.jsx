import React from 'react'
import Card from './Card'
import Cardfull from './Cardfull'
import Newsletter from './Newsletter'

function Articles() {
  return (
    <>
    <div className='articles-section flex justify-center flex-wrap gap-10 p-10'>
    <Card/>
    <Card/>
    <Card/>
    <Card/>
    <Card/>
    <Card/>
    </div>
    <div className="card-full bg-gray-100 max-w-full">
    <Cardfull/>
    </div>
    <div className='articles-section flex justify-center flex-wrap gap-10 p-10'>
    <Card/>
    <Card/>
    <Card/>
    </div>
    <Newsletter/>
    </>
  )
}

export default Articles