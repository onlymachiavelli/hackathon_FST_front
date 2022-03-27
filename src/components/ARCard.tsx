import { Link } from 'react-router-dom'

const AVRCard = ({ ...props }) => {
  return (
    <div className="bg-[white] p-4 rounded-md  border  ">
      <p className="text-center font-bold text-gray-900 text-xl">
        {props.title}
      </p>
      <br />
      <p className="font-bold text-gray-900 text-center">
        {' '}
        Phone : {props.phone}
      </p>
      <br />
      <p className="">{props.description}</p>
      <br />
      <div className="flex  justify-center items-center">
        <Link
          target="_blank"
          to={`/map/${props.lan}/${props.lng}`}
          className="hover:bg-transparent hover:text-green  text-[white] bg-green hover:bg-greenHover font-semibold  py-2 px-5 border border-green  rounded block  "
        >
          View Map
        </Link>
        &nbsp;
        <button className="bg-transparent  text-red font-semibold  py-2 px-5 border border-red  rounded block  ">
          END
        </button>
      </div>
    </div>
  )
}

export default AVRCard
