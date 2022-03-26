import { Feed } from '../components/svg'

const FBCard = ({ ...props }) => {
  return (
    <div className="bg-[white] p-5 rounded-md  border  ">
      <div className="w-full flex items-center justify-center">
        <Feed Width="60" St="fill-yellow m-auto" />
      </div>
      <div className="text-center pt-6">
        <p className="text-red flex items-center justify-center">
          FeedBack From <p className="font-bold">&nbsp;{props.fullname}</p>
        </p>
        <p className="">{props.description}</p>
      </div>
    </div>
  )
}

export default FBCard
