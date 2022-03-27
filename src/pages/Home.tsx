import CardHome from '../components/Home/Cards'
import { Managements, Safe, Agile } from '../components/svg'
import TopBar from '../layout/LP/TopBar'
import Hero from '../layout/LP/Hero'
const Home = () => {
  return (
    <div className="w-full ">
      <TopBar />
      <Hero />
      <br />
      <br />
      <p className="text-center px-10 font-bold text-green text-3xl">
        OUR GOALS
      </p>
      <br />
      <div className="flex items-center justify-center">
        <div className="grid grid-cols-3 gap-5 w-3/4 ">
          <CardHome
            title="Easy Managements"
            description="Lorem ipsum dolor sit amet. Aut omnis tempore eum consequatur harum ab "
            svg={<Managements Width="60" />}
          />
          <CardHome
            title="Agile"
            description="Lorem ipsum dolor sit amet. Aut omnis tempore eum consequatur harum ab "
            svg={<Agile Width="50" />}
          />

          <CardHome
            title="Safe Online Payement"
            description="Lorem ipsum dolor sit amet. Aut omnis tempore eum consequatur harum ab "
            svg={<Safe Width="60" />}
          />
        </div>
      </div>
      <br />
      <br />
    </div>
  )
}

export default Home
