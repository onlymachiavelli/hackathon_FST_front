import TopBar from '../layout/Moderator/TopBar'

import AVRCard from './../components/ARCard'
const AvailableRents = () => {
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
            <AVRCard
              phone="54324884"
              description="lorem Lorem ipsum dolor sit amet. Et sequi omnis et voluptatem facere aut rerum minima et minus "
            />
            <AVRCard
              phone="54324884"
              description="lorem Lorem ipsum dolor sit amet. Et sequi omnis et voluptatem facere aut rerum minima et minus "
            />
            <AVRCard
              phone="54324884"
              description="lorem Lorem ipsum dolor sit amet. Et sequi omnis et voluptatem facere aut rerum minima et minus "
            />
            <AVRCard
              phone="54324884"
              description="lorem Lorem ipsum dolor sit amet. Et sequi omnis et voluptatem facere aut rerum minima et minus "
            />
            <AVRCard
              phone="54324884"
              description="lorem Lorem ipsum dolor sit amet. Et sequi omnis et voluptatem facere aut rerum minima et minus "
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default AvailableRents
