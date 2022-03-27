import CardHome from '../components/Home/Cards'
import { Managements } from '../components/svg'
import TopBar from '../layout/LP/TopBar'
import Hero from '../layout/LP/Hero'
import Footer from '../layout/LP/Footer'
const Home = () => {
  return (
    <div className="w-full ">
      <TopBar />
      <Hero />
      <div className="flex items-center justify-center">
        <div className="grid grid-cols-3 gap-5 w-3/4 my-4">
          <CardHome
            title="Easy Managements"
            description="Lorem ipsum dolor sit amet. Aut omnis tempore eum consequatur harum ab "
            svg={<Managements Width="60" />}
          />
          <CardHome
            title="Easy Managements"
            description="Lorem ipsum dolor sit amet. Aut omnis tempore eum consequatur harum ab "
            svg={<Managements Width="60" />}
          />

          <CardHome
            title="Easy Managements"
            description="Lorem ipsum dolor sit amet. Aut omnis tempore eum consequatur harum ab "
            svg={<Managements Width="60" />}
          />
        </div>
      </div>
      <Footer/>
    </div>
  )
}

export default Home
