import { useState } from 'react'
import { Link } from 'react-router-dom'
import { useRequests } from '../store'

const LandCard = ({ ...props }) => {
  const store = useRequests()
  const [display, setDisplay] = useState(true)

  if (!display) return null
  return (
    <div className=" bg-[white] p-4 rounded-md  border flex items-center px-12">
      <p className="font-bold text-gray-900 pr-10">{props.fullname}</p>
      &nbsp;&nbsp;
      <Link
        target="_blank"
        to={`/map/${props.lat}/${props.lng}`}
        className="bg-transparent hover:bg-green hover:text-[white] text-green font-semibold  py-2 px-5 border border-green  rounded-sm flex items-center justify-center"
      >
        View Map
      </Link>
      &nbsp;
      <button
        onClick={async () => {
          await store.request(props.id)
          setDisplay(false)
        }}
        className="hover:bg-transparent bg-green text-[white] hover:text-green font-semibold  py-2 px-5 border border-green  rounded-sm flex items-center justify-center"
      >
        Apply
      </button>
    </div>
  )
}

export default LandCard
