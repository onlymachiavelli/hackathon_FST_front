import CardHome from '../components/Home/Cards'
import { Managements, Safe, Agile } from '../components/svg'
import TopBar from '../layout/LP/TopBar'
import Hero from '../layout/LP/Hero'
import Footer from '../layout/LP/Footer'
import Desc from '../components/Home/desc'
const Home = () => {
  return (
    <div className="w-full ">
      <TopBar />
      <Hero />

      <br />
      <br />
      <Desc />
      <br />
      <br />
      <p className="text-center px-10 font-bold text-green text-3xl">
        OUR GOALS
      </p>
      <br />
      <div className="flex items-center justify-center">
        <div className="grid grid-cols-3 gap-5 w-3/4 my-4">
          <CardHome
            title="Easy Managements"
            description="Easily include your tenants, control rents. People can also easily find properties that fit their needs."
            svg={<Managements Width="60" />}
          />
          <CardHome
            title="Agile"
            description="Manage all your properties, tenants and moderators with our quick-to-setup agile system based on modern stack."
            svg={<Agile Width="50" />}
          />

          <CardHome
            title="Safe Online Payement"
            description="Ability to pay your rent hand-to-hand at our moderators syndical offices or online through secure third-party services like Paymee."
            svg={<Safe Width="60" />}
          />
        </div>
      </div>
      <br />
      <br />
      <Footer />
    </div>
  )
}

export default Home
