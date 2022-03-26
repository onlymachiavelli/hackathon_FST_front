import Layout from '../layout/ModeratorLayout'
import FBCard from './fbackcard'
const Moderator = () => {
  return (
    <Layout>
      <h1 className="font-bold">Feedback CRUD</h1>
      <div className="grid gap-1 grid-cols-2 pt-5">
        <FBCard
          fullname="Si Machiavelli"
          description="My Bathroom Is Broken ! there's some sort of shit in there"
        />
        <FBCard
          fullname="Si Machiavelli"
          description="My Bathroom Is Broken ! there's some sort of shit in there"
        />
        <FBCard
          fullname="Si Machiavelli"
          description="My Bathroom Is Broken ! there's some sort of shit in there"
        />
        <FBCard
          fullname="Si Machiavelli"
          description="My Bathroom Is Broken ! there's some sort of shit in there"
        />
      </div>
    </Layout>
  )
}

export default Moderator
