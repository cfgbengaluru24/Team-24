import React from 'react'
import LabHistStats from './charts/LabHistory'
import RevHistStats from './charts/RevenueHistory'
import MarketPlace from './charts/MarketPlace'

export default function Home() {
  return (
    <div>
        <div className='grid grid-cols-2 gap-4 mb-5 justify-center items-center'>
        <LabHistStats />
        <RevHistStats />
        </div>
        <MarketPlace />
    </div>
  )
}
