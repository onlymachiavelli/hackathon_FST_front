import { Person, Done, X } from './svg'

const ModCard = ({ ...props }) => {
  return (
    <div className="bg-[white] p-4 rounded-md  border  ">
      <p className="text-red font-bold text-xl">Moderator request</p>
      <br />
      <div className="flex items-center">
        <Person Width="50" />
        &nbsp;
        <p className="font-bold text-green">{props.fullname}&nbsp;</p>
        <p>&nbsp;Has Requested to Moderate </p>
        <p className="text-green">&nbsp;{props.land}</p>
      </div>
      <br />
      <div className="flex gap-2 justify-end">
        <button className="bg-green hover:bg-hoverGreen  text-white font-bold py-2 px-5 rounded flex items-center justify-center">
          <Done Width="17" /> &nbsp; Accept
        </button>
        <button className="bg-transparent  text-red font-semibold  py-2 px-5 border border-red  rounded flex items-center justify-center">
          <X Width="17" St="fill-red " /> &nbsp; Cancel
        </button>
      </div>
    </div>
  )
}

export default ModCard