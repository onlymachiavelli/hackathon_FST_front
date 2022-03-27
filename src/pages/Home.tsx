import CardHome from '../components/Home/Cards'
import TopBar from '../layout/LP/TopBar'
import { Managements } from '../components/svg'
const Home = () => {
  return (
    <div className="w-full ">
      <TopBar />
      <div className="grid grid-cols-3 gap-5">
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
  )
}

export default Home
