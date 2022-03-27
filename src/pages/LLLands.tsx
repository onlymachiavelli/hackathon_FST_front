import SideBar from '../layout/Landlord/SideBar'
import TopBar from '../layout/Landlord/TopBar'
import NotificationPanel from '../components/NotificationPanel'

const Card = ({ ...props }) => {
  return (
    <article className="cursor-pointer border rounded-md p-3 bg-white flex text-gray-700 mb-2 hover:border-green-500 focus:outline-none focus:border-green-500">
      <div className="flex-1">
        <header className="flex font-bold mb-1">
          <h1 className="inline">
            {props.id} | {props.title ? props.title : 'Not Taken'}
          </h1>
        </header>
      </div>
    </article>
  )
}

import {
  MapContainer,
  TileLayer,
  Marker,
  Popup,
  useMapEvents,
  CircleMarker,
} from 'react-leaflet'
import { useState, useEffect } from 'react'
import { useLand } from '../store'

const CheckPosition = () => {
  const store = useLand()

  const [position, setPosition] = useState<[number, number] | null>(null)
  useMapEvents({
    click(x) {
      const { lat, lng } = x.latlng
      setPosition([lat, lng])
      console.log(lat, lng)
    },
  })

  const handleAddLand = async () => {
    if (position) {
      const [lat, lng] = position
      await store.add(lat, lng)
      setPosition(null)
    }
  }

  if (!position) return null

  return (
    <>
      <CircleMarker
        center={position}
        pathOptions={{ color: 'red' }}
        radius={20}
      >
        <Popup>
          <div className="!w-96 !h-32">
            <button onClick={handleAddLand}>Add this Property</button>
          </div>
        </Popup>
      </CircleMarker>
    </>
  )
}

const LandLoard = () => {
  const store = useLand()

  useEffect(() => {
    store.launchGetMine()
  }, [])

  console.log(store.mine)

  return (
    <div className="h-screen w-full flex overflow-hidden antialiased text-gray-800 bg-gray-100">
      <SideBar />
      <div className="flex-1 flex flex-col">
        <TopBar />
        <header
          aria-label="page caption"
          className="flex-none flex h-16 bg-gray-100 border-t px-4 items-center"
        >
          <h1 id="page-caption" className="text-lg">
            Properties View
          </h1>
        </header>
        <main className="flex-grow flex min-h-0 border-t">
          <NotificationPanel title="Properties">
            {store.mine?.map(land => (
              <Card
                key={land.id}
                id={land.id}
                title={land.moderator?.fullname}
              />
            ))}
          </NotificationPanel>
          <div className="w-full h-screen">
            <MapContainer
              center={[36.833251, 10.1461659]}
              zoom={13}
              className="w-full h-screen"
            >
              <TileLayer
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
              />

              {store.mine?.map(land => (
                <Marker position={[land.latitude, land.longitude]}>
                  <Popup>
                    <div className="!w-96 !h-32">
                      <h1>{land.moderator?.fullname}</h1>
                    </div>
                  </Popup>
                </Marker>
              ))}
              <CheckPosition />
            </MapContainer>
          </div>
        </main>
      </div>
    </div>
  )
}

export default LandLoard
