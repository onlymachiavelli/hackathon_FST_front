import { useState, useEffect } from 'react'
import LandCard from '../components/LandsCard'
import { Money, Feed, Send } from '../components/svg'
import { useLand } from '../store'
import TopBar from '../layout/LP/TopBar'
const AvailableLands = () => {
  const store = useLand()

  useEffect(() => {
    store.launchGetAll()
  }, [])

  return (
    <div>
      <TopBar />
      <div className="w-full flex items-center justify-center ">
        <div className="bg-[white] w-full ">
          <br />
          <p className="text-center text-gray-900 font-bold text-2xl pt-10">
            AVAILABLE LANDS
          </p>
          <div className="grid grid-cols-2 w-full gap-1 py-4">
            {store.all?.map(land => (
              <LandCard
                id={land.id}
                key={land.id}
                fullname={land.owner.fullname}
                lat={land.latitude}
                lng={land.longitude}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default AvailableLands
