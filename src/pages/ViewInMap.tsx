import { useParams } from 'react-router-dom'
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'

const ViewInMap = () => {
  const { lat, lng } = useParams()
  return (
    <MapContainer
      center={[36.833251, 10.1461659]}
      zoom={13}
      className="w-full h-screen"
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <Marker position={[Number(lat), Number(lng)]}>
        <Popup></Popup>
      </Marker>
    </MapContainer>
  )
}

export default ViewInMap
