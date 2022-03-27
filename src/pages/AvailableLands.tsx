import LandCard from '../components/LandsCard'
import { Money, Feed, Send } from '../components/svg'
import TopBar from '../layout/Moderator/TopBar'
const AvailableLands = () => {
  return (
    <div>
      <TopBar />

      <div className="w-full flex items-center justify-center ">
        <div className="bg-[white] w-3/4 ">
          <br />

          <p className="text-center text-gray-900 font-bold text-2xl pt-10">
            AVAILABLE LANDS
          </p>
          <div className="grid grid-cols-2 w-full gap-1  place-items-center py-4">
            <LandCard fullname={'Only Machiavelli'} />
            <LandCard fullname={'Only Machiavelli'} />
            <LandCard fullname={'Only Machiavelli'} />
            <LandCard fullname={'Only Machiavelli'} />
            <LandCard fullname={'Only Machiavelli'} />
            <LandCard fullname={'Only Machiavelli'} />
          </div>
        </div>
      </div>
    </div>
  )
}

export default AvailableLands
