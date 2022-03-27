const LandCard = ({ ...props }) => {
  return (
    <div className=" bg-[white] p-4 rounded-md  border flex items-center">
      <p className="font-bold text-gray-900">{props.fullname}</p>&nbsp;&nbsp;
      <button className="bg-transparent hover:bg-green hover:text-[white] text-green font-semibold  py-2 px-5 border border-green  rounded-sm flex items-center justify-center">
        View Map
      </button>
      &nbsp;
      <button className="hover:bg-transparent bg-green text-[white] hover:text-green font-semibold  py-2 px-5 border border-green  rounded-sm flex items-center justify-center">
        Apply
      </button>
    </div>
  )
}

export default LandCard
