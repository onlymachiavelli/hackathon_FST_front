// import Layout from '../layout/LandlordLayout'
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
    <div className="w-full h-screen">
      <MapContainer
        center={[36.833251, 10.1461659]}
        zoom={13}
        className="w-full h-screen"
      >
        <CheckPosition />
      </MapContainer>
    </div>
  )
}

export default LandLoard
