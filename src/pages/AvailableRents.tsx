import TopBar from '../layout/LP/TopBar'
import AVRCard from './../components/ARCard'

import { useRent } from '../store'
import { useEffect } from 'react'
const AvailableRents = () => {
  const store = useRent()

  useEffect(() => {
    store.launchGetAll()
  }, [])
  return (
    <div>
      <TopBar />

      <div className="w-full flex items-center justify-center ">
        <div className="bg-[white] w-3/4 ">
          <br />

          <p className="text-center text-gray-900 font-bold text-2xl pt-10">
            AVAILABLE LANDS
          </p>
          <div className="grid grid-cols-2 w-full gap-1  place-items-center py-4">
            {store.all.map(rent => (
              <AVRCard
                key={rent.id}
                title={rent.title}
                phone={rent.land.moderator.phone}
                description={rent.content}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default AvailableRents
