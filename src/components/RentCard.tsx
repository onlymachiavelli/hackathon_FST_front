const RentCard = ({ ...props }) => {
  return (
    <div className="bg-[white] p-4 rounded-md  border  ">
      <p className="text-center font-bold text-gray-900 text-xl">
        Apartement Rent
      </p>
      <br />
      <p className="">{props.description}</p>
      <br />
      <button className="bg-transparent  text-red font-semibold  py-2 px-5 border border-red  rounded block m-auto ">
        END
      </button>
    </div>
  )
}

export default RentCard
