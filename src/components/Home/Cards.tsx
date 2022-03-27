const CardHome = ({ ...props }) => {
  return (
    <div className="grid grid-cols-1 border-l-4 border-green px-5 bg-white py-10 ">
      <p className="font-bold text-green">{props.title}</p>
      <div className="m-auto">{props.svg}</div>
      <p>{props.description}</p>
    </div>
  )
}

export default CardHome
