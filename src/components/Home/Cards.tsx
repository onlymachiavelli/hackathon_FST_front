const CardHome = ({ ...props }) => {
  return (
    <div className="grid grid-cols-1 border-l-4 border-green px-5 bg-[white] py-10 shadow border rounded">
      <div className="m-auto">{props.svg}</div>
      <p className="font-bold text-gray-900 text-center p-4">{props.title}</p>

      <p className="text-gray-900">{props.description}</p>
    </div>
  )
}

export default CardHome
