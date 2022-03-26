import Layout from '../layout/ModeratorLayout'
import RentCard from '../components/RentCard'
import { Plus } from '../components/svg'
const Moderator = () => {
  return (
    <Layout>
      <h1 className="font-bold ">Rents CRUD</h1>
      <br />
      <button className="bg-green hover:bg-hoverGreen  text-white font-bold py-2 px-5 rounded flex items-center justify-center">
        <Plus Width="17" /> &nbsp; Add Rent
      </button>
      <div className="grid gap-1 grid-cols-2 pt-4">
        <RentCard description="lorem Lorem ipsum dolor sit amet. Et sequi omnis et voluptatem facere aut rerum minima et minus " />
        <RentCard description="lorem Lorem ipsum dolor sit amet. Et sequi omnis et voluptatem facere aut rerum minima et minus " />
        <RentCard description="lorem Lorem ipsum dolor sit amet. Et sequi omnis et voluptatem facere aut rerum minima et minus " />
        <RentCard description="lorem Lorem ipsum dolor sit amet. Et sequi omnis et voluptatem facere aut rerum minima et minus " />
      </div>
    </Layout>
  )
}

export default Moderator
