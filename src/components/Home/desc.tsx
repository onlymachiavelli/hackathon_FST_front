import { Building } from '../svg'
const Desc = () => {
  return (
    <div className="w-full flex items-center justify-center">
      <div className="grid grid-cols-2 place-content-center ">
        <div className="flex items-center justify-center">
          <Building Height="400" />
        </div>
        <div className="grid place-content-center">
          <p className="font-bold text-green text-3xl">What is LandHippo?</p>
          <p className="text-left p-3 w-3/4 text-xl">
          Established just in 2022, LandHippo is a dynamic online full-service real estate firm specializing in residential, commercial and consulting real estates services in Many countries. Known for exceptional features and specialized developers, LandHippo leverages cutting-edge technology, marketing savvy and expert moderators and network, to ensure that the client gets the right deal at the best price!
          </p>
        </div>
      </div>
    </div>
  )
}

export default Desc
